"use client";
import { useState } from "react";
import Providers from "./provider";
import { useQuery } from "@tanstack/react-query";
import { apiCall } from "@/lib/apiCall";
import { Todo } from "../simple-todo-app/todoTypes";

export default function Page() {
    return (
        <Providers>
            <h1>React Query</h1>
            <AllQueries />
        </Providers>
    );
}

function AllQueries() {
    const [page, setPage] = useState(1);
    const limit = 10; // Set limit per page

    const { data, isLoading, isError, error, isSuccess } = useQuery({
        queryKey: ["todos", page],
        queryFn: () => apiCall.get(`todos?_start=${page}&_limit=${limit}`).then((res) => res.data),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error?.message || "Something went wrong."}</div>;
    }

    return (
        <div>
            <ul>{isSuccess && data?.map((todo: Todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
            <div>
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}>
                    Previous
                </button>
                <span> Page {page} </span>
                <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
            </div>
        </div>
    );
}
