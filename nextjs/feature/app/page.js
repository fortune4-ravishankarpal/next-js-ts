export default async function Page() {
    const res = await fetch("http://localhost:4000", {
        next: { revalidate: 3600 }, // Revalidate every 1 hour
    });
    const data = await res.json();

    return <div>{JSON.stringify(data)}</div>;
}
