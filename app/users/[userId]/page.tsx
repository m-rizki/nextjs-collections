import getUser from "@/lib/get-user";
import getUserPosts from "@/lib/get-user-posts";
import { Post, User } from "@/types";

type Params = {
  params: {
    userId: string;
  };
};

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPosts(userId);

  // requesting data in parallel
  const [user, userPosts] = await Promise.all([userData, userPostData]);

  return (
    <>
      <h1>User Page</h1>
      <br />
      {/* <h2>{user.name}</h2> */}
      <br />
      {/* <h2>{userPosts[1].title}</h2> */}
      {/* <UserPosts posts={userPosts} /> */}
    </>
  );
};

export default UserPage;
