import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import ImageCard from "@/components/ImageCard";
import CopyIpButton from "@/components/CopyIpButton";

const heroImages = [
  "/images/hero-spawn.png",
  "/images/hero-town.png",
  "/images/hero-castle.png",
  "/images/hero-dungeon.png",
];

const stats = [
  { value: "360+", label: "Players Joined" },
  { value: "23", label: "Recent Peak" },
  { value: "5", label: "Dungeon Bosses" },
  { value: "15", label: "Rank Levels" },
  { value: "9", label: "Long Quests" },
];

const features = [
  {
    title: "Custom Dungeons",
    text: "Fight exclusive bosses with custom abilities, multiple phases, downed states, group mechanics, and rare rewards.",
    image: "/images/dungeon-purple.png",
    tag: "Boss Fights",
  },
  {
    title: "Player Economy",
    text: "Build shops, trade with other players, use the auction house, visit player warps, and grow your wealth.",
    image: "/images/hero-town.png",
    tag: "Economy",
  },
  {
    title: "Custom Events",
    text: "Compete in Fishing Frenzy, Mining Mayhem, Slaying Showdown, and other server-wide competitions.",
    image: "/images/players-event.png",
    tag: "Events",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <section className="relative min-h-screen overflow-hidden">
        {heroImages.map((src, index) => (
          <Image key={src} src={src} alt="Zelmyra Minecraft server screenshot" fill priority={index === 0} className={`object-cover hero-fade hero-fade-${index}`} />
        ))}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-purple-950/20 to-[#08050d]" />
        <div className="noise absolute inset-0 opacity-20" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="max-w-5xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.45em] text-purple-300">Medieval Economy Survival</p>
            <h1 className="mb-6 text-7xl font-black tracking-tight md:text-9xl">Zelmyra</h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl leading-8 text-zinc-200">
              A Minecraft survival server built around long-term progression, custom dungeons, player towns, economy gameplay, custom events, and a community that gives you a reason to keep playing.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <CopyIpButton />
              <Link href="https://discord.gg/Dvta9Z6cNE" className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-black backdrop-blur transition hover:bg-white/20">Join Discord</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-5">
          {stats.map((stat) => <Stat key={stat.label} {...stat} />)}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">Why Zelmyra?</p>
          <h2 className="mb-6 text-5xl font-black">Most survival servers end after Netherite. <span className="gold-gradient">Zelmyra starts there.</span></h2>
          <p className="text-lg leading-8 text-zinc-300">
            Zelmyra is a medieval economy survival server designed for players who want long-term goals. Rank up through gameplay, build towns, create shops, collect rare items, join server events, and fight exclusive dungeon bosses built specifically for Zelmyra.
          </p>
        </div>
        <div className="relative h-[430px] overflow-hidden rounded-3xl border border-white/10">
          <Image src="/images/hero-town.png" alt="Zelmyra medieval player town" fill className="object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">Server Features</p>
          <h2 className="text-5xl font-black">Built like a world, not just another SMP.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => <ImageCard key={feature.title} {...feature} />)}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-2">
        <Link href="/dungeons" className="relative min-h-[430px] overflow-hidden rounded-3xl border border-white/10">
          <Image src="/images/dungeon-copper.png" alt="Zelmyra dungeon" fill className="object-cover transition duration-700 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 p-8"><h3 className="mb-3 text-3xl font-black">Exclusive Dungeon Bosses</h3><p className="max-w-xl text-zinc-300">Fight custom bosses with unique attacks, phases, arenas, spectator support, and rewards.</p></div>
        </Link>
        <Link href="/guides" className="relative min-h-[430px] overflow-hidden rounded-3xl border border-white/10">
          <Image src="/images/hero-spawn.png" alt="Zelmyra guides" fill className="object-cover transition duration-700 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 p-8"><h3 className="mb-3 text-3xl font-black">New Player Guide Hub</h3><p className="max-w-xl text-zinc-300">Learn ranks, economy, dungeons, events, claims, voting, crates, and everything you need to start strong.</p></div>
        </Link>
      </section>

      <CTA />
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"><div className="text-4xl font-black">{value}</div><div className="mt-2 text-sm text-zinc-400">{label}</div></div>;
}
