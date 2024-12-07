"use client";
import { createLogger } from "@/hook/debugSetup";

const log = createLogger("app:client:2");

const ClientComponent2 = () => {
    log("Home component rendered"); // Log directly

    return <div>Check the console for debug logs.</div>;
};

export default ClientComponent2;
