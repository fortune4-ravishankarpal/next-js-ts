"use client";
import usePostsStore from "./usePostsStore";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import AddPost from "./Addpost";
import PostList from "./PostList";
import { addMutation, fetPostsMutation, updateMutation } from "./postService";
import { cn } from "../../../utils/utils";

const PostsComponent = () => {
    const { data: posts, isLoading, error, isError } = fetPostsMutation();
    const { selectedPost, setSelectedPost } = usePostsStore();
    const updatePost = updateMutation();
    const addPost = addMutation();

    if (isError) return <p>{error.message}</p>;
    let HandlePostSave = () => {
        if (selectedPost?.id) {
            updatePost.mutate(selectedPost as any);
        } else {
            addPost.mutate(selectedPost as any);
        }
    };
    return (
        <div>
            <h1>Posts</h1>
            {selectedPost ? (
                <div className="border p-2 my-2 flex flex-col gap-2 bg-gray-100">
                    <h2>Post</h2>
                    <Input value={selectedPost.title} onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })} />
                    <Textarea value={selectedPost.body} onChange={(e) => setSelectedPost({ ...selectedPost, body: e.target.value })} />
                    <Button size={"sm"} disabled={updatePost.isPending || addPost.isPending} variant={"default"} onClick={HandlePostSave}>
                        {updatePost.isPending || addPost.isPending ? "Saving..." : "Save"}
                    </Button>
                </div>
            ) : (
                <>
                    <AddPost />
                    <div className={cn("px-3", isLoading && "opacity-50")}>
                        <PostList posts={posts} />
                    </div>
                </>
            )}
        </div>
    );
};

export default PostsComponent;
