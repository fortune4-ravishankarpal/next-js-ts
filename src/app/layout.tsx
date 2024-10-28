import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
interface LayoutProps {
    children: React.ReactNode;
}
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

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en" className="scroll-smooth  bg-white">
            <body>
                {/* <div className="flex gap-2 justify-self-end container m-auto">
                    {Pages.map((x) => (
                        <Link href={x.path} className=" text-blue-500 text-capitalize">
                            {x.name}
                        </Link>
                    ))}
                </div> */}
                {children}
            </body>
        </html>
    );
}
