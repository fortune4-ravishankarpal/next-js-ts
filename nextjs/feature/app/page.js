import { setupDebug } from "@/hook/withDebug";

const Home = () => {
    setupDebug("beforeEnv")("Hello");
    return (
        <div>

        </div>
    );
};

export default Home;
