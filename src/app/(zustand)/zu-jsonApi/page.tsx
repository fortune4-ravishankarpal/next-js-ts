"use client";
import { delay } from "@/lib/utils";
import React, { useEffect } from "react";
import { create } from "zustand";

// Define the state structure
interface Post {
    id: number;
    title: string;
    body: string;
}

interface PostsStore {
    posts: Post[];
    loading: boolean;
    error: string | null;
    fetchPosts: () => Promise<void>;
}

const usePostsStore = create<PostsStore>((set) => ({
    posts: [],
    loading: false,
    error: null,
    fetchPosts: async () => {
        set({ loading: true, error: null });
        try {
            await delay(2000);
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            set({ posts: data, loading: false });
        } catch (error) {
            console.log("[90m [ error ]-32 [0m", error);
            set({ error: "Failed to fetch posts", loading: false });
        }
    },
}));

export default function page() {
    const { posts, loading, error, fetchPosts } = usePostsStore();

    // Fetch posts on component mount
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <div>
                <h1>Posts</h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
