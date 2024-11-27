console.log("Start");

process.nextTick(() => {
    console.log("Next Tick Callback");
});

(async function abc() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
    console.log("[48;5;220m [ res ]-9 [0m", res[0]);
})();

console.log("End");
