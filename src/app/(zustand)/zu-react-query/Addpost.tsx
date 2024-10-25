import { Button } from "@/components/ui/button";
import usePostsStore from "./usePostsStore";
import { addMutation, updateMutation } from "./postService";

let AddPost = () => {
    const { setSelectedPost } = usePostsStore();
    const a = addMutation();
    const u = updateMutation();
    let HandleAddDummyPost = () => a.mutate({ id: "", title: "New Post", body: "This is a new post" });
    let AddPost = () => setSelectedPost({ title: "", body: "", id: "" });

    return (
        <>
            <div className="p-2 my-2 flex flex-col gap-2">
                <h1>Add Post</h1>
                <div className="flex gap-2">
                    <Button disabled={a.isPaused || u.isPending} size={"sm"} variant={"outline"} onClick={AddPost}>
                        Add Post
                    </Button>
                    <Button disabled={a.isPaused || u.isPending} size={"sm"} variant={"outline"} onClick={HandleAddDummyPost}>
                        Add Dummy Post
                    </Button>
                </div>
            </div>
        </>
    );
};

export default AddPost;
