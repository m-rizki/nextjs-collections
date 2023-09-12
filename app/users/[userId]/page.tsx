import { Suspense } from "react";
import type { Metadata } from "next";

import getUser from "@/lib/get-user";
import getUserPosts from "@/lib/get-user-posts";
import { Post, User } from "@/types";
import UserPosts from "./components/user-posts";

type Params = {
  params: {
    userId: string;
  };
};

// Dynamic Metadata
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  // Duplicate fetch
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPosts(userId);

  // requesting data in parallel
  // const [user, userPosts] = await Promise.all([userData, userPostData]);

  const user = await userData;
  return (
    <>
      <h1 className="text-3xl font-bold">{user.name}</h1>
      <br />
      {/* <h2>{userPosts[1].title}</h2> */}
      <Suspense fallback={<p>Loading...</p>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
};

export default UserPage;
