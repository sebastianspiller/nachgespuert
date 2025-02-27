import { getBlogPosts } from "@/lib/blog";
import Image from "next/image";
import ArticleBox from "@/components/ArticleBox";
export default function BlogPage() {
  const posts = getBlogPosts();

  // filter out posts wit role offline or private
  const filteredPosts = posts.filter(
    (post) => post.role !== "offline" && post.role !== "private",
  );

  return (
    <div className="min-h-screen">
      <header className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            Philosophieabende Sommersemester 2025
          </h1>

          {/* Hero Image */}
          <div className="relative w-1/4 max-w-3xl mx-auto mb-2 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/lebenskunst.webp"
              alt="Philosophie als Lebenskunst"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid gap-8">
          {filteredPosts.map((post) => (
            <ArticleBox key={`/blog/${post.slug}`} post={post} />
          ))}
          <div className="h-12"></div>
        </div>
      </div>
    </div>
  );
}
