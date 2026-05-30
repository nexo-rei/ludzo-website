"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LudzoLogo } from "@/components/ui/LudzoLogo";
import { useLanguage } from "@/hooks/useLanguage";
import { siteConfig } from "@/lib/utils";
import { Send, Instagram, Youtube, Mail, ExternalLink } from "lucide-react";

const productLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/#faq", label: "FAQ" },
  { href: "/coming-soon", label: "Coming Soon" },
];

const companyLinks = [
  { href: "/about", label: "About Ludzo" },
  { href: "/contact", label: "Contact Us" },
  { href: siteConfig.telegram.channel, label: "Telegram Channel", external: true },
  { href: siteConfig.telegram.botLink, label: "Telegram Bot", external: true },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-purple-500/10 bg-dark-300">
      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* Background orbs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 orb bg-purple-900/20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-48 h-48 orb bg-violet-900/15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <LudzoLogo size="md" showTagline className="mb-4" />
            <p className="text-sm text-purple-200/50 leading-relaxed mb-5 max-w-xs">
              {t.footer.tagline}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-purple-300/60 hover:text-white hover:bg-purple-500/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-purple-300/60 hover:text-white hover:bg-purple-500/20 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.telegram.channel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[#229ED9]/60 hover:text-[#229ED9] hover:bg-[#229ED9]/10 transition-all"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email.contact}`}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-purple-300/60 hover:text-white hover:bg-purple-500/20 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-mono text-purple-400/70 uppercase tracking-widest mb-4">
              {t.footer.links.product}
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-purple-200/50 hover:text-purple-200 transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono text-purple-400/70 uppercase tracking-widest mb-4">
              {t.footer.links.company}
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-200/50 hover:text-purple-200 transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-purple-200/50 hover:text-purple-200 transition-colors animated-underline"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-mono text-purple-400/70 uppercase tracking-widest mb-4">
              {t.footer.links.legal}
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-purple-200/50 hover:text-purple-200 transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-xl bg-purple-500/10 border border-purple-500/15">
              <p className="text-xs text-purple-300/60 leading-relaxed">
                Support:{" "}
                <a
                  href={`mailto:${siteConfig.email.support}`}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {siteConfig.email.support}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-purple-500/10">
          <p className="text-xs text-purple-200/30">{t.footer.copyright}</p>
          <p className="text-xs text-purple-200/30">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
