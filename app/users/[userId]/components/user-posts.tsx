import { Post } from "@/types";

interface UserPostsProps {
  promise: Promise<Post[]>;
}

const UserPosts = async ({ promise }: UserPostsProps) => {
  const posts = await promise;
  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });
  return content;
};

export default UserPosts;
