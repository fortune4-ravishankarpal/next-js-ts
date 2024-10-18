import React from "react";
import Providers from "./provider";

export default function layout({ children }: { children: React.ReactNode }) {
    return <Providers>{children}</Providers>;
}
