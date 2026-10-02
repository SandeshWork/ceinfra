import type { Metadata } from "next";
import Machineries from "@/components/pages/Machineries";

export const metadata: Metadata = {
  title: "Machineries",
  description:
    "150+ types of specialized machinery available across India: boom lifts, scissor lifts, crawler cranes, piling rigs, transit mixers, boom pumps, telehandlers, and more.",
  alternates: { canonical: "/machineries" },
};

export default function Page() {
  return <Machineries />;
}
