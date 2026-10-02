import type { Metadata } from "next";
import Careers from "@/components/pages/Careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CE Infrastructure LLP's growing team. Explore open positions in equipment operations, project management, ship repair, engineering, safety, and sales across India.",
  alternates: { canonical: "/careers" },
};

export default function Page() {
  return <Careers />;
}
