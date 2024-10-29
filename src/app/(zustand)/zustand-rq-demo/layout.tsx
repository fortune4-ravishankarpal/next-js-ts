import Providers from "@/app/(react-query-client)/provider";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <div>zustand-rq-demo</div>
            {children}
        </Providers>
    );
}
