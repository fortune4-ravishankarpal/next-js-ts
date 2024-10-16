import { z } from "zod";

// Define your number regex
export const numberRegex = /^\d*\.?\d+$/;

// Custom Zod validation for numeric strings
export const zodStringNumValidation = z
    .string()
    .refine((value) => value === "" || numberRegex.test(value), {
        message: "Field must be a number",
    })
    .or(z.literal("")) // Allow empty strings as valid
    .transform((value) => (value === "" ? null : value)); // Optional: transform empty strings to null

// Function to generate Zod validation schema dynamically
export const generateZodSchema = (template) => {
    const shape = {};

    for (let [key, value] of Object.entries(template)) {
      

        if (value.key.includes("input-text") || value.key.includes("input-area")) {
            shape[value.key] = z.string().refine((value) => {}, {
                message: `${key} must be between ${value.min} and ${value.max} characters`,
            })
        } else if (value.key.includes("input-numeric") || value.key.includes("num-val-plus-uom@num")) {
            shape[value.key] = x.string().refine((value) => value === "" || numberRegex.test(value), {
                message: `${key} must be a number`,
            })
        } else if (value.key.includes("num-val-plus-uom@uom") || value.key.includes("select-plus-uom@select") || value.key.includes("@select")) {
            let validOptions = value.options ? value.options.map((option) => `${option.label}`) : [];
            let mapLabelWithId = value.options.reduce((acc, option) => ({ ...acc, [option.label]: option.id }), {});
            vs = vs.and(vs.refine((value) => validOptions.includes(value), {
                message: `${key} is invalid`,
            }).transform((value) => mapLabelWithId[value]));
            
           return shape[value.key] = vs; // Add to shape directly
        }

    }
    return z.object(shape);
};

//  else if (value.key.includes("input-numeric") || value.key.includes("num-val-plus-uom@num")) {
//             vs = vs.and(zodStringNumValidation); // Use `and` to combine
//             shape[value.key] = vs; // Add to shape directly
//         } else if (value.key.includes("num-val-plus-uom@uom") || value.key.includes("select-plus-uom@select") || value.key.includes("@select")) {
//             let validOptions = value.options ? value.options.map((option) => `${option.label}`) : [];
//             console.log("[45m [ validOptions ]-39 [0m", validOptions);
//             let mapLabelWithId = value.options.reduce((acc, option) => ({ ...acc, [option.label]: option.id }), {});
//             vs = vs.and(vs.refine((value) => validOptions.includes(value), {
//                 message: `${key} is invalid`,
//             }).transform((value) => mapLabelWithId[value]));
//            return shape[value.key] = vs; // Add to shape directly
//         }