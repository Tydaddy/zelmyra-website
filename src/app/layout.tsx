import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Zelmyra | Medieval Economy SMP Minecraft Server with Custom Dungeons",
  description:
    "Zelmyra is a medieval Minecraft SMP and economy survival server with custom dungeons, bosses, player towns, shops, rank progression, events, crates, claims, and long-term survival goals.",
  keywords: [
    "Minecraft SMP",
    "best Minecraft SMP server",
    "Minecraft survival server",
    "economy SMP",
    "medieval SMP",
    "medieval Minecraft server",
    "Minecraft economy server",
    "Minecraft server with custom dungeons",
    "Minecraft dungeon server",
    "custom boss Minecraft server",
    "Minecraft server with ranks",
    "Minecraft server with player shops",
    "Minecraft towns server",
    "Minecraft survival economy",
    "Minecraft server with events",
    "Minecraft server with claims",
    "Zelmyra",
    "Zelmyra SMP",
  ],
  openGraph: {
    title: "Zelmyra | Medieval Economy SMP",
    description:
      "Join Zelmyra, a medieval economy survival Minecraft SMP with custom dungeons, player towns, events, ranks, shops, and long-term progression.",
    images: ["/images/hero-spawn.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
