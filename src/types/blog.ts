export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  content: string;
  role: "public" | "private" | "offline";
  readingTime: string;
}
