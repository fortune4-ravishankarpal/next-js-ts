import { setupDebug } from "@/hook/withDebug";
import Debug from "./Debug";
import ClientComponent from "./ClientDebug";
import ClientComponent2 from "./ClientDebug2";

const log = setupDebug("app:server");

const Home = () => {
    log("This will log on the server side");
    return (
        <div>
            <Debug />
            <ClientComponent />
            <ClientComponent2 />
        </div>
    );
};

export default Home;
