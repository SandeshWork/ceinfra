import type { Metadata } from "next";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CE Infrastructure LLP collects, uses, and protects your personal information, in line with India's Information Technology Act and Digital Personal Data Protection Act, 2023.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return <PrivacyPolicy />;
}
