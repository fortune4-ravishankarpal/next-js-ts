import axios from "axios";
export const apiCall = axios.create({
    baseURL: "http://localhost:1248/",
});
apiCall.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);
import { QueryClient } from "@tanstack/react-query";

export function createQueryClient() {
    return new QueryClient();
}
