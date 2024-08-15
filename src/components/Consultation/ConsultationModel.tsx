"use client"
import React, {FC, ReactNode} from 'react';
import {RowModel} from "@src/common/TanStackTable";
import {ConsultationRequestAttributes} from "@src/database/models";
import Modal from "@src/common/Modal";
import Button from "@src/common/Button";

type ConsultationModelProps = RowModel<ConsultationRequestAttributes> & {
    openTrigger?: ReactNode
}

const ConsultationModel: FC<ConsultationModelProps> = ({row, openTrigger }) => {

    return (
        <Modal.Root>
            <Modal.Trigger mode="open">
                {
                    openTrigger ?? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        </svg>
                    )
                }

            </Modal.Trigger>
            <Modal.Overlay/>
            <Modal.Content className="p-5 overflow-hidden">
                <div className="bg-white rounded max-w-screen-lg flex flex-col w-full h-full overflow-scroll">
                    <div className="px-5 py-2 border-b flex justify-between items-center">
                        <h1 className="font-medium text-primary">{row.fullName}</h1>
                        <Modal.Trigger className="hover:text-vn-red" mode="close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                            </svg>
                        </Modal.Trigger>
                    </div>
                    <div className="grow overflow-y-scroll scrollbar-sm">
                        <div className="grid grid-cols-2 gap-5 p-5">
                            <div className="space-y-1">
                                <p className="font-medium opacity-50">Full name</p>
                                <p className="p-2 border rounded">
                                    {row.fullName}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-medium opacity-50">Phone</p>
                                <p className="p-2 border rounded">
                                    {row.phone}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-medium opacity-50">Location</p>
                                <p className="p-2 border rounded">
                                    {row.location}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-medium opacity-50">Created at</p>
                                <p className="p-2 border rounded">
                                    {new Date(row.createdAt).toLocaleString()}
                                </p>
                            </div>
                            <div className="space-y-1 col-span-2">
                                <p className="font-medium opacity-50">Message</p>
                                <p className="p-2 border rounded">
                                    {row.message}
                                </p>
                            </div>
                            <div className="space-y-1 col-span-2">
                                <p className="font-medium opacity-50">What is your primary goal in obtaining a Vanuatu
                                    citizenship?</p>
                                <p className="p-2 border rounded">
                                    {row.attributes?.["question-1"]}
                                </p>
                            </div>
                            <div className="space-y-1 col-span-2">
                                <p className="font-medium opacity-50">What do you know about Vanuatu and the benefits of
                                    its citizenship?</p>
                                <p className="p-2 border rounded">
                                    {row.attributes?.["question-2"]}
                                </p>
                            </div>
                            <div className="space-y-1 col-span-2">
                                <p className="font-medium opacity-50">Why do you want Vanuatu citizenship
                                    specifically?</p>
                                <p className="p-2 border rounded">
                                    {row.attributes?.["question-3"]}
                                </p>
                            </div>
                            <div className="space-y-1 col-span-2">
                                <p className="font-medium opacity-50">Our service fee is $20,000USD for straight forward
                                    applications, what do you think of this fee?</p>
                                <p className="p-2 border rounded">
                                    {row.attributes?.["question-4"]}
                                </p>
                            </div>
                            <div className="space-y-1 col-span-2">
                                <p className="font-medium opacity-50">How soon will you be ready to invest into
                                    Vanuatu’s economy to obtain your family’s citizenship?</p>
                                <p className="p-2 border rounded">
                                    {row.attributes?.["question-5"]}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-2 border-t flex justify-end items-center">
                        <Modal.Trigger className="hover:text-vn-red" mode="close">
                            <Button variantType="outline" intent="error">
                                Đóng
                            </Button>
                        </Modal.Trigger>
                    </div>
                </div>
            </Modal.Content>
        </Modal.Root>
    );
};

export default ConsultationModel;