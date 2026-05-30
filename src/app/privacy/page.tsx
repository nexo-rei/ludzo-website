import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Ludzo privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-display font-bold text-white mt-4 mb-2">Privacy Policy</h1>
            <p className="text-purple-200/50 text-sm">Last updated: July 1, 2025</p>
          </div>
          <div className="space-y-8 glass rounded-2xl p-8 border border-purple-500/10">
            {[
              {
                title: "1. Information We Collect",
                body: "We collect information you provide directly when you join our waitlist, contact us, or use the Ludzo Telegram bot. This includes your email address, Telegram user ID, username, and gameplay data such as scores, coins, and activity history.",
              },
              {
                title: "2. How We Use Your Information",
                body: "We use collected information to operate and improve the Ludzo platform, send you service updates and notifications, process rewards and referrals, provide customer support, and analyze platform usage to enhance the user experience.",
              },
              {
                title: "3. Data Sharing",
                body: "We do not sell your personal data to third parties. We may share anonymized, aggregated data for analytics purposes. We may disclose information when required by law or to protect the rights and safety of Ludzo and its users.",
              },
              {
                title: "4. Telegram Integration",
                body: "Ludzo operates as a Telegram Mini App. Your use of Telegram is governed by Telegram's own privacy policy. We only access data that Telegram grants us through its Mini App API, which includes your Telegram user ID, name, and username.",
              },
              {
                title: "5. Data Retention",
                body: "We retain your data for as long as your account is active or as needed to provide services. You may request deletion of your data by contacting us at support@selixo.in. We will respond within 30 days.",
              },
              {
                title: "6. Security",
                body: "We implement industry-standard security measures including encryption in transit and at rest. However, no method of transmission over the internet is 100% secure. We encourage you to use a strong, unique password and enable two-factor authentication on your Telegram account.",
              },
              {
                title: "7. Children's Privacy",
                body: "Ludzo is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.",
              },
              {
                title: "8. Changes to This Policy",
                body: "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through the Telegram channel. Continued use of Ludzo after changes constitutes acceptance of the updated policy.",
              },
              {
                title: "9. Contact Us",
                body: "For privacy-related inquiries, please contact us at support@selixo.in or through our official Telegram channel at t.me/LudzoOfficial.",
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
