import React from "react";
import { generateMock } from "@anatine/zod-mock";
import z from "zod";
const schema = z.object({
    uid: z.string().nonempty(),
    theme: z.enum([`light`, `dark`]),
    email: z.string().email().optional(),
    phoneNumber: z.string().min(10).optional(),
    avatar: z.string().url().optional(),
    jobTitle: z.string().optional(),
    otherUserEmails: z.array(z.string().email()),
    stringArrays: z.array(z.string()),
    stringLength: z.string().transform((val) => val.length),
    numberCount: z.number().transform((item) => `total value = ${item}`),
    age: z.number().min(18).max(120),
});
export default function ZodMock() {
    console.log("[30m [ mockData ]-20 [0m", mockDataArray);
    return <div>json: {JSON.stringify(mockDataArray)}</div>;
}
