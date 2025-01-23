import { flatten, unflatten } from "flat";
let object = {
    key1: {
        keyA: "valueI",
    },
    key2: {
        keyB: "valueII",
    },
    key3: [
        {
            keyC: "valueIII",
        },
        {
            keyD: "valueIV",
        },
    ],
    key4: { a: { b: 2 } },
};

let val = flatten(object);

console.log("[40m [ flat ]-14 [0m", val);
console.log("[40m [ unflat ]-15 [0m", unflatten(val));
