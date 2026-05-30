import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const siteConfig = {
  name: "Ludzo",
  tagline: "Play. Earn. Dominate.",
  description:
    "Ludzo is a next-generation Telegram gaming platform combining multiplayer games, tasks, rewards, referrals, and community engagement in one seamless experience.",
  url: "https://selixo.in",
  domain: "selixo.in",
  telegram: {
    bot: "@LudzoBot",
    channel: "https://t.me/LudzoOfficial",
    botLink: "https://t.me/LudzoBot",
  },
  email: {
    support: "support@selixo.in",
    contact: "contact@selixo.in",
  },
  social: {
    instagram: "https://instagram.com/ludzo",
    youtube: "https://youtube.com/@ludzo",
  },
  launchDate: "July 2026",
  keywords: [
    "Ludzo",
    "Telegram gaming",
    "mini app games",
    "earn rewards",
    "multiplayer telegram",
    "gaming platform",
    "crypto games",
    "telegram bot games",
    "play and earn",
    "leaderboard games",
  ],
};
