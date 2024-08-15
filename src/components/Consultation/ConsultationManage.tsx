"use client"
import {TableHeaderGroups, TableLoadingRow, TableRows, TableSearch, TableSetting} from "@src/common/TanStackTable";
import useSimpleTable from "@src/common/TanStackTable/hooks/UseSimpleTable";
import {ConsultationRequestAttributes} from "@src/database/models";
import useCallAPIState, {CALL_API_STATUS} from "@src/hooks/UseCallAPIState";
import {createColumnHelper} from "@tanstack/table-core";
import axios from "axios";
import React, {useEffect} from 'react';
import ConsultationModel from "@src/components/Consultation/ConsultationModel";

const {accessor, display} = createColumnHelper<ConsultationRequestAttributes>()

const columns = [
    accessor(
        "id",
        {
            size: 10,
            header: "ID",
            cell: ({table, row, getValue}) => <ConsultationModel openTrigger={`#${getValue()}`} table={table} row={row.original} index={row.index}/>

        }
    ),
    accessor(
        "fullName",
        {
            header: "Full Name",
        }
    ),
    accessor(
        "phone",
        {
            header: "Phone",
        }
    ),
    accessor(
        "location",
        {
            header: "Location",
        }
    ),
    accessor(
        "status",
        {
            header: "Status",
        }
    ),
    accessor(
        "message",
        {
            header: "Message",
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
            header: "",
            size: 40,
            id: "action",

            cell: ({table, row}) => <ConsultationModel table={table} row={row.original} index={row.index}/>
        }
    )
]

const ConsultationManage = () => {
    const [consultant, setConsultant] = useCallAPIState<ConsultationRequestAttributes[]>(
        {
            data: [],
            status: CALL_API_STATUS.IDLE
        }
    )

    useEffect(
        () => {
            (
                async () => {
                    setConsultant(CALL_API_STATUS.LOADING)
                    const response = await axios.get<ConsultationRequestAttributes[]>("/api/consultation-requests")
                    setConsultant(CALL_API_STATUS.SUCCESS, response.data)
                }
            )()
        },
        [setConsultant]
    )

    const table = useSimpleTable<ConsultationRequestAttributes>(
        consultant.data,
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
                        consultant.loading ? (
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

export default ConsultationManage;