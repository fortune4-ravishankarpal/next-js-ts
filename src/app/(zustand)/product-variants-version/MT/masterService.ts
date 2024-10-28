import { apiCall } from "@/lib/apiCall";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MasterTemplate, MasterTemplateArray } from "./AddEditMaterTemplate";
import { MasterTemplateStore } from "./masterTemplateStore";
export const getAllMutation = () => {
    return useQuery({
        queryKey: ["MTList"],
        queryFn: async () => (await apiCall.get("MT")) as MasterTemplateArray,
    });
};

export const deleteMutation = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["DeleteMT", id],
        mutationFn: async () => await apiCall.delete(`MT/${id}`),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["MTList"] }),
    });
};

export const addMutation = () => {
    const queryClient = useQueryClient();
    const setToNull = MasterTemplateStore((state) => state.selectedMTtoNull);
    return useMutation({
        mutationKey: ["addPosts"],
        mutationFn: async (data: MasterTemplate) => await apiCall.post("MT", data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["MTList"] }).then(setToNull),
    });
};
export const updateMutation = () => {
    const queryClient = useQueryClient();
    const setToNull = MasterTemplateStore((state) => state.selectedMTtoNull);
    return useMutation({
        mutationKey: ["updatePosts"],
        mutationFn: async (data: any) => await apiCall.put("MT/" + data.id, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["MTList"] }).then(setToNull),
    });
};
