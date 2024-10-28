import axios from "axios";
import { Product } from "./product-variant.types";

const API_URL = "http://localhost:1248/products";

export const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addProduct = async (newProduct: Product) => {
    const response = await axios.post(API_URL, newProduct);
    return response.data;
};

export const updateProduct = async (updateProduct: Product) => {
    const response = await axios.put(`${API_URL}/${updateProduct.id}`, updateProduct);
    return response.data;
};

export const deleteProduct = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
};
