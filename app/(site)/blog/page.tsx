import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on boom lifts, cranes, piling rigs, and infrastructure execution from CE Infrastructure LLP.",
  alternates: { canonical: "/blog" },
};

const clusterLabels: Record<string, string> = {
  awp: "Aerial Work Platforms",
  cranes: "Cranes",
  piling: "Piling",
  marine: "Marine",
  concrete: "Concrete",
  trust: "Trust & Company",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1A2639] mb-4">Blog</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Field notes on equipment, projects, and execution across CE Infrastructure's pan-India operations.
      </p>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts published yet, check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(({ slug, entry }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="block rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {entry.heroImage && (
                <img
                  src={entry.heroImage}
                  alt={entry.h1}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <span className="text-xs font-semibold text-[#FF6A00] uppercase tracking-wide">
                  {clusterLabels[entry.cluster] ?? entry.cluster}
                </span>
                <h2 className="text-lg font-bold text-[#1A2639] mt-2 mb-2">{entry.h1}</h2>
                <p className="text-sm text-gray-600 line-clamp-3">{entry.metaDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
