
import debug from "debug";

export const setupDebug = (namespace) => {
    let allNamespace = "app:";
    let findNameSpace = allNamespace + "*";
    namespace = allNamespace + namespace;
    if (typeof window !== "undefined") {
        let val = localStorage.getItem("debug");
        if (!val) {
            localStorage.setItem("debug", findNameSpace);
        }
        debug.enable(val);
    } else {
        process.env.DEBUG = findNameSpace;
        debug.enable(namespace);
    }
    return debug(namespace);
};
