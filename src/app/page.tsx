import PageClient from "@/app/page-client";
import { getBlogPosts } from "@/lib/blog";

export default function Home() {
  const posts = getBlogPosts();
  const postsToShow = posts.slice(0, 3);
  // filter out posts wit role offline or private
  const filteredPosts = postsToShow.filter(
    (post) => post.role !== "offline" && post.role !== "private",
  );

  return <PageClient posts={filteredPosts} />;
}
