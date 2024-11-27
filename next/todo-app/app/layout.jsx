import React from "react";

export default function layout({ children }) {
    return (
        <html lang="en" className="scroll-smooth  bg-white">
            <body>
                <h1>todo-app</h1>
                {children}
            </body>
        </html>
    );
}
