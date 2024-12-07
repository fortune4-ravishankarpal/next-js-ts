"use client";
import { useEffect } from "react";
import debug from "debug";

const log = debug("app:client");

const Home = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("debug", "app:client*");
            debug.enable(localStorage.getItem("debug"));
        }
        log("This will log on the client side");
    }, []);

    return <div>Check the console for debug logs.</div>;
};

export default Home;
