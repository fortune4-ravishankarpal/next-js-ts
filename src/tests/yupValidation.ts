export const numberRegex = /^\d*\.?\d+$/;
import * as yup from "yup";
export const yupStringNumValidation = yup
    .string()
    ?.trim()
    .test(`field must be a number`, function (value) {
        return value === "" || numberRegex.test(value);
    })
    .typeError(`type must be a number`);

export const generateYupSchema = (template) => {
    const shape = {};
    for (let [key, value] of Object.entries(template)) {
        let vs = yup.string()
        if (value.required) {
            vs = vs.concat(vs.required(`${key} is required`));
        } else {
            vs = vs.concat(vs.nullable());
        }
        if (value.key.includes("input-text") || value.key.includes("input-area")) {
            if (value.min) {
                vs.concat(vs.min(value.min, `${key} must be at least ${value.min} characters`));
            }
            if (value.max) {
                vs.concat(vs.max(value.max, `${key} must be less than ${value.max} characters`));
            }
            return (shape[value.key] = vs);
        } else if (value.key.includes("input-numeric") || value.key.includes("num-val-plus-uom@num")) {
            vs = vs.concat(yupStringNumValidation);
            return (shape[value.key] = vs);
        } else if (value.key.includes("num-val-plus-uom@uom") || value.key.includes("select-plus-uom@select") || value.key.includes("@select")) {
            let validOptions = value.options ? value.options.map((option) => `${option.id}`) : [];
            vs = vs.concat(vs.oneOf(validOptions, `${key} is invalid ${validOptions.join(",")}`));
            return (shape[value.key] = vs);
        }
    }

    return yup.object().shape(shape);
};
