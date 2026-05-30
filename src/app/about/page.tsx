import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhySection } from "@/components/sections/WhySection";
import { StatsSection } from "@/components/sections/StatsSection";

export const metadata: Metadata = {
  title: "About Ludzo",
  description:
    "Learn about Ludzo — the next-generation Telegram gaming platform built for players worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AboutSection />
        <WhySection />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
}
