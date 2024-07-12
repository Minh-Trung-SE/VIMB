"use client"
import {joiResolver} from "@hookform/resolvers/joi";
import {TRIGGER_TOAST_TYPE, triggerToast} from "@src/common/Sonner";
import axios from "axios";
import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import * as Joi from "joi";
import {TextAreaInput, TextInput} from "@src/common/ReactHookForm";

const ContactForm = () => {
    const form = useForm(
        {
            defaultValues: {
                name: "",
                email: "",
                phone: "",
                message: "",
                consultationType: "General"
            },
            resolver: joiResolver(
                Joi.object(
                    {
                        name: Joi.string().required(),
                        phone: Joi.string().required(),
                        email: Joi.string().email({tlds: false}).required(),
                        message: Joi.string().required(),
                        consultationType: Joi.string().required()
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
                                data
                            )
                            triggerToast(
                                {
                                    header: "Send Successfully",
                                    body: "Thank you for your message. We will get back to you soon.",
                                    type: TRIGGER_TOAST_TYPE.SUCCESS,
                                }
                            )
                            form.reset()
                        }
                    )
                }
                className="space-y-5 p-5 bg-rose-white rounded border"
            >
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">Name</label>
                    <TextInput controller={{name: "name"}}/>
                </div>
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">Email</label>
                    <TextInput controller={{name: "email"}}/>
                </div>
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">Phone</label>
                    <TextInput controller={{name: "phone"}}/>
                </div>
                <div className="space-y-2">
                    <label className="text-gray-500 font-medium">Message</label>
                    <TextAreaInput
                        controller={{name: "message"}}
                        className="w-full border rounded py-2 px-3 outline-none focus:border-deep-carrot-orange"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-deep-carrot-orange text-white py-2 px-5 rounded"
                >
                    Submit
                </button>
            </form>
        </FormProvider>
    );
};

export default ContactForm;