import type { Metadata } from "next";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ceinfrastructure.in"),
  title: {
    default: "CE Infrastructure LLP: Pan India Equipment Rental & Infrastructure Solutions",
    template: "%s | CE Infrastructure LLP",
  },
  description:
    "CE Infrastructure LLP provides boom lifts, crawler cranes, scissor lifts, and turnkey infrastructure solutions across India. Trusted by L&T, JSW, Adani, Tata. Pan India operations from Navi Mumbai.",
  keywords: [
    "boom lift rental India",
    "crawler crane hire",
    "JLG lift rental Mumbai",
    "XCMG crane",
    "aerial work platform",
    "scissor lift rental",
    "metro construction equipment",
    "pier girder erection",
    "ship repair services",
    "piling foundation",
    "CE Infrastructure LLP",
    "Crescent Enterprises",
  ],
  authors: [{ name: "CE Infrastructure LLP" }],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "CE Infrastructure LLP",
    title: "CE Infrastructure LLP: Pan India Equipment Rental & Infrastructure",
    description:
      "Pan India infrastructure solutions provider offering boom lifts, crawler cranes, scissor lifts, and turnkey project execution. Trusted by L&T, JSW, Adani, Tata.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CE Infrastructure LLP",
    description:
      "Pan India equipment rental and infrastructure solutions. Boom lifts, crawler cranes, scissor lifts and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
