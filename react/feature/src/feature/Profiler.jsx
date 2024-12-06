import React from "react";

export default function Profiler() {
    const onRender = (id, phase, actualDuration) => {
        console.log({ id, phase, actualDuration });
    };

    return (
        <React.Profiler id="App" onRender={onRender}>
            <h1>Welcome to the App</h1>
        </React.Profiler>
    );
}
