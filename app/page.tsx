import type { Metadata } from "next";
import Home from "@/components/pages/Home";

export const metadata: Metadata = {
  title: "CE Infrastructure LLP — Pan India Equipment Rental & Infrastructure Solutions",
  description:
    "CE Infrastructure LLP provides boom lifts, crawler cranes, scissor lifts, and turnkey infrastructure solutions across India. Trusted by L&T, JSW, Adani, Tata. Pan India operations from Navi Mumbai.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Home />;
}
