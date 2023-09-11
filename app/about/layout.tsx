import { Metadata } from "next";

interface AboutLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "nextjs collections | About",
  description: "About Page",
};

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return (
    <>
      <nav className="text-md">About Navbar</nav>
      <main>{children}</main>
    </>
  );
};

export default AboutLayout;
