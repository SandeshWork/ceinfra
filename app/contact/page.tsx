import type { Metadata } from "next";
import { Suspense } from "react";
import Contact from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CE Infrastructure LLP for a customized equipment rental or project quote. Navi Mumbai offices, 24/7 phone and WhatsApp support.",
  alternates: { canonical: "/contact" },
};

// This page reads the `?service=` query param (via useSearchParams) to
// prefill the form, so it must be rendered per-request rather than
// statically generated at build time — otherwise the static HTML would
// only ever contain the Suspense fallback instead of the real form.
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Contact />
    </Suspense>
  );
}
