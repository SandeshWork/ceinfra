import type { Metadata } from "next";
import Services from "@/components/pages/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore CE Infrastructure LLP's two core service lines: specialized machinery rental across 150+ equipment types, and turnkey infrastructure project execution.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <Services />;
}
