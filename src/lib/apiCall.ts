import axios from "axios";
export const apiCall = axios.create({
    baseURL: "http://localhost:1248/",
});
import { QueryClient } from "@tanstack/react-query";

export function createQueryClient() {
    return new QueryClient();
}
