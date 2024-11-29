console.log("log1");

async function apiCall() {
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json));
}

apiCall();

// while (true) {}

async function Call() {
    let res = await apiCall();
}

console.log("log2", Call());
