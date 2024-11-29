function withLogging(func) {
    return function (...args) {
        console.time(func.name);
        const result = func(...args);
        console.timeEnd(func.name);
        return result;
    };
}

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

withLogging(computeInWorker)(35)
    .then((result) => {
        console.log(`Fibonacci result: ${result}`);
    })
    .catch((err) => {
        console.error("Error in worker:", err);
    });
