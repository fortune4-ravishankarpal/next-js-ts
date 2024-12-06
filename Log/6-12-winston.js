const debug = require("debug")("app:forLoop");
const pushFileToRedis = async (file, signal) => {
    if (signal.aborted) throw new Error("Operation aborted");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating async operation
};

const processFiles = async (files, abortController) => {
    for (const file of files) {
        if (abortController.signal.aborted) break; // Stop loop if aborted
        await pushFileToRedis(file, abortController.signal);
    }
};

const files = ["file1", "file2", "file3"];
const abortController = new AbortController();

// Simulating the operation
processFiles(files, abortController).catch(console.error);
