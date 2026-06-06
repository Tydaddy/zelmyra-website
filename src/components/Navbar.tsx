"use client";

import Link from "next/link";
import { useState } from "react";
import CopyIpButton from "@/components/CopyIpButton";

const links = [
  { href: "/dungeons", label: "Dungeons" },
  { href: "/economy", label: "Economy" },
  { href: "/events", label: "Events" },
  { href: "/guides", label: "Guides" },
  { href: "/gallery", label: "Gallery" },
];

const voteLinks = [
  "https://minecraftbestservers.com/server-zelmyra.6908/vote",
  "https://play-minecraft-servers.com/minecraft-servers/zelmyra/?tab=vote",
  "https://minecraft.buzz/vote/20949",
  "https://minecraftservers.org/vote/687097",
  "https://minecraft-server-list.com/server/519850/vote/",
];

function VoteButton({ mobile = false }: { mobile?: boolean }) {
  function openVoteLinks() {
    voteLinks.forEach((url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  return (
    <button
      type="button"
      onClick={openVoteLinks}
      className={
        mobile
          ? "w-full rounded-xl border border-purple-400/40 bg-purple-600 px-4 py-3 text-left text-sm font-black text-white transition hover:bg-purple-500"
          : "rounded-xl border border-purple-400/40 bg-purple-600/25 px-4 py-2 font-bold text-purple-100 transition hover:bg-purple-600 hover:text-white"
      }
    >
      Vote
    </button>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black tracking-tight" onClick={() => setMobileOpen(false)}>
          Zelmyra
        </Link>

        <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}

          <VoteButton />

          <a
            href="https://zelmyra.tebex.io/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-purple-600 px-4 py-2 font-bold text-white transition hover:bg-purple-500"
          >
            Store
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://discord.gg/Dvta9Z6cNE"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-bold transition hover:bg-purple-500"
          >
            Join Discord
          </a>
          <CopyIpButton compact />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/90 px-6 pb-6 pt-2 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-zinc-200 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <VoteButton mobile />

            <a
              href="https://zelmyra.tebex.io/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl bg-purple-600 px-4 py-3 text-sm font-black text-white transition hover:bg-purple-500"
            >
              Store
            </a>

            <a
              href="https://discord.gg/Dvta9Z6cNE"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-zinc-200 transition hover:bg-white/10 hover:text-white"
            >
              Join Discord
            </a>

            <CopyIpButton compact />
          </div>
        </div>
      )}
    </nav>
  );
}
