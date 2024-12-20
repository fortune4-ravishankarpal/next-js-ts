// Generated by ts-to-zod (https://www.npmjs.com/package/ts-to-zod)
import { z } from "zod";

export const postSchema = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string(),
});

export const commentSchema = z.object({
    postId: z.number(),
    id: z.number(),
    name: z.string(),
    email: z.string(),
    body: z.string(),
});

export const todoSchema = z.object({
    id: z.string().or(z.number()),
    title: z.string(),
    body: z.string().optional(),
});

export const todoArraySchema = z.array(todoSchema);

export const companySchema = z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
});

export const geoSchema = z.object({
    lat: z.string(),
    lng: z.string(),
});

export const addressSchema = z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: geoSchema,
});

export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.string(),
    address: addressSchema,
    phone: z.string(),
    website: z.string(),
    company: companySchema,
});

export const dbSchema = z.object({
    users: z.array(userSchema),
    posts: z.array(postSchema),
    comments: z.array(commentSchema),
    todo: z.array(postSchema),
});

export const jsonResposeType = z.object({
    first: z.number(),
    prev: z.number().nullable(),
    next: z.number().nullable(),
    last: z.number(),
    pages: z.number(),
    items: z.number(),
    data: z.any(),
});
// inferred types:
export type jsonListResposeType = z.infer<typeof jsonResposeType>;
export type Post = z.infer<typeof postSchema>;

export type Comment = z.infer<typeof commentSchema>;

export type Todo = z.infer<typeof todoSchema>;

export type Company = z.infer<typeof companySchema>;

export type Geo = z.infer<typeof geoSchema>;

export type Address = z.infer<typeof addressSchema>;

export type User = z.infer<typeof userSchema>;

export type DB = z.infer<typeof dbSchema>;
