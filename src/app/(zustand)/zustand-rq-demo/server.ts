export type GetUsersFilters = {
    limit: number;
    page: number;
};
export type User = { id: number; name: string };
export async function getUsers(filters?: GetUsersFilters) {
    // Do something cool with the filters

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [{ id: 1, name: "Darius" }] as User[];
}
