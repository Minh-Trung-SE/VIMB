"use client"
import {joiResolver} from "@hookform/resolvers/joi";
import {TRIGGER_TOAST_TYPE, triggerToast} from "@src/common/Sonner";
import axios from "axios";
import React, {FC} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import Joi from "joi";
import {DropdownInput, ErrorMessage, TextAreaInput, TextInput} from "@src/common/ReactHookForm";
import {Language} from "@src/constants/Language";
import displayMessage from "@src/ultils/language";

type QuestionFormProps = {
    language: Language,
    values:         {
        fullName: string
        location: string
        phone: string
        message: string
    },
    resetForm: () => void
}

const QuestionForm: FC<QuestionFormProps> = ({language, values, resetForm}) => {
    const form = useForm(
        {
            defaultValues: {
                "question-1": "",
                "question-2": "",
                "question-3": "",
                "question-4": "",
                "question-5": "",

            },
            resolver: joiResolver(
                Joi.object(
                    {
                        "question-1": Joi.string().required(),
                        "question-2": Joi.string().required(),
                        "question-3": Joi.string().required(),
                        "question-4": Joi.string().required(),
                        "question-5": Joi.string().required()
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
                            await axios.post(
                                "api/consultation-requests",
                                {
                                    ...values,
                                    attributes: data
                                }
                            )
                            triggerToast(
                                {
                                    header: "Send Successfully",
                                    body: "Thank you for your message. We will get back to you soon.",
                                    type: TRIGGER_TOAST_TYPE.SUCCESS,
                                }
                            )
                           resetForm()
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
                                    en: "What is your primary goal in obtaining a Vanuatu citizenship?",
                                    vi: "What is your primary goal in obtaining a Vanuatu citizenship?"
                                },
                                language
                            )
                        }
                    </label>
                    <TextAreaInput
                        controller={{name: "question-1"}}
                        className="w-full border rounded py-2 px-3 outline-none focus:border-deep-carrot-orange"
                    />
                    <ErrorMessage name="question-1"/>
                </div>
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    en: "What do you know about Vanuatu and the benefits of its citizenship?",
                                    vi: "What do you know about Vanuatu and the benefits of its citizenship?"
                                },
                                language
                            )
                        }
                    </label>
                    <TextAreaInput
                        controller={{name: "question-2"}}
                        className="w-full border rounded py-2 px-3 outline-none focus:border-deep-carrot-orange"
                    />
                    <ErrorMessage name="question-2"/>
                </div>
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    en: "Why do you want Vanuatu citizenship specifically?",
                                    vi: "Why do you want Vanuatu citizenship specifically?"
                                },
                                language
                            )
                        }
                    </label>
                    <TextAreaInput
                        controller={{name: "question-3"}}
                        className="w-full border rounded py-2 px-3 outline-none focus:border-deep-carrot-orange"
                    />
                    <ErrorMessage name="question-3"/>
                </div>
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    en: "Our service fee is $20,000USD for straight forward applications, what do you think of this fee?",
                                    vi: "Our service fee is $20,000USD for straight forward applications, what do you think of this fee?"
                                },
                                language
                            )
                        }
                    </label>

                    <DropdownInput
                        control={{name: "question-4"}}
                        className="bg-white py-2"
                        items={
                            [
                                {
                                    name: "Too high",
                                    value: "Too high"
                                },
                                {
                                    name: "Acceptable",
                                    value: "Acceptable"
                                }
                            ]
                        }
                        placeholder={
                            displayMessage(
                                {
                                    en: "Select",
                                    vi: "Chọn"
                                },
                                language
                            )
                        }
                    />
                    <ErrorMessage name="question-4"/>
                </div>
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">
                        {
                            displayMessage(
                                {
                                    en: "How soon will you be ready to invest into Vanuatu’s economy to obtain your family’s citizenship?",
                                    vi: "How soon will you be ready to invest into Vanuatu’s economy to obtain your family’s citizenship?"
                                },
                                language
                            )
                        }
                    </label>

                    <DropdownInput
                        control={{name: "question-5"}}
                        className="bg-white py-2"
                        items={
                            [
                                {
                                    name: "Within 3 months",
                                    value: "Within 3 months"
                                },
                                {
                                    name: "Within 6 months",
                                    value: "Within 6 months"
                                },
                                {
                                    name: "Within 1 year",
                                    value: "Within 1 year"
                                },
                                {
                                    name: "Just Enquiring",
                                    value: "Just Enquiring"
                                }
                            ]
                        }
                        placeholder={
                            displayMessage(
                                {
                                    en: "Select",
                                    vi: "Chọn"
                                },
                                language
                            )
                        }
                    />
                    <ErrorMessage name="question-5"/>
                </div>

                <button
                    type="submit"
                    className="w-full bg-vn-red text-white py-2 px-5 rounded"
                >
                    Submit
                </button>
            </form>
        </FormProvider>
    );
};

export default QuestionForm;