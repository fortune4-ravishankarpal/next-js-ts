const path = require("path");
const Piscina = require("piscina");

const piscina = new Piscina({
    filename: path.resolve(__dirname, "worker.js"),
});

(async function () {
    const result = await piscina.run(10);
    console.log(result); // Prints 10
})();
