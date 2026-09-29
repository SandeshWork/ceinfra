import type { Metadata } from "next";
import About from "@/components/pages/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CE Infrastructure LLP's story, leadership, vision, and 2015–2026 growth journey — from a 10-platform aerial work fleet to a pan-India infrastructure execution partner.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <About />;
}
