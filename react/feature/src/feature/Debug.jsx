// In your component or page file (e.g., pages/index.js)
import debug from "debug";

const log = debug("client:app");
const ser = debug("app:client:app");
log("server");

const Home = () => {
    log("This will log on the client side 3");
    if (typeof window !== "undefined") ser("This will log on the server side 3");
    return <div>cw</div>;
};

export default Home;
