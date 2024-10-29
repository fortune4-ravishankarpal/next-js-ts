"use client";
import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "./store";
import { getUsers } from "./server";

export default function App() {
    const { filters } = useUserStore();

    const { data, isLoading } = useQuery({
        queryKey: ["users", filters],
        queryFn: () => getUsers(filters),
    });

    if (isLoading) return "Loading...";
    return (
        <div>
            <FiltersComponent />
            {data?.map((user) => {
                return <div key={user.id}>{user.name}</div>;
            })}
        </div>
    );
}

function FiltersComponent() {
    const { setFilters } = useUserStore();

    // Imagine some form inputs here

    return null;
}
