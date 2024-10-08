"use client"
import {joiResolver} from "@hookform/resolvers/joi";
import React, {FC} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import Joi from "joi";
import {DropdownInput, ErrorMessage, TextAreaInput, TextInput} from "@src/common/ReactHookForm";
import {Language} from "@src/constants/Language";
import displayMessage from "@src/ultils/language";

type ContactFormProps = {
    language: Language,
    setContactValues: (
        data: {
            fullName: string
            location: string
            phone: string
            message: string
        }
    ) => void
    setStep: (step: string) => void
}

const ContactForm: FC<ContactFormProps> = ({language, setContactValues, setStep}) => {
    console.log(setContactValues)
    const form = useForm(
        {
            defaultValues: {
                fullName: "",
                location: "",
                phone: "",
                message: "",
            },
            resolver: joiResolver(
                Joi.object(
                    {
                        fullName: Joi.string().required(),
                        location: Joi.string().required(),
                        phone: Joi.string().required(),
                        message: Joi.string().allow(""),
                    }
                ).messages(
                    {
                        "string.empty": "Filed is required"
                    }
                )
            )
        }
    )
    return (
        <FormProvider {...form}>
            <form
                onSubmit={
                    form.handleSubmit(
                        async (data) => {
                            setContactValues(data)
                            setStep("QUESTIONER")
                        }
                    )
                }
                className="space-y-5 p-5 bg-rose-white rounded border"
            >
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    en: "Your full name",
                                    vi: "Tên đầy đủ"
                                },
                                language
                            )
                        }
                    </label>
                    <TextInput controller={{name: "fullName"}}/>
                    <ErrorMessage name="fullName"/>
                </div>
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    en: "Closest Office Location to you",
                                    vi: "Địa điểm gần nhất"
                                },
                                language
                            )
                        }
                    </label>

                    <DropdownInput
                        control={{name: "location"}}
                        className="bg-white py-2"
                        items={
                            [
                                {
                                    name: "Hồ Chí Minh",
                                    value: "HCM"
                                },
                                {
                                    name: "Đà Nẵng",
                                    value: "ĐN"
                                },
                                {
                                    name: "Hà Nội",
                                    value: "HN"
                                }
                            ]
                        }
                        placeholder={
                            displayMessage(
                                {
                                    en: "Closest Office Location to you",
                                    vi: "Chọn địa điểm gần nhất"
                                },
                                language
                            )
                        }
                    />
                    <ErrorMessage name="location"/>
                </div>
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    en: "Phone number",
                                    vi: "Số điện thoại"
                                },
                                language
                            )
                        }
                    </label>
                    <TextInput controller={{name: "phone"}}/>
                    <ErrorMessage name="phone"/>
                </div>
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    en: "Your preferred contact day and times",
                                    vi: "Ngày hoặc khung giờ mong muốn liên hệ"
                                },
                                language
                            )
                        }
                    </label>
                    <TextAreaInput
                        controller={{name: "message"}}
                        className="w-full border rounded py-2 px-3 outline-none focus:border-deep-carrot-orange"
                    />
                    <ErrorMessage name="message"/>
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-5 rounded"
                >
                    {language === "vi" ? "Tiếp tục" : "Next"}
                </button>
            </form>
        </FormProvider>
    );
};

export default ContactForm;