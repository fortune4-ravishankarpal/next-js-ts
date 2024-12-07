import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Label } from "../ui/label";

interface Props {
    name: string;
    label?: string;
    options?: { label: string; value: string | number }[];
    option?: string[];
}
export default function InputFormComponent(props: Props) {
    let { name, label } = props;
    let m = useFormContext();
    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={name}>{label ? label : name}</Label>
            <Controller name={name} control={m.control} render={({ field }) => <input className="input border border-gray-300 rounded-md" type="text" {...field} />} />
            <ErrorMessage errors={m.formState.errors} name={name} render={({ message }) => <p className="text-red-500">{message}</p>} />
        </div>
    );
}

export function GeneralError(props: Props) {
    let { name } = props;
    let m = useFormContext();
    if (!m.formState.isValid) {
        console.log("[96m [ m.formState.errors ]-24 [0m", m.formState.errors);
    }
    return (
        <div className="flex flex-col gap-1">
            <ErrorMessage errors={m.formState.errors} name={name} render={({ message }) => <p className="text-red-500">{message}</p>} />
        </div>
    );
}
