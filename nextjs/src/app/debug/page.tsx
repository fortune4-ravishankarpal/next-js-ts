// In your component or page file (e.g., pages/index.js)
import { useEffect } from "react";
import debug from "debug";

const log = debug("client:app");

const Home = () => {
    log("This will log on the client side 1");
    useEffect(() => {
        log("This will log on the client side 2");
    }, []);
    log("This will log on the client side 3");

    return <div>Check the console for debug logs.</div>;
};

export default Home;
