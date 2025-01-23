const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(express.json());
app.use(morgan("common"));
app.get("/", (req, res) => {
    let response = { name: "John", age: 30, city: "New York", date: new Date().getMinutes() + ":" + new Date().getSeconds() };
    res.set("Cache-Control", "no-store, no-cache, must-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    return res.send(response);
});
app.listen(4000, () => {
    console.log("Server listening on port 3000");
});