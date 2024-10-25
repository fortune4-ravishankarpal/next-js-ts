"use client";
import React from "react";
import useStore from "./store";

export default function page() {
    return (
        <div className="flex justify-center flex-col items-center h-screen">
            <PageOne />
            <PageTwo />
        </div>
    );
}

export function PageOne() {
    const { count, increase, reset } = useStore();
    return (
        <>
            <>
                <p>Count: {count}</p>
                <button onClick={increase}>Increase</button>
                <button onClick={reset}>Reset</button>
            </>
        </>
    );
}
export function PageTwo() {
    const { count, decrement } = useStore();
    return (
        <div>
            <button disabled={count === 0} onClick={decrement}>
                Decrement
            </button>
        </div>
    );
}
