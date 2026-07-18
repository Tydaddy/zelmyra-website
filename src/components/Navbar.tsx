"use client";

import Link from "next/link";
import { useState } from "react";
import CopyIpButton from "@/components/CopyIpButton";

const primaryLinks = [
  { href: "/smp", label: "SMP", tone: "purple" },
  { href: "/skyblock", label: "Skyblock", tone: "green" },
  { href: "/vote", label: "Vote", tone: "neutral" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <Link href="/" onClick={() => setMobileOpen(false)} className="text-xl font-black tracking-tight">
          <span className="text-purple-300">Zel</span><span className="text-emerald-300">myra</span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-2 text-sm font-black transition ${
                link.tone === "purple"
                  ? "border border-purple-400/30 bg-purple-500/15 text-purple-100 hover:bg-purple-600"
                  : link.tone === "green"
                  ? "border border-emerald-400/30 bg-emerald-500/15 text-emerald-100 hover:bg-emerald-600"
                  : "border border-white/15 bg-white/5 text-zinc-200 hover:bg-white/15"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://zelmyra.tebex.io/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-emerald-600 px-4 py-2 text-sm font-black text-white transition hover:brightness-110"
          >
            Store
          </a>
          <a
            href="https://discord.gg/Dvta9Z6cNE"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
          >
            Discord
          </a>
          <CopyIpButton compact />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 px-5 pb-6 pt-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-black text-white"
              >
                {link.label}
              </Link>
            ))}
            <a href="https://zelmyra.tebex.io/" target="_blank" rel="noreferrer" className="rounded-xl bg-gradient-to-r from-purple-600 to-emerald-600 px-4 py-3 text-sm font-black text-white">Store</a>
            <a href="https://discord.gg/Dvta9Z6cNE" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-black text-white">Discord</a>
            <CopyIpButton compact />
          </div>
        </div>
      )}
    </nav>
  );
}
