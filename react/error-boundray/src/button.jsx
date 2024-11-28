import React from "react";

export default function Button() {
    return (
        <div>
            <button
                onClick={() => {
                    throw new Error("error");
                }}
            >
                Button
            </button>
        </div>
    );
}
