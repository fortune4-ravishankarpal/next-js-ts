import React, { use } from "react";

// Experimental React 18 feature (must enable in your project)
async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    return response.json();
}

function Post() {
    const data = fetchData();
    const post = use(data); // Automatically suspends until data resolves
    return <h1>{post.title}</h1>;
}

export default function LoadAsRender() {
    return (
        <React.Suspense fallback={<p>Loading...</p>}>
            <Post />
        </React.Suspense>
    );
}
