export default async function getUserPosts(userId: string) {
  // { cache: 'force-cache' } by default
  // { cache: 'no-store' } make it always dynamic
  // { next: { revalidate: 60 } } its apply incremental static regeneration. every 60 second
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch Posts");

  return res.json();
}
