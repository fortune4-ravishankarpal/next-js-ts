import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { z } from "zod";
const myMiddlewares = <T>(f: (set: (updater: (state: T) => T) => void) => T) => devtools(persist(f, { name: "userList" }));

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.string(),
    address: z.object({
        street: z.string(),
        suite: z.string(),
        city: z.string(),
        zipcode: z.string(),
        geo: z.object({ lat: z.string(), lng: z.string() }),
    }),
    phone: z.string(),
    website: z.string(),
    company: z.object({
        name: z.string(),
        catchPhrase: z.string(),
        bs: z.string(),
    }),
});
export type UserType = z.infer<typeof UserSchema>;
export type UserTypeArray = z.infer<typeof UserSchema>;
interface Post {
    id: any;
    title: string;
    body: string;
}

interface PostsStore {
    userList: Post | null;
    setUserList: (post: Post | null) => void;
}
const usePostsStore = create<PostsStore>()(
    myMiddlewares((set) => ({
        userList: null,
        setUserList: (post) => set((state) => ({ ...state, userList: post })),
    }))
);

export default usePostsStore;
