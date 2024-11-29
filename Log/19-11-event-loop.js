console.log("log1");

async function apiCall() {
    return await fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json());
}
async function Call() {
    let res = await apiCall();
    console.log("[44m [ res ]-16 [0m", res);
}

console.log("log2", Call());

while (true) {}

console.log("log3", Call());
