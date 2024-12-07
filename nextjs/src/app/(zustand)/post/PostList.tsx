import { Button } from "../../../components/ui/button";
import HandleDelete from "./DeletePost";
import usePostsStore from "./usePostsStore";

export default function PostList({ posts }: { posts: any }) {
    const { setSelectedPost } = usePostsStore();
    return (
        <ul className="w-full grid grid-cols-5 gap-2">
            {posts?.map((post: any) => (
                <li key={post.id} className="border p-2 my-2">
                    <h2>{post.title}</h2>
                    <p>{post?.body?.slice(0, 50)}</p>
                    <div className="flex gap-2 ">
                        <Button size={"sm"} onClick={() => setSelectedPost(post)}>
                            Edit
                        </Button>
                        <HandleDelete id={post.id} />
                    </div>
                </li>
            ))}
        </ul>
    );
}
