const { parentPort, workerData } = require("worker_threads");

function computeFibonacci(n) {
    if (n <= 1) return n;
    return computeFibonacci(n - 1) + computeFibonacci(n - 2);
}

module.exports = computeFibonacci;
