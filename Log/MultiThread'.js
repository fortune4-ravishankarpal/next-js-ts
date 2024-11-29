const { Worker } = require("worker_threads");

function computeInWorker(n) {
    return new Promise((resolve, reject) => {
        const worker = new Worker("./worker.js", {
            workerData: n,
        });

        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", (code) => {
            if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}
console.time("Long-running task");
computeInWorker(40)
    .then((result) => {
        console.log(`Fibonacci result: ${result}`);
        console.timeEnd("Long-running task");
    })
    .catch((err) => {
        console.error("Error in worker:", err);
    });
