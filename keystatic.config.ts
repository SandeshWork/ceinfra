import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/posts/*/",
      format: { contentField: "body" },
      entryLayout: "content",
      columns: ["h1", "cluster", "funnelStage", "publishDate", "draft"],
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { isRequired: true },
          },
        }),
        h1: fields.text({
          label: "H1 Heading",
          validation: { isRequired: true },
        }),
        seoTitle: fields.text({
          label: "SEO Title Override (optional)",
          description: "Leave blank to fall back to the H1.",
        }),
        metaDescription: fields.text({
          label: "Meta Description",
          multiline: true,
          validation: { length: { max: 160 } },
        }),
        primaryKeyword: fields.text({ label: "Primary Keyword" }),
        secondaryKeywords: fields.array(
          fields.text({ label: "Keyword" }),
          {
            label: "Secondary Keywords",
            itemLabel: (props) => props.value || "Keyword",
          }
        ),
        longtailKeywords: fields.array(
          fields.text({ label: "Keyword" }),
          {
            label: "Longtail Keywords",
            itemLabel: (props) => props.value || "Keyword",
          }
        ),
        cluster: fields.select({
          label: "Content Cluster",
          options: [
            { label: "Aerial Work Platforms", value: "awp" },
            { label: "Cranes", value: "cranes" },
            { label: "Piling", value: "piling" },
            { label: "Marine", value: "marine" },
            { label: "Concrete", value: "concrete" },
            { label: "Trust & Company", value: "trust" },
          ],
          defaultValue: "awp",
        }),
        funnelStage: fields.select({
          label: "Funnel Stage",
          options: [
            { label: "TOFU — Awareness", value: "tofu" },
            { label: "MOFU — Consideration", value: "mofu" },
            { label: "BOFU — Decision", value: "bofu" },
          ],
          defaultValue: "tofu",
        }),
        wordCountTarget: fields.integer({
          label: "Word Count Target",
          defaultValue: 1500,
        }),
        contentAngle: fields.text({
          label: "Content Angle (editorial note, not published)",
          multiline: true,
        }),
        outlineNotes: fields.text({
          label: "Outline Notes (editorial note, not published)",
          multiline: true,
        }),
        internalLinkingNotes: fields.text({
          label: "Internal Linking Notes (editorial note, not published)",
          multiline: true,
        }),
        cta: fields.text({ label: "Call To Action" }),
        heroImage: fields.image({
          label: "Hero Image",
          directory: "public/images/blog",
          publicPath: "/images/blog/",
        }),
        publishDate: fields.date({
          label: "Publish Date",
          defaultValue: { kind: "today" },
        }),
        draft: fields.checkbox({
          label: "Draft (unchecked = published, appears on /blog and in the sitemap)",
          defaultValue: true,
        }),
        body: fields.mdx({
          label: "Body",
          options: {
            image: {
              directory: "public/images/blog",
              publicPath: "/images/blog/",
            },
          },
        }),
      },
    }),
  },
});
