import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
interface Props {
    name: string;
}
export default function InputFormComponent(props: Props) {
    let { name } = props;
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
}
