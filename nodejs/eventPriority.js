const fs = require("fs");
const http = require("http");

// // 1. I/O Operation: File Read
fs.readFile("package.json", "utf8", (err, data) => {
    console.log("File Read:", data);
});

// 2. API Call (HTTP Request)
http.get("users", (response) => {
    console.log("API Response:", response.statusCode);
});

// 3. setTimeout (Timer)
setTimeout(() => {
    console.log("setTimeout Triggered");
}, 1);

console.log("[38;5;196m [ End of Script ]-20 [0m");
