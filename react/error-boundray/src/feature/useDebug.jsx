import { useState, useEffect, useDebugValue } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [url]);

    useDebugValue(data ? `Data loaded: ${data.length} items` : "Loading...");

    return data;
}
export let UseDebug = () => {
    let data = useFetch("https://jsonplaceholder.typicode.com/posts");
    return <div>{JSON.stringify(data)}</div>;
};
