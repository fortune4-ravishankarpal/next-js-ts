import { Post } from "@/app/simple-todo-app/todoTypes";
import { delay } from "@/lib/utils";
import axios from "axios";

const API_URL = "http://localhost:1248/posts";

export const fetchPosts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addPost = async (newPost: { id: string; title: string; body: string }) => {
    await delay(1000);
    let newPostApiData = {
        title: newPost?.title,
        body: newPost?.body,
    };
    const response = await axios.post(API_URL, newPostApiData);
    return response.data;
};

export const updatePost = async (post: Post) => {
    await delay(1000);
    const response = await axios.put(`${API_URL}/${post.id}`, post);
    return response.data;
};

export const deletePost = async (id: number) => {
    await delay(1000);
    await axios.delete(`${API_URL}/${id}`);
    return id;
};
