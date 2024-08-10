// "use client"
// import {TableHeaderGroups, TableLoadingRow, TableRows, TableSearch, TableSetting} from "@src/common/TanStackTable";
// import useSimpleTable from "@src/common/TanStackTable/hooks/UseSimpleTable";
// import {ConsultationRequestAttributes, MemberAttributes} from "@src/database/models";
// import useCallAPIState, {CALL_API_STATUS} from "@src/hooks/UseCallAPIState";
// import {createColumnHelper} from "@tanstack/table-core";
// import axios from "axios";
// import React, {useEffect} from 'react';
//
// const {accessor} = createColumnHelper<MemberAttributes>()
//
// const columns = [
//     accessor(
//         "id",
//         {
//             header: "ID",
//         }
//     ),
//     accessor(
//         "name",
//         {
//             header: "Name",
//         }
//     ),
//     accessor(
//         "role",
//         {
//             header: "Role",
//         }
//     )
//
// ]
// const Page = () => {
//     const [members, setMembers] = useCallAPIState<MemberAttributes[]>(
//         {
//             data: [],
//             status: CALL_API_STATUS.IDLE
//         }
//     )
//
//     useEffect(
//         () => {
//             (
//                 async () => {
//                     setMembers(CALL_API_STATUS.LOADING)
//                     const response = await axios.get<MemberAttributes[]>("/api/member")
//                     setMembers(CALL_API_STATUS.SUCCESS, response.data)
//                 }
//             )()
//         },
//         [setMembers]
//     )
//
//     const table = useSimpleTable<MemberAttributes>(
//         members.data,
//         columns
//     )
//
//     return (
//         <div className="p-5 space-y-5">
//             <div className="flex justify-between">
//                 <TableSearch table={table}/>
//                 <TableSetting table={table}/>
//             </div>
//             <table className="min-w-full border">
//                 <thead>
//                 <TableHeaderGroups table={table}/>
//                 </thead>
//                 <tbody>
//                 {
//                     members.loading ? (
//                         <TableLoadingRow table={table}/>
//                     ) : (
//                         <TableRows table={table}/>
//                     )
//                 }
//                 </tbody>
//             </table>
//
//         </div>
//     );
// };
//
// export default Page;