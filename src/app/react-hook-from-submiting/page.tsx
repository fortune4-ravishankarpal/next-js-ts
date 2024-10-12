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

let delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export default function Page() {
    const m = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data: any) => {
        await delay(2000);
        console.log("data", data);
    };

    let HandleSubmit = async () => {
        if (m.formState.isValid) {
            await delay(20000);
            onSubmit(m.getValues());
        }
    };
    if (m.formState.isSubmitting) {
        return <p className="text-red-500 text-center">Submitting...</p>;
    }
    return (
        <>
            <FormProvider {...m}>
                <form onSubmit={m.handleSubmit(onSubmit)} className="flex flex-col gap-2 w-1/2 mx-auto mt-10">
                    <InputComponent name="name" />
                    <InputComponent name="age" />
                    <InputComponent name="email" />
                    <Button size={"sm"} disabled={!m.formState.isValid} type="button" onClick={HandleSubmit} variant={"default"}>
                        Submit
                    </Button>
                </form>
            </FormProvider>
        </>
    );
}
let InputComponent = (props: any) => {
    let { name } = props;
    let m = useFormContext();
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name}>{name}</label>
            <Controller name={name} control={m.control} render={({ field }) => <input className="input border border-gray-300 rounded-md" type="text" {...field} />} />
            <ErrorMessage errors={m.formState.errors} name={name} render={({ message }) => <p className="text-red-500">{message}</p>} />
        </div>
    );
};
