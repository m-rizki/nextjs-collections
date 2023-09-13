import { Suspense } from "react";
import type { Metadata } from "next";

import { Post, User } from "@/types";
import getUser from "@/lib/get-user";
import getUserPosts from "@/lib/get-user-posts";
import getAllUsers from "@/lib/get-all-users";

import UserPosts from "./components/user-posts";

interface UserPageProps {
  params: {
    userId: string;
  };
}

// Dynamic Metadata
export async function generateMetadata({
  params: { userId },
}: UserPageProps): Promise<Metadata> {
  // Duplicate fetch
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

const UserPage = async ({ params: { userId } }: UserPageProps) => {
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

// generate static parameters and staticly generate static pages in advance without server side rendering
// The SSG pages will still follow our ISR strategy (revalidate)
// check /users/1 : there was no extra request, its request once, and there was no longer a server-side render page
// now /users/1 is SSG with ISR and we have data instantly, its like visiting any static web page (power of SSG + ISR)
export const generateStaticParams = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({ userId: user.id.toString() }));
};

export default UserPage;
