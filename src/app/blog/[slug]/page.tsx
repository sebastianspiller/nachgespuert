import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/MdxRemote";
import Image from "next/image";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const post = getBlogPost(params.slug);
  if (!post) {
    notFound();
  }

  return {
    title: `nachgespürt.de - ${post.title}`,
    description: `${post.excerpt}`,
  };
}

export default async function BlogPostPage(props: { params: Params }) {
  const params = await props.params;
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <header className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            {post.title}
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
      <article className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
            <span>·</span>
            <span className="text-primary">{post.category}</span>
          </div>

          <h1 className="text-4xl font-bold mb-4"></h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {post.excerpt}
          </p>
        </div>

        <div className="prose-custom text-justify">
          <CustomMDX source={post.content} />
        </div>
      </article>
    </div>
  );
}
