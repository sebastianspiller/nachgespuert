import PageClient from "@/app/page-client";
import { getBlogPosts } from "@/lib/blog";

export default function Home() {
  const posts = getBlogPosts();
  const postsToShow = posts.slice(0, 3);

  return <PageClient posts={postsToShow} />;
}
