import type { Metadata } from "next";
import Projects from "@/components/pages/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "CE Infrastructure LLP's project specializations: ship repair, pier girder erection, and piling foundation works — 500+ projects completed for L&T, Adani Ports, Tata Projects, and NCRTC.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return <Projects />;
}
