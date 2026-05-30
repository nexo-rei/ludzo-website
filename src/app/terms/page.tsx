import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Ludzo terms of service — rules and guidelines for using our platform.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 min-h-screen relative">
        <div className="absolute inset-0 bg-dark-400" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-dark">
          <div className="mb-10">
            <span className="text-xs font-mono text-purple-400/70 tracking-widest uppercase border border-purple-500/20 px-3 py-1 rounded-full glass">
              Legal
            </span>
            <h1 className="text-4xl font-display font-bold text-white mt-4 mb-2">Terms of Service</h1>
            <p className="text-purple-200/50 text-sm">Last updated: July 1, 2025</p>
          </div>
          <div className="space-y-8 glass rounded-2xl p-8 border border-purple-500/10">
            {[
              {
                title: "1. Acceptance of Terms",
                body: "By accessing or using Ludzo, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. These terms apply to all users, including visitors, registered users, and premium members.",
              },
              {
                title: "2. Platform Description",
                body: "Ludzo is a Telegram-based gaming platform that provides multiplayer games, tasks, rewards, and community features. The platform is accessed primarily through Telegram's Mini App functionality.",
              },
              {
                title: "3. Eligibility",
                body: "You must be at least 13 years old to use Ludzo. By using the platform, you represent that you meet this requirement. Users under 18 should have parental consent. We reserve the right to terminate accounts that violate age requirements.",
              },
              {
                title: "4. User Conduct",
                body: "You agree not to: cheat, exploit bugs, or use unauthorized software; harass or abuse other users; attempt to manipulate the reward system; create multiple accounts to gain unfair advantages; engage in any activity that disrupts platform operation.",
              },
              {
                title: "5. Virtual Currency & Rewards",
                body: "Ludzo coins and rewards are virtual items with no real-world monetary value unless explicitly stated. We reserve the right to modify, suspend, or terminate the rewards program at any time. Coins are non-transferable between accounts.",
              },
              {
                title: "6. Intellectual Property",
                body: "All content, features, and functionality of Ludzo, including but not limited to text, graphics, logos, and game mechanics, are owned by Ludzo and protected by applicable intellectual property laws.",
              },
              {
                title: "7. Termination",
                body: "We may suspend or terminate your access to Ludzo at our sole discretion for violations of these terms or for any other reason. Upon termination, your right to use the platform will immediately cease.",
              },
              {
                title: "8. Limitation of Liability",
                body: "Ludzo is provided on an 'as is' basis. We make no warranties regarding uptime, accuracy, or fitness for a particular purpose. Our liability is limited to the maximum extent permitted by applicable law.",
              },
              {
                title: "9. Governing Law",
                body: "These terms are governed by applicable laws. Any disputes will be resolved through binding arbitration or in the courts of the jurisdiction where Ludzo operates.",
              },
              {
                title: "10. Contact",
                body: "For questions about these Terms, contact us at contact@selixo.in or through our Telegram channel at t.me/LudzoOfficial.",
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <h2 className="text-lg font-display font-bold text-white mb-2">{title}</h2>
                <p className="text-purple-200/65 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
