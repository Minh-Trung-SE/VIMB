"use client"
import React, {FC, useCallback, useRef, useState} from 'react';
import {Language} from "@src/constants/Language";
import ContactForm from "@src/components/ContactUs/elements/ContactForm";
import QuestionForm from "@src/components/ContactUs/elements/QuestionForm";

type ContactUsFormProps = {
    language: Language
}

const ContactUSForm: FC<ContactUsFormProps> = ({language}) => {

    const [step, setStep] = useState("CONTACT")

    const contactValues = useRef<
        {
            fullName: string
            location: string
            phone: string
            message: string
        }
    >(
        {
            fullName: "",
            location: "",
            phone: "",
            message: "",
        }
    )

    const resetForm = useCallback(() => {
        contactValues.current = {
            fullName: "",
            location: "",
            phone: "",
            message: "",
        }
        setStep("CONTACT")
    }, [])

    const setContactValues = useCallback(
        (
            data: {
                fullName: string
                location: string
                phone: string
                message: string
            }
        ) => {
            contactValues.current = data
        },
        []
    )

    return step === "CONTACT" ? (
        <ContactForm language={language}  setStep={setStep} setContactValues={setContactValues}/>
    ) : (
        <QuestionForm language={language} values={contactValues.current} resetForm={resetForm}/>
    )

}

export default ContactUSForm