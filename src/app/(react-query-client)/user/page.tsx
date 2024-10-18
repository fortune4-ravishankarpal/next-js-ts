"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchUsers } from "./userService";
import { User, userSchema } from "@/app/simple-todo-app/todoTypes";
import { z } from "zod";
let AllUserSchema = userSchema.array();
type allUserSchemaType = z.infer<typeof AllUserSchema>;

export default function UserListPage() {
    let userApiCall = useQuery({ queryKey: ["users"], queryFn: fetchUsers });

    if (userApiCall.isPending) {
        return <div>Loading...</div>;
    }
    if (userApiCall.isError) {
        return <div>Error</div>;
    }

    let users = userApiCall.data as allUserSchemaType;
    AllUserSchema.parse(users);
    return (
        <div>
            {users.map((x) => (
                <>{x.name}</>
            ))}
        </div>
    );
}
