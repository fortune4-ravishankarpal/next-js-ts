import Link from "next/link";

let Pages = [
    {
        name: "zu-posts-json-server",
        path: "/zu-react-query",
    },
    {
        name: "simple-todo-app",
        path: "/simple-todo-app",
    },
];
export default function Page() {
    return (
        <div>
            <h1>Home</h1>
            {Pages.map((x) => (
                <div key={x.name}>
                    <Link href={x.path} className="text-blue-500">
                        {x.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}
