import type { Metadata } from "next";
import WhyCrescent from "@/components/pages/WhyCrescent";

export const metadata: Metadata = {
  title: "Why CE Infrastructure",
  description:
    "Why choose CE Infrastructure LLP: 24/7 support, smart equipment tracking, CE-certified trained crews, 97% uptime, and eco-safe electric conversions across India.",
  alternates: { canonical: "/why-crescent" },
};

export default function Page() {
  return <WhyCrescent />;
}
