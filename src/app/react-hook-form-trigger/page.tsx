"use client";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import * as yup from "yup";
import InputFormComponent from "@/components/component/formInput";
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

    const onSubmit = (data: any) => delay(2000).then();
    // const onSubmit = (data: any) => delay(2000).then(() => alert(JSON.stringify(data)));

    let HandleSubmit = () => m.handleSubmit(() => m2.handleSubmit(onSubmit)())();
    if (m.formState.isSubmitting) {
        return (
            <p data-testid="loading" className="text-red-500 text-center">
                Loading...
            </p>
        );
    }
    return (
        <>
            <FormProvider {...m}>
                <form className="flex flex-col gap-2 w-1/2 mx-auto mt-10">
                    <InputFormComponent name="name" />
                    <InputFormComponent name="age" />
                    <InputFormComponent name="email" />
                </form>
            </FormProvider>
            <FormProvider {...m2}>
                <form className="flex flex-col gap-2 w-1/2 mx-auto mt-10">
                    <InputFormComponent name="name1" />
                    <InputFormComponent name="age1" />
                    <InputFormComponent name="email1" />
                    <Button size={"sm"} type="button" variant={"default"} onClick={HandleSubmit}>
                        Submit
                    </Button>
                </form>
            </FormProvider>
        </>
    );
}
