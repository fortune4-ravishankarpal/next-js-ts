"use client";
import React, { useCallback } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product, ProductSchema } from "./product-variant.types";
import InputFormComponent, { GeneralError } from "@/components/component/formInput";
import { Button } from "@/components/ui/button";
type FormValues = Product;

export default function AddEditCommonFrom() {
    const M = useForm<FormValues>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            name: "",
            variants: [],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control: M.control,
        name: "variants",
    });
    let HandleSubmit = (data: FormValues) => {
        console.log("[96m [ data ]-24 [0m", data);
    };
    let AddVariant = useCallback(() => {
        append({ color: "", size: "", id: Math.random().toString() });
    }, []);
    return (
        <FormProvider {...M}>
            <form className="flex flex-col gap-2 w-1/2 mx-auto justify-end mt-10" onSubmit={M.handleSubmit(HandleSubmit)}>
                <div className="flex justify-center items-end gap-2">
                    <InputFormComponent label="Product Name" name="name" />
                    <Button size={"sm"} variant={"outline"} type="button" onClick={AddVariant}>
                        Add Variant
                    </Button>
                </div>
                {fields.map((field, index) => (
                    <React.Fragment key={field.id}>
                        <div className="flex gap-2 flex-col w-auto m-auto mt-5 ">
                            <label htmlFor="variant">Variant {index + 1}</label>
                            <div className="flex justify-center items-end gap-2">
                                <InputFormComponent label="color" name={`variants.${index}.color`} />
                                <InputFormComponent label="size" name={`variants.${index}.size`} />
                                <Button size={"sm"} variant={"outline"} type="button" onClick={() => remove(index)}>
                                    X
                                </Button>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
                <GeneralError name="variants" />
                <div className="flex justify-end">
                    <Button type="submit" size={"sm"} value={"Submit"}>
                        Submit
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
}
