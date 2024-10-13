"use client"; // Ensure this component is treated as a client component

import { useEffect, useId, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { apiCall } from "@/lib/apiCall";
import { z } from "zod"; // Adjust based on your API setup
import {
    jsonListResposeType,
    jsonResposeType,
    Todo,
    todoArraySchema,
} from "../../simple-todo-app/todoTypes"; // Adjust based on your type definitions
import { Checkbox } from "@/components/ui/checkbox"; // Adjust based on your UI components
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { delay } from "@/app/react-hook-form-trigger/page";
export default function Page() {
    return (
        <>
            <h1>React Query</h1>
            <AllQueries />
        </>
    );
}

function AllQueries() {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const limit = 10;

    // Parse the page from the URL
    useEffect(() => {
        const currentPage = new URLSearchParams(window.location.search).get("page");
        if (currentPage) {
            setPage(Number(currentPage));
        }
    }, []);

    let todoListResponseSchema = jsonResposeType.extend({
        data: todoArraySchema,
    });
    type TodoListResponse = z.infer<typeof todoListResponseSchema>;
    const { data, isLoading, isError, error, isSuccess, refetch } = useQuery({
        queryKey: ["todos", page],
        queryFn: () =>
            apiCall
                .get(`todos?_page=${page}&_per_page=${limit}`)
                .then((res) => res.data as TodoListResponse),
    });

    useEffect(() => {
        router.push(`?page=${page}`);
    }, [page, router]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error?.message || "Something went wrong."}</div>;
    }
    if (!isSuccess) {
        return <div>no data</div>;
    }
    let dataParsed = todoListResponseSchema.parse(data);

    return (
        <>
            <ul>
                {dataParsed.data.map((todo: Todo) => (
                    <TodoUi refetch={refetch} key={todo.id} todo={todo} />
                ))}
            </ul>
            <Button
                variant={"outline"}
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                disabled={!data.prev}>
                Previous
            </Button>
            <span> {page} </span>
            <Button
                variant={"outline"}
                disabled={!data.next}
                onClick={() => setPage((prev) => prev + 1)}>
                Next
            </Button>
        </>
    );
}
interface TodoUiProps {
    todo: Todo;
    refetch: () => void;
}
function TodoUi({ todo, refetch }: TodoUiProps) {
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);
    const saveTodo = async () => {
        setLoading(true);
        await apiCall
            .put(`todos/${todo.id}`, {
                ...todo,
                title: newTitle,
            })
            .then(refetch)
            .finally(() => {
                setEditing(false);
                setLoading(false);
            });
    };
    if (editing) {
        if (loading) return <li>Loading...</li>;
        return (
            <li className={cn("flex gap-2 items-center w-full")}>
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onBlur={saveTodo}
                    onKeyDown={(e) => {
                        if (e.key === "Escape") {
                            setEditing(false);
                        } else if (e.key === "Enter") {
                            saveTodo();
                        }
                    }}
                />
            </li>
        );
    }
    return (
        <li className="flex gap-2 items-center w-full" onClick={() => setEditing(true)}>
            <Checkbox defaultChecked={todo.completed} />
            {todo.id}. {todo.title}
        </li>
    );
}
