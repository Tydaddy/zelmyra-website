import Link from "next/link";
import CopyIpButton from "@/components/CopyIpButton";

const choices = [
  {
    href: "/skyblock",
    title: "Skyblock",
    subtitle: "Classic Skyblock, rebuilt for long-term progression",
    description:
      "Start on a small island, grow custom fruits, use upgradeable minions, earn free ranks, compete in seasonal events, and build your way toward the island leaderboard.",
    className: "from-emerald-950/90 via-emerald-900/65 to-black/80 border-emerald-400/25 hover:border-emerald-300/70",
    accent: "text-emerald-300",
  },
  {
    href: "/smp",
    title: "Forever SMP",
    subtitle: "Medieval economy survival with custom dungeons",
    description:
      "Build towns, run player shops, rank up through quests, fight exclusive dungeon bosses, collect rare items, and progress in a survival world designed to last.",
    className: "from-purple-950/90 via-purple-900/65 to-black/80 border-purple-400/25 hover:border-purple-300/70",
    accent: "text-purple-300",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] text-white">
      <section className="relative flex min-h-screen items-center px-5 pb-16 pt-28 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,.23),transparent_34%),radial-gradient(circle_at_80%_25%,rgba(147,51,234,.28),transparent_38%),linear-gradient(135deg,#02170c_0%,#09060f_48%,#16051e_100%)]" />
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="noise absolute inset-0 opacity-20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.42em] text-zinc-300 md:text-sm">Java + Bedrock Minecraft Network</p>
            <h1 className="mb-6 text-6xl font-black tracking-tight sm:text-7xl md:text-9xl">
              <span className="bg-gradient-to-r from-emerald-300 via-white to-purple-300 bg-clip-text text-transparent">Zelmyra</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-200 md:text-xl">
              Choose your adventure: a classic seasonal Skyblock server with custom progression, or a medieval Forever SMP with economy gameplay, player towns, custom dungeons, bosses, quests, and events.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {choices.map((choice) => (
              <Link
                key={choice.href}
                href={choice.href}
                className={`group relative min-h-[360px] overflow-hidden rounded-[2rem] border bg-gradient-to-br p-8 shadow-2xl transition duration-500 hover:-translate-y-1 ${choice.className}`}
              >
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <p className={`mb-3 text-sm font-black uppercase tracking-[0.32em] ${choice.accent}`}>{choice.subtitle}</p>
                  <h2 className="mb-4 text-5xl font-black md:text-6xl">{choice.title}</h2>
                  <p className="max-w-xl text-lg leading-8 text-zinc-200">{choice.description}</p>
                  <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-black/25 px-5 py-3 font-black backdrop-blur transition group-hover:bg-white/10">Explore {choice.title} →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/vote" className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center font-black transition hover:bg-white/10">Vote for Zelmyra</Link>
            <a href="https://zelmyra.tebex.io/" target="_blank" rel="noreferrer" className="rounded-2xl bg-gradient-to-r from-purple-600 to-emerald-600 p-5 text-center font-black transition hover:brightness-110">Open Store</a>
            <a href="https://discord.gg/Dvta9Z6cNE" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center font-black transition hover:bg-white/10">Join Discord</a>
            <CopyIpButton />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-12">
          <h2 className="mb-5 text-4xl font-black">A Minecraft server network built for players who want more to do.</h2>
          <p className="max-w-5xl text-lg leading-8 text-zinc-300">
            Zelmyra is a crossplay Minecraft network featuring a classic Skyblock server and a long-term survival SMP. Players can join from Java Edition or Bedrock Edition, earn ranks through gameplay, participate in events, build an economy, collect custom rewards, play with friends, and choose between seasonal island progression or a persistent survival world.
          </p>
        </div>
      </section>
    </main>
  );
}
