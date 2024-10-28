import axios from "axios";
import { Variant } from "./product-variant.types";

const API_URL = "http://localhost:1248/variants";

export const fetchVariants = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addVariant = async (newVariant: Variant) => {
    const response = await axios.post(API_URL, newVariant);
    return response.data;
};

export const updateVariant = async (post: Variant) => {
    const response = await axios.put(`${API_URL}/${post.id}`, post);
    return response.data;
};

export const deleteVariant = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
};
