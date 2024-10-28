import InputFormComponent, { GeneralError, RadioFormComponent, SelectFormComponent } from "@/components/component/formInput";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import * as Mt from "./masterService";

import { addMutation } from "./masterService";
const masterTemplateSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Template name is required"),
    fields: z.array(
        z.object({
            fieldName: z.string().min(1, "Field name is required"),
            fieldType: z.enum(["text", "number", "date"]), // etc.
            required: z.boolean(),
        })
    ),
});
export type MasterTemplate = z.infer<typeof masterTemplateSchema>;
export type MasterTemplateArray = MasterTemplate[];
export default function AddEditMaterTemplate({ defaultData }: { defaultData: MasterTemplate }) {
    const add = Mt.addMutation();
    const edit = Mt.updateMutation();

    const M = useForm<MasterTemplate>({
        resolver: zodResolver(masterTemplateSchema),
        defaultValues: defaultData,
    });
    const { fields, append, remove } = useFieldArray({
        control: M.control,
        name: "fields",
    });
    let addFiled = useCallback(() => {
        append({ fieldName: "", fieldType: "text", required: false });
    }, []);

    let HandleSubmit = (data: MasterTemplate) => {
        data.id ? edit.mutate(data) : add.mutate(data);
    };
    return (
        <FormProvider {...M}>
            <form className="flex flex-col gap-2 w-1/2 mx-auto justify-end mt-10" onSubmit={M.handleSubmit(HandleSubmit)}>
                <div className="flex justify-center items-end gap-2">
                    <InputFormComponent label="Template Name" name="name" />
                    <Button size={"sm"} variant={"outline"} type="button" onClick={addFiled}>
                        Add fields
                    </Button>
                    <Button disabled={add.isPending || edit.isPending} type="submit" size={"sm"} value={"Submit"}>
                        Submit
                    </Button>
                </div>
                {fields.map((field, index) => (
                    <React.Fragment key={field.id}>
                        <div className="flex gap-2 flex-col w-auto m-auto mt-5 ">
                            <label htmlFor="variant">field {index + 1}</label>
                            <div className="flex justify-center items-end gap-2">
                                <InputFormComponent label="Name" name={`fields.${index}.fieldName`} />
                                <SelectFormComponent option={["text", "number", "date"]} label="Type" name={`fields.${index}.fieldType`} />
                                <RadioFormComponent label="Required" name={`fields.${index}.required`} />
                                <Button size={"sm"} variant={"outline"} type="button" onClick={() => remove(index)}>
                                    X
                                </Button>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
                <GeneralError name="variants" />
            </form>
        </FormProvider>
    );
}
