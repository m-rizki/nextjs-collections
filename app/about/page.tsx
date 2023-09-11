import Link from "next/link";

const About = () => {
  // throw new Error("Not Today!")
  return (
    <>
      <h1 className="text-3xl">About</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
};

export default About;
