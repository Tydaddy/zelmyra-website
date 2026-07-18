import Image from "next/image";
import Link from "next/link";
import CopyIpButton from "@/components/CopyIpButton";

const links = [
  ["Dungeons", "/dungeons", "Custom bosses, unique arenas, party mechanics, and rare rewards."],
  ["Economy", "/economy", "Player shops, towns, auctions, warps, trading, and long-term wealth."],
  ["Events", "/events", "Fishing, mining, slaying, community competitions, and keyall events."],
  ["Guides", "/guides", "Getting started, ranks, claims, crates, voting, dungeons, and more."],
  ["Gallery", "/gallery", "Explore spawn, player builds, towns, dungeons, and community screenshots."],
];

export default function SmpHome() {
  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <section className="relative flex min-h-[88vh] items-center overflow-hidden px-6 pb-16 pt-28">
        <Image src="/images/hero-spawn.png" alt="Zelmyra Forever SMP medieval spawn" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-950/75 to-black/45" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-purple-300">Zelmyra Forever SMP</p>
          <h1 className="max-w-5xl text-6xl font-black md:text-8xl">Medieval economy survival that keeps giving you goals.</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-zinc-200">A persistent Minecraft survival server with custom dungeons, bosses, rank progression, player towns, shops, events, claims, collectibles, and long-term economy gameplay.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row"><CopyIpButton /><Link href="/guides/getting-started" className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-center font-black backdrop-blur">Start the SMP Guide</Link></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10"><p className="text-sm font-black uppercase tracking-[0.32em] text-purple-300">Explore the SMP</p><h2 className="mt-3 text-5xl font-black">Everything that makes Zelmyra different.</h2></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {links.map(([title, href, text]) => <Link key={href} href={href} className="rounded-3xl border border-purple-400/15 bg-purple-500/[0.06] p-7 transition hover:-translate-y-1 hover:border-purple-300/50"><h3 className="mb-3 text-2xl font-black">{title}</h3><p className="leading-7 text-zinc-300">{text}</p></Link>)}
        </div>
      </section>
    </main>
  );
}
