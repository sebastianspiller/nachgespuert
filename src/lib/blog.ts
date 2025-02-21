import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";
import { calculateReadingTime } from "./utils";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getBlogPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        const slug = fileName.replace(/\.mdx$/, "");

        // Wenn role nicht definiert ist, setze sie auf "private"
        const role = data.role || "private";

        // Wenn der Status offline ist, überspringe den Post
        if (data.status === "offline") return null;

        return {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          category: data.category,
          tags: data.tags || [],
          content,
          role: role,
          readingTime: calculateReadingTime(content),
        };
      })
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));

    // Wenn wir nicht in der Entwicklungsumgebung sind,
    // zeige nur öffentliche Posts
    if (process.env.NODE_ENV !== "development") {
      return posts.filter((post) => post.role === "public");
    }

    return posts;
  } catch {
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Wenn der Status offline ist oder die Role nicht public ist, return null
    if (data.status === "offline" || (data.role || "private") !== "public") {
      return null;
    }

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      tags: data.tags || [],
      content,
      role: data.role || "private",
      readingTime: calculateReadingTime(content),
    };
  } catch {
    return null;
  }
}
