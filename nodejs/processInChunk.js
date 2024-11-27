async function processDataInChunks() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const reader = response.body.getReader(); // Get the stream reader
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
        const { value, done: doneReading } = await reader.read(); // Read next chunk
        done = doneReading;
        const text = decoder.decode(value, { stream: true }); // Decode the chunk
        console.log(text); // Process the chunk
    }
}
processDataInChunks();
