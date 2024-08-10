// "use client"
// import {TableHeaderGroups, TableLoadingRow, TableRows, TableSearch, TableSetting} from "@src/common/TanStackTable";
// import useSimpleTable from "@src/common/TanStackTable/hooks/UseSimpleTable";
// import {ConsultationRequestAttributes} from "@src/database/models";
// import useCallAPIState, {CALL_API_STATUS} from "@src/hooks/UseCallAPIState";
// import {createColumnHelper} from "@tanstack/table-core";
// import axios from "axios";
// import React, {useEffect} from 'react';
//
// const {accessor} = createColumnHelper<ConsultationRequestAttributes>()
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
//         "email",
//         {
//             header: "Email",
//         }
//     ),
//     accessor(
//         "phone",
//         {
//             header: "Phone",
//         }
//     ),
//     accessor(
//         "message",
//         {
//             header: "Message",
//         }
//     ),
//     accessor(
//         "createdAt",
//         {
//             header: "Created At",
//             cell: ({getValue}) => new Date(getValue()).toLocaleString()
//         }
//     ),
//
// ]
// const Page = () => {
//     const [consultant, setConsultant] = useCallAPIState<ConsultationRequestAttributes[]>(
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
//                     setConsultant(CALL_API_STATUS.LOADING)
//                     const response = await axios.get<ConsultationRequestAttributes[]>("/api/consultation-requests")
//                     setConsultant(CALL_API_STATUS.SUCCESS, response.data)
//                 }
//             )()
//         },
//         [setConsultant]
//     )
//
//     const table = useSimpleTable<ConsultationRequestAttributes>(
//         consultant.data,
//         columns
//     )
//
//     return (
//         <div className="p-5 space-y-5">
//             <div className="flex justify-between">
//                 <TableSearch table={table}/>
//                 <TableSetting table={table}/>
//             </div>
//             <div className="overflow-x-scroll scrollbar-sm">
//                 <table className="min-w-full border">
//                     <thead>
//                     <TableHeaderGroups table={table}/>
//                     </thead>
//                     <tbody>
//                     {
//                         consultant.loading ? (
//                             <TableLoadingRow table={table}/>
//                         ) : (
//                             <TableRows table={table}/>
//                         )
//                     }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };
//
// export default Page;