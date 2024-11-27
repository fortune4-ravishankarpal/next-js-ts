// singleThread.js
function longRunningTask() {
    // Simulate a CPU-intensive task with a loop
    let count = 0;
    for (let i = 0; i < 1e9; i++) {
        count += i;
    }
    return count;
}

console.log("Starting long-running task...");
console.time("Long-running task");
const result = longRunningTask();
console.timeEnd("Long-running task");
console.log("Long-running task completed. Result:", result);
console.log("This message displays after the task is completed.");
