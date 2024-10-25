import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, deletePost, fetchPosts, updatePost } from "./postApiCall";
import usePostsStore from "./usePostsStore";
export const fetPostsMutation = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });
};

export const deleteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["posts"],
        mutationFn: deletePost,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    });
};

export const addMutation = () => {
    const queryClient = useQueryClient();
    const setSelectedPost = usePostsStore((state) => state.setSelectedPost); // Access setSelectedPost from Zustand

    return useMutation({
        mutationKey: ["addPosts"],
        mutationFn: addPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            setSelectedPost(null);
        },
    });
};
export const updateMutation = () => {
    const queryClient = useQueryClient();
    const setSelectedPost = usePostsStore((state) => state.setSelectedPost); // Access setSelectedPost from Zustand

    return useMutation({
        mutationKey: ["updatePosts"],
        mutationFn: updatePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            setSelectedPost(null);
        },
        onError: (error) => console.error("Error updating post:", error),
    });
};
