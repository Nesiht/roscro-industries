import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Corporation updates, EVE Online industry insights, guides and reports from RosCro Industries. Follow our progress from highsec industry to nullsec independence.",
  alternates: {
    canonical: "https://roscro.eu/blog",
  },
  openGraph: {
    title: "Blog | RosCro Industries",
    description:
      "Corp updates, EVE Online industry insights and guides from RosCro Industries.",
    url: "https://roscro.eu/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      {/* Page header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-accent text-sm font-mono uppercase tracking-[0.25em] mb-4">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Updates &amp; Insights
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            Corporation updates, industry reports, EVE Online guides and
            operational insights from RosCro Industries. Follow our progress as
            we build from a highsec industrial foundation toward long-term
            nullsec independence.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Post listing */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-muted text-center">
              No posts yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="text-muted leading-relaxed mb-6">
            Interested in what we are building?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join"
              className="inline-flex items-center rounded bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
            >
              Join RosCro Industries
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded border border-border-light px-6 py-3 text-sm text-muted hover:text-foreground hover:border-accent/40 transition-colors duration-200"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
