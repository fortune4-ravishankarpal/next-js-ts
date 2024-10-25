import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
const myMiddlewares = <T>(f: (set: (updater: (state: T) => T) => void) => T) => devtools(persist(f, { name: "postState" }));

interface Post {
    id: any;
    title: string;
    body: string;
}

interface PostsStore {
    selectedPost: Post | null;
    setSelectedPost: (post: Post | null) => void;
}
const usePostsStore = create<PostsStore>()(
    myMiddlewares((set) => ({
        selectedPost: null,
        setSelectedPost: (post) => set((state) => ({ ...state, selectedPost: post })),
    }))
);

export default usePostsStore;
