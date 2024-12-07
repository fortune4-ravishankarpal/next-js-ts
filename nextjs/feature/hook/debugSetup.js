"use client";

import debug from "debug";

// Initialize the debug setup
if (typeof window !== "undefined") {
    const currentDebug = localStorage.getItem("debug") || "client:*"; // Default namespace
    localStorage.setItem("debug", currentDebug);
    debug.enable(currentDebug);
}

/**
 * Create a debug logger for a specific namespace.
 * @param {string} namespace - The namespace for the debug logger.
 * @returns {Function} The debug logger function.
 */
export const createLogger = (namespace) => debug(namespace);
