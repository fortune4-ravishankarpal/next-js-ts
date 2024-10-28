import Link from "next/link";
let Pages = [
    {
        name: "todo",
        path: "/todo",
    },
    {
        name: "user",
        path: "/user",
    },
];
export default function Page() {
    return (
        <div>
            <h1>Home</h1>
            {Pages.map((x) => (
                <div key={x.name}>
                    <Link href={x.path}> {x.name}</Link>
                </div>
            ))}
        </div>
    );
}
