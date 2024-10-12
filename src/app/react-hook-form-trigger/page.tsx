"use client";
import React from "react";
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@/components/ui/button";
import * as yup from "yup";
const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.string().required(),
    email: yup.string().email().required(),
});
const schema2 = yup.object().shape({
    name1: yup.string().required(),
    age1: yup.string().required(),
    email1: yup.string().email().required(),
});

let delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export default function Page() {
    const m = useForm({ resolver: yupResolver(schema) });
    const m2 = useForm({ resolver: yupResolver(schema2) });

    const onSubmit = (data: any) => delay(2000).then(() => alert(JSON.stringify(data)));

    let HandleSubmit = () => m.handleSubmit(() => m2.handleSubmit(onSubmit)())();

    if (m.formState.isSubmitting) {
        return <p className="text-red-500 text-center">Submitting...</p>;
    }
    return (
        <>
            <FormProvider {...m}>
                <form className="flex flex-col gap-2 w-1/2 mx-auto mt-10">
                    <InputComponent name="name" />
                    <InputComponent name="age" />
                    <InputComponent name="email" />
                </form>
            </FormProvider>
            <FormProvider {...m2}>
                <form className="flex flex-col gap-2 w-1/2 mx-auto mt-10">
                    <InputComponent name="name1" />
                    <InputComponent name="age1" />
                    <InputComponent name="email1" />
                    <Button size={"sm"} type="button" variant={"default"} onClick={HandleSubmit}>
                        Submit
                    </Button>
                </form>
            </FormProvider>
        </>
    );
}
let InputComponent = ({ name }: { name: string }) => {
    if (!name) {
        throw new Error("name is required");
    }
    let m = useFormContext();
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name}>{name}</label>
            <Controller
                name={name}
                control={m.control}
                render={({ field }) => (
                    <input
                        className="input border border-gray-300 rounded-md"
                        type="text"
                        {...field}
                    />
                )}
            />
            <ErrorMessage
                errors={m.formState.errors}
                name={name}
                render={({ message }) => <p className="text-red-500">{message}</p>}
            />
        </div>
    );
};
