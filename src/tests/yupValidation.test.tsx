import { describe, it, expect } from "vitest";
import { generateYupSchema } from "./yupValidation";

describe("test yup validation", async () => {
    it("test", async () => {
        let schema = generateYupSchema({
            "238_form@input-text": { required: false, key: "238_form@input-text", min: 5, max: 100 },
        });

        await expect(
            schema.validate({
                "238_form@input-text": "",
            })
        ).rejects.toThrow();

        const validResult = await schema.validate({
            "238_form@input-text": "Hello",
        });
        expect(validResult).toBe("Hello");
    });
});
