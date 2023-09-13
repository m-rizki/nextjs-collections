import type { Metadata } from "next";
import Link from "next/link";

import { User } from "@/types";
import getAllUsers from "@/lib/get-all-users";

export const metadata: Metadata = {
  title: "Users",
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();

  // requesting data in waterfall mode
  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <div key={user.id} className="pb-4">
            <p>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </div>
        );
      })}
    </section>
  );

  return content;
};

export default UsersPage;
