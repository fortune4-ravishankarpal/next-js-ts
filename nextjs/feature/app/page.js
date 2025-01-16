import { z } from "zod";

// Define Zod schema for validation
const sumSchema = z.object({
    a: z.number(),
    b: z.number(),
});

/**
 * A higher-order function for schema validation.
 * @param {z.ZodType<any>} schema - The Zod schema to validate arguments.
 * @param {Function} fn - The function to wrap with validation.
 * @returns {Function} A new function with validation.
 */
function withValidation(schema, fn) {
    return (args) => {
        schema.parse(args); // Validate args against the schema
        return fn(args); // Call the original function if validation passes
    };
}

/**
 * Sum function that adds two numbers.
 * @param {{ a: number, b: number }} args - The arguments object.
 * @returns {number} The sum of a and b.
 */
function sum({ a, b }) {
    return a + b;
}

// Bind schema validation to the sum function
const validatedSum = withValidation(sumSchema, sum);

// Usage examples
try {
    console.log(validatedSum({ a: 2, b: 3 })); // 5
    console.log(validatedSum({ a: "2", b: 3 })); // Throws ZodError
} catch (err) {
    console.error(err.errors); // Logs validation errors
}

import React from "react";

export default function page() {
    return <div>page</div>;
}
