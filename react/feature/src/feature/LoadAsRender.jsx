// import React, { use } from "react";

import React from "react";

// async function fetchData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     return response.json();
// }

// function Post() {
//     const data = fetchData();
//     const post = use(data); // Automatically suspends until data resolves
//     return <h1>{post.title}</h1>;
// }

export default function LoadAsRender() {
    return <React.Suspense fallback={<p>Loading...</p>}></React.Suspense>;
}
