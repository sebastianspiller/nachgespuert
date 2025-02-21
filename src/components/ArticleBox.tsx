import Link from "next/link";
import { format } from "date-fns";
import { BlogPost } from "@/types/blog";

export default function ArticleBox({ post }: { post: BlogPost }) {
  return (
    <article
      key={post.slug}
      className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <span className="text-primary text-sm font-medium">
          {post.category}
        </span>
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
        <div className="text-sm text-gray-600 dark:text-gray-300 ml-auto">
          {format(new Date(post.date), "MMMM d, yyyy")} · {post.readingTime}
        </div>
      </div>

      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
          {post.title}
        </h2>
      </Link>

      <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>

      <Link
        href={`/blog/${post.slug}`}
        className="text-primary hover:text-secondary font-medium inline-flex items-center gap-2"
      >
        Artikel lesen
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </article>
  );
}
