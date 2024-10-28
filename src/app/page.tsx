let Pages = [
    {
        name: "todo",
        path: "/todo",
    },
    {
        name: "user",
        path: "/user",
    },
    {
        name: "RQ-user",
        path: "/RQ-user",
    },
    {
        name: "react-hook-form-trigger",
        path: "/react-hook-form-trigger",
    },
    {
        name: "simple-todo-app",
        path: "/simple-todo-app",
    },
    {
        name: "product-variants-version",
        path: "/product-variants-version",
    },
];
export default function Page() {
    return (
        <div>
            <h1>Home</h1>
            {/* {Pages.map((x) => (
                <div key={x.name}>
                    <Link href={x.path}> {x.name}</Link>
                </div>
            ))} */}
        </div>
    );
}
