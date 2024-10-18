import { apiCall } from "@/lib/apiCall";

export async function fetchUsers() {
    let data = await apiCall.get("https://jsonplaceholder.typicode.com/users").then((res) => res.data);

    return data;
}
