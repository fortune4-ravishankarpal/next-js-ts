import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col  justify-center items-center">
            <div>React query server side routing</div>
            <div className="flex flex-col h-screen justify-center items-center">{children}</div>
        </div>
    );
}
