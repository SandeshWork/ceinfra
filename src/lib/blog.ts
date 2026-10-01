import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export async function getPublishedPosts() {
  const posts = await reader.collections.posts.all();
  return posts
    .filter((post) => !post.entry.draft)
    .sort((a, b) => (b.entry.publishDate ?? "").localeCompare(a.entry.publishDate ?? ""));
}

export async function getPublishedSlugs() {
  const posts = await getPublishedPosts();
  return posts.map((post) => post.slug);
}

export async function getPublishedPost(slug: string) {
  const post = await reader.collections.posts.read(slug, { resolveLinkedFiles: true });
  if (!post || post.draft) return null;
  return post;
}
