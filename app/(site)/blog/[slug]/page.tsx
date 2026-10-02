import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedPost, getPublishedSlugs } from "@/lib/blog";
import { renderMdx } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = await getPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return {};

  const title = post.seoTitle || post.h1;
  return {
    title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishDate ?? undefined,
      images: post.heroImage ? [post.heroImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();

  const Content = await renderMdx(post.body);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.h1,
    description: post.metaDescription,
    image: post.heroImage ?? undefined,
    datePublished: post.publishDate ?? undefined,
    author: {
      "@type": "Organization",
      name: "CE Infrastructure LLP",
      url: "https://ceinfrastructure.in/",
    },
    publisher: {
      "@type": "Organization",
      name: "CE Infrastructure LLP",
      url: "https://ceinfrastructure.in/",
    },
  };

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {post.heroImage && (
        <img
          src={post.heroImage}
          alt={post.h1}
          className="w-full h-auto rounded-xl mb-8 object-cover"
        />
      )}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1A2639] mb-6">{post.h1}</h1>
      <div className="prose prose-lg max-w-none">
        <Content />
      </div>
      {post.cta && (
        <div className="mt-12 p-6 bg-[#1A2639] rounded-xl text-white font-semibold text-center">
          {post.cta}
        </div>
      )}
    </article>
  );
}
