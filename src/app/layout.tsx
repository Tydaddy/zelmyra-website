import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zelmyra.net"),
  title: {
    default: "Zelmyra Minecraft Network | Skyblock & Forever SMP",
    template: "%s | Zelmyra",
  },
  description:
    "Zelmyra is a Java and Bedrock Minecraft network featuring a classic seasonal Skyblock server and a medieval Forever SMP with custom dungeons, economy, player towns, events, ranks, quests, shops, minions, custom fruits, island progression, and crossplay.",
  keywords: [
    "Minecraft Skyblock server", "best Skyblock server", "classic Skyblock server", "old school Skyblock server", "Skyblock server without spawners", "no spawner Skyblock", "custom Skyblock server", "Minecraft island server", "Skyblock island progression", "Skyblock economy server", "Skyblock server with minions", "custom minions Minecraft", "Skyblock server with custom crops", "Skyblock custom fruits", "Skyblock free ranks", "free rank Minecraft server", "Skyblock events server", "seasonal Skyblock server", "Skyblock leaderboard server", "Java Bedrock Skyblock", "crossplay Skyblock server", "non pay to win Skyblock", "Minecraft SMP", "Forever SMP", "survival SMP server", "medieval Minecraft server", "economy SMP", "Minecraft economy server", "custom dungeon Minecraft server", "Minecraft boss server", "player towns Minecraft", "player shops Minecraft", "Minecraft server with quests", "Minecraft server with events", "Minecraft server with claims", "Minecraft Java Bedrock crossplay", "Zelmyra", "Zelmyra Skyblock", "Zelmyra SMP"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.zelmyra.net",
    siteName: "Zelmyra Minecraft Network",
    title: "Zelmyra Minecraft Network | Skyblock & Forever SMP",
    description: "Play classic seasonal Skyblock or a medieval Forever SMP with custom progression, economy, events, ranks, dungeons, minions, islands, and Java/Bedrock crossplay.",
    images: ["/images/hero-spawn.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelmyra Minecraft Network",
    description: "Classic Skyblock and medieval Forever SMP for Java and Bedrock players.",
    images: ["/images/hero-spawn.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Zelmyra Minecraft Network",
  url: "https://www.zelmyra.net",
  description: "Minecraft network with classic seasonal Skyblock and medieval Forever SMP gameplay.",
  gamePlatform: ["Minecraft Java Edition", "Minecraft Bedrock Edition"],
  genre: ["Skyblock", "Survival", "SMP", "Economy", "Adventure"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
