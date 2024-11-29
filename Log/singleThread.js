function withLogging(func) {
    return function (...args) {
        console.time(func.name);
        const result = func(...args);
        console.timeEnd(func.name);
        return result;
    };
}
function computeFibonacci(n) {
    if (n <= 1) return n;
    return computeFibonacci(n - 1) + computeFibonacci(n - 2);
}
const result = withLogging(computeFibonacci)(40);

console.log(`Fibonacci result: ${result}`);
