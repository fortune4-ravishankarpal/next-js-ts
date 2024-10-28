import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

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
export function SelectFormComponent(props: Props) {
    let { name, label, option } = props;
    let m = useFormContext();
    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={name}>{label ? label : name}</Label>
            <Controller
                name={name}
                control={m.control}
                defaultValue=""
                render={({ field }) => (
                    <Select defaultValue="" value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="input border border-gray-300 rounded-md">
                            <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                            {option &&
                                option?.map((option, index) => (
                                    <SelectItem key={index} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                        </SelectContent>
                    </Select>
                )}
            />
            <ErrorMessage errors={m.formState.errors} name={name} render={({ message }) => <p className="text-red-500">{message}</p>} />
        </div>
    );
}
export function RadioFormComponent(props: Props) {
    let { name, label } = props;
    let m = useFormContext();
    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={name}>{label ? label : name}</Label>
            <Controller
                name={name}
                control={m.control}
                render={({ field }) => (
                    <RadioGroup value={field.value} onValueChange={(val) => field.onChange(val === "true")}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem id="option-one" value="true" />
                            <Label htmlFor="option-one">True</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem id="option-two" value="false" />
                            <Label htmlFor="option-two">False</Label>
                        </div>
                    </RadioGroup>
                )}
            />
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
