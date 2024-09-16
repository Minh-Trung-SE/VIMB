"use client"
import {TableHeaderGroups, TableLoadingRow, TableRows, TableSearch, TableSetting} from "@src/common/TanStackTable";
import useSimpleTable from "@src/common/TanStackTable/hooks/UseSimpleTable";
import BlogAction from "@src/components/Blog/elements/BlogAction";
import {BlogAttributes} from "@src/database/models/Blog/Model";
import useCallAPIState, {CALL_API_STATUS} from "@src/hooks/UseCallAPIState";
import {createColumnHelper} from "@tanstack/table-core";
import axios from "axios";
import Link from "next/link";
import React, {useEffect} from 'react';

const {accessor, display} = createColumnHelper<BlogAttributes>()

const columns = [
    accessor(
        "id",
        {
            size: 10,
            header: "ID",
            cell: ({row}) => (
                <Link href={`/dashboard/blogging?slug=${row.original.slug}&id=${row.original.id}`}>
                    {row.original.id}
                </Link>
            )
        }
    ),
    accessor(
        "slug",
        {
            header: "Slug",
        }
    ),
    accessor(
        "title",
        {
            header: "Title",
        }
    ),
    accessor(
        "createdAt",
        {
            header: "Created At",
            cell: ({getValue}) => new Date(getValue()).toLocaleString()
        }
    ),
    display(
        {
            id: "action",
            size: 50,
            header: "Action",
            cell: ({row, table}) => <BlogAction table={table} row={row.original} index={row.index}/>
        }
    )
]

const BlogManage = () => {
    const [blogs, setBlogs] = useCallAPIState<BlogAttributes[]>(
        {
            data: [],
            status: CALL_API_STATUS.IDLE
        }
    )

    useEffect(
        () => {
            (
                async () => {
                    setBlogs(CALL_API_STATUS.LOADING)
                    const response = await axios.get<BlogAttributes[]>(
                        "/api/blogs",
                        {
                            withCredentials: true
                        }
                    )
                    setBlogs(CALL_API_STATUS.SUCCESS, response.data)
                }
            )()
        },
        [setBlogs]
    )

    const table = useSimpleTable<BlogAttributes>(
        blogs.data,
        columns
    )

    return (
        <div className="p-5 space-y-5">
            <div className="flex justify-between">
                <TableSearch table={table}/>
                <TableSetting table={table}/>
            </div>
            <div className="overflow-x-scroll scrollbar-sm">
                <table className="min-w-full border">
                    <thead>
                    <TableHeaderGroups table={table}/>
                    </thead>
                    <tbody>
                    {
                        blogs.loading ? (
                            <TableLoadingRow table={table}/>
                        ) : (
                            <TableRows table={table}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlogManage;