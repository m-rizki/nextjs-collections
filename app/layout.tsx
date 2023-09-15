import "./globals.css";
import type { Metadata } from "next";

import Navbar from "./components/navbar";
import MyProfilePict from "./components/my-profile-pict";

export const metadata: Metadata = {
  title: "Rizki's Blog",
  description: "Created by Muhamad Rizki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePict />
        {children}
      </body>
    </html>
  );
}
