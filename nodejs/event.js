const http = require("http");
console.log("Starting long-running task...");
setInterval(() => {
    http.get("http://localhost:1248/users", (response) => {
        // console.log("API Response:", response.statusCode);
    });
});
setTimeout(() => {
    console.log("setTimeout Triggered");
}, 11);

console.log("Ending long-running task...");
