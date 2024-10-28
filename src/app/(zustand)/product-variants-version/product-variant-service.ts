import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "./product-api-call";
import constant from "./constant";

export const fetchProductMutation = () => {
    return useQuery({
        queryKey: [constant.serviceKey.product.getProducts],
        queryFn: fetchProducts,
    });
};

export const addMutation = () => {
    const queryClient = useQueryClient();
    // const setSelectedPost = usePostsStore((state) => state.setSelectedPost);

    return useMutation({
        mutationKey: [constant.serviceKey.product.addProduct],
        mutationFn: addProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [constant.serviceKey.product.getProducts] });
            // setSelectedPost(null);
        },
    });
};
export const updateMutation = () => {
    const queryClient = useQueryClient();
    // const setSelectedPost = usePostsStore((state) => state.setSelectedPost);

    return useMutation({
        mutationKey: [constant.serviceKey.product.editProduct],
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [constant.serviceKey.product.getProducts] });
            // setSelectedPost(null);
        },
        onError: (error) => console.error("Error updating post:", error),
    });
};
export const deleteMutation = (id: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [constant.serviceKey.product.deleteProduct, id],
        mutationFn: deleteProduct,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [constant.serviceKey.product.getProducts] }),
    });
};
