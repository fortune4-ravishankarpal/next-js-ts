import debug from "debug";

export const setupDebug = (namespace) => {
    if (typeof window !== "undefined") {
        // Set the namespace in localStorage for consistent debugging
        if (!localStorage.getItem("debug")) {
            localStorage.setItem("debug", namespace);
        }
        debug.enable(localStorage.getItem("debug")); // Enable debug based on namespace
    }
    return debug(namespace); // Return a debug logger
};
