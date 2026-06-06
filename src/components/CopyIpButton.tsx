"use client";

import { useState } from "react";

export default function CopyIpButton({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copyIp() {
    try {
      await navigator.clipboard.writeText("Zelmyra.net");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      onClick={copyIp}
      className={
        compact
          ? "rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20"
          : "rounded-xl bg-purple-600 px-8 py-4 font-black shadow-lg shadow-purple-900/40 transition hover:bg-purple-500"
      }
    >
      {copied ? "Copied!" : compact ? "Copy IP" : "Copy IP: Zelmyra.net"}
    </button>
  );
}
