// multiThread.js
const { Worker, isMainThread, parentPort } = require("worker_threads");

console.log("[32m [ isMainThread ]-5 [0m", isMainThread);
if (isMainThread) {
    // This is the main thread
    console.log("Starting long-running task in worker thread...");

    const worker = new Worker(__filename);
    console.log("[93m [ __filename ]-10 [0m", __filename);

    // Listen for messages from the worker
    worker.on("message", (result) => {
        console.log("Long-running task completed. Result:", result);
    });

    worker.on("error", (error) => {
        console.error("Worker encountered an error:", error);
    });

    worker.on("exit", (code) => {
        if (code !== 0) console.error(`Worker stopped with exit code ${code}`);
        else console.log("Worker thread has exited.");
    });
} else {
    // This is the worker thread
    function longRunningTask() {
        let count = 0;
        for (let i = 0; i < 1e9; i++) {
            count += i;
        }
        return count;
    }

    // Send the result back to the main thread
    const result = longRunningTask();
    parentPort.postMessage(result);
}
