import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="rounded border border-border bg-surface p-6 hover:border-border-light transition-colors duration-200 block group"
    >
      <p className="text-xs font-mono text-accent mb-2">{date}</p>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-bright transition-colors duration-200">
        {post.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 rounded bg-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
