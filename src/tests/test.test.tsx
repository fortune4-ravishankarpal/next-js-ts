import { test, expect, it, describe } from "vitest";
import { generateZodSchema } from "./validation";
describe("generateZodSchema", () => {
    it("template Handle text and textarea", () => {
        const schema = generateZodSchema({
            "238_form@input-text": { required: false, key: "238_form@input-text", min: 5, max: 100 },
        });
        const result = schema.safeParse({
            "238_form@input-text": "",
        });
        expect(result.success).toBe(true);
    });
    it("template Handle select", () => {
        const schema = generateZodSchema({
            "236_form@select": {
                required: true,
                key: "236_form@select",
                options: [
                    { id: "1", label: "Option 1" },
                    { id: "2", label: "Option 2" },
                    { id: "3", label: "Option 3" },
                ],
            },
        });
        const result = schema.safeParse({
            "236_form@select": "1",
        });
        expect(result.success).toBe(true);
    });
});
