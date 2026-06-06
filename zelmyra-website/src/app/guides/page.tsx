import Link from "next/link";
import CTA from "@/components/CTA";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const guideCards = [
  { title: "Getting Started", href: "/guides/getting-started", text: "Join with Zelmyra.net, read spawn info, accept rank quests, claim land, and begin building your first base." },
  { title: "Economy Guide", href: "/economy", text: "Learn shops, auction house, player warps, trading, spawners, crate keys, and how money flows through the server." },
  { title: "Rank Guide", href: "/guides/ranks", text: "Understand the 15-rank progression path from Peasant to Zelmyra and how gameplay quests unlock rewards." },
  { title: "Dungeons Guide", href: "/guides/dungeons", text: "Learn how to enter dungeons, invite players, handle cooldowns, revive teammates, and fight bosses." },
  { title: "Events Guide", href: "/guides/events", text: "Understand Fishing Frenzy, Mining Mayhem, Slaying Showdown, leaderboards, and event rewards." },
  { title: "Claims Guide", href: "/guides/claims", text: "Protect your builds, expand your land, trust friends, and keep your items safe." },
  { title: "Voting Guide", href: "/guides/voting", text: "Vote daily, earn keys, help trigger vote parties, and support the server without spending money." },
  { title: "Crates Guide", href: "/guides/crates", text: "Learn Vote, Legendary, Mythic, and Zelmyra keys, plus how to earn rewards through gameplay." },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <PageHero eyebrow="Guide Hub" title="Everything new players need to start strong." text="Use these guides to learn Zelmyra's Minecraft SMP economy, free ranks, custom dungeons, server events, claims, voting, crates, and long-term progression systems." image="/images/hero-spawn.png" />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">New Player Hub</p><h2 className="text-5xl font-black">Guides for every major system.</h2></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guideCards.map((guide) => (
            <Link href={guide.href} key={guide.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-purple-400/50 hover:bg-white/[0.06]">
              <h3 className="mb-3 text-2xl font-black">{guide.title}</h3>
              <p className="leading-7 text-zinc-400">{guide.text}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24"><InfoGrid items={[{title:"Best First Steps",text:"Join, read spawn, accept rank quests, claim land, build a base, vote for keys, and explore player warps."},{title:"What To Work Toward",text:"Focus on ranks, economy, events, custom items, dungeon readiness, and building a place other players want to visit."},{title:"Need Help?",text:"Ask in Discord or in-game chat. Zelmyra is meant to be friendly to new players while still giving veterans long-term goals."}]} /></section>
      <CTA />
    </main>
  );
}
