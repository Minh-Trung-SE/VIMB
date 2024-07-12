"use client"
import {joiResolver} from "@hookform/resolvers/joi";
import {TextInput} from "@src/common/ReactHookForm";
import {TRIGGER_TOAST_TYPE, triggerToast} from "@src/common/Sonner";
import Logo from "@src/components/Header/elements/Logo";
import axios from "axios";
import * as Joi from "joi";
import {useRouter} from "next/navigation";
import React from 'react';
import {FormProvider, useForm} from "react-hook-form";

const Page = () => {
    const router = useRouter()
    const form = useForm(
        {
            defaultValues: {
                username: "",
                password: ""
            },
            resolver: joiResolver(
                Joi.object(
                    {
                        username: Joi.string().required(),
                        password: Joi.string().required()
                    }
                )
            )
        }
    )
    return (
        <div className="flex min-h-screen">
            <div className="flex min-h-full px-20 items-center">

                <FormProvider {...form}>
                    <form
                        onSubmit={
                            form.handleSubmit(
                                async (data) => {
                                    const {data: {status, message}} = await axios.post(
                                        "api/login",
                                        data
                                    )


                                    if (status === 200) {
                                        triggerToast(
                                            {
                                                header: "Success",
                                                body: message,
                                                type: TRIGGER_TOAST_TYPE.SUCCESS,
                                            }
                                        )
                                        router.push("/cms")
                                        return
                                    }
                                    triggerToast(
                                        {
                                            header: "Login failed",
                                            body: message,
                                            type: TRIGGER_TOAST_TYPE.ERROR,
                                        }
                                    )

                                    // form.reset()
                                }
                            )
                        }
                        className="w-96 space-y-5 p-5 rounded "
                    >

                        <div className="w-fit mx-auto">
                            <Logo/>
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-500 font-medium">Username</label>
                            <TextInput placeholder="Enter username" controller={{name: "username"}}/>
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-500 font-medium">Password</label>
                            <TextInput placeholder="Enter password" type="password" controller={{name: "password"}}/>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-deep-carrot-orange text-white py-2 px-5 rounded"
                        >
                            Submit
                        </button>
                    </form>
                </FormProvider>

            </div>
            <div
                className="grow"
                style={
                    {
                        backgroundImage: "url(https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80)",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }
                }
            >
            </div>
        </div>
    )
}

export default Page;