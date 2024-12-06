import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

interface Post {
    id: string | number;
    title: string;
    body: string;
}

interface PostsStore {
    selectedPost: Post | null;
    setSelectedPost: (post: Post | null) => void;
}
const myMiddlewares = <T>(config: import("zustand").StateCreator<T, [["zustand/devtools", never], ["zustand/persist", unknown], ["zustand/immer", never]]>) =>
    devtools(
        persist(
            immer(config),
            { name: "postState" } // Name for persisted state
        )
    );

const usePostsStore = create<PostsStore>()(
    myMiddlewares((set) => ({
        selectedPost: null,
        setSelectedPost: (post: Post | null) => {
            set((state) => {
                state.selectedPost = post;
            });
        },
    }))
);

export default usePostsStore;
