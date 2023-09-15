import Link from "next/link";
import { notFound } from "next/navigation";

import getFormattedDate from "@/lib/get-formatted-date";
import { getPostData, getSortedPostsData } from "@/lib/posts";

interface PostPageProps {
  params: {
    postId: string;
  };
}

// post route is a good example of a ssr pages can actually be SSG
// because we know what blog posts we're going to have in advance
export function generateStaticParams() {
  const posts = getSortedPostsData(); // deduped!
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: PostPageProps) {
  const posts = getSortedPostsData(); // deduped!
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: PostPageProps) {
  // The new docs have clarified that fetch request are deduped, but if you want to dedupe a function that is NOT using fetch you can use react cache()
  const posts = getSortedPostsData(); // deduped!
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
