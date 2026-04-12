import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import type { ContentBlock } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: `https://roscro.eu/blog/${post.slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://roscro.eu/blog/${post.slug}`,
        type: "article",
        publishedTime: post.publishedAt,
        ...(post.updatedAt && { modifiedTime: post.updatedAt }),
        authors: post.author ? [post.author] : undefined,
      },
    };
  });
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="text-xl sm:text-2xl font-bold text-foreground mt-10 mb-4"
        >
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="text-muted leading-relaxed mb-6">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={index} className="space-y-2 mb-6 text-muted">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure key={index} className="my-8">
          <div className="relative w-full overflow-hidden rounded border border-border">
            <Image
              src={block.src}
              alt={block.alt}
              width={1200}
              height={675}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-center text-xs text-muted/70 font-mono">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            ...(post.updatedAt && { dateModified: post.updatedAt }),
            author: {
              "@type": "Organization",
              name: post.author || "RosCro Industries",
            },
            publisher: {
              "@type": "Organization",
              name: "RosCro Industries",
              url: "https://roscro.eu",
            },
            mainEntityOfPage: `https://roscro.eu/blog/${post.slug}`,
          }),
        }}
      />

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://roscro.eu",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://roscro.eu/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://roscro.eu/blog/${post.slug}`,
              },
            ],
          }),
        }}
      />

      {/* Article header */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-6">
            <Link
              href="/blog"
              className="text-sm text-accent hover:text-accent-bright transition-colors duration-200"
            >
              ← Back to Blog
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time
              dateTime={post.publishedAt}
              className="text-xs font-mono text-accent"
            >
              {date}
            </time>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded bg-border text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            {post.title}
          </h1>
        </div>
      </section>

      <div className="section-divider" />

      {/* Article content */}
      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>
      </article>

      <div className="section-divider" />

      {/* Footer links */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/blog"
              className="text-sm text-accent hover:text-accent-bright transition-colors duration-200"
            >
              ← All Posts
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/join"
                className="inline-flex items-center rounded bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
              >
                Join RosCro Industries
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
