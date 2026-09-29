import type { Metadata } from "next";
import Industries from "@/components/pages/Industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "CE Infrastructure LLP serves Power, Telecom, Railways, Construction, Oil & Gas, Manufacturing, Ports & Shipyards, and Infrastructure sectors across India with specialized equipment and expertise.",
  alternates: { canonical: "/industries" },
};

export default function Page() {
  return <Industries />;
}
