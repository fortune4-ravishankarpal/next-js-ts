import React from "react";

export default function layout({ children }) {
    return (
        <html lang="en" className="scroll-smooth  bg-white">
            <body>
                <h1>note-tanking</h1>
                {children}
            </body>
        </html>
    );
}
