import Link from "next/link";
import CopyIpButton from "@/components/CopyIpButton";

const features = [
  ["Classic Skyblock Feel", "Begin with a small island and expand through farming, trading, building, and smart progression instead of relying on overpowered spawner economies."],
  ["No Spawner Economy", "Zelmyra Skyblock is designed around active gameplay, farms, custom fruits, minions, events, and island progression rather than mass spawner grinding."],
  ["Custom Fruits & Seeds", "Grow a full collection of custom fruits with different rarities, harvest times, seed chances, values, and rank-up requirements."],
  ["Upgradeable Minions", "Use Farmer, Miner, Slayer, Collector, and Seller minions with upgrades for range, storage, speed, and specialized island automation."],
  ["Free Rank Progression", "Earn permanent gameplay commands and seasonal boosts by completing progression goals instead of purchasing your way through the server."],
  ["Seasonal Events", "Compete in fishing, mining, slaying, Skyblock Hour, vote parties, keyalls, and community events for money, keys, and special rewards."],
  ["Island Economy", "Sell resources, trade with players, use the auction house, create player warps, and compete for long-term island wealth."],
  ["Island Leaderboards", "Build, optimize, and level your island while competing with other teams throughout the season."],
  ["Java & Bedrock Crossplay", "Play Zelmyra Skyblock from Minecraft Java Edition or Bedrock Edition and progress alongside the same community."],
];

export default function SkyblockHome() {
  return (
    <main className="min-h-screen bg-[#03100a] text-white">
      <section className="relative flex min-h-[88vh] items-center overflow-hidden px-6 pb-16 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,197,94,.32),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,.18),transparent_35%),linear-gradient(135deg,#02150b,#06130c_52%,#000)]" />
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-emerald-300">Zelmyra Skyblock</p>
          <h1 className="max-w-5xl text-6xl font-black md:text-8xl">Classic Skyblock progression with modern custom systems.</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-zinc-200">A seasonal Minecraft Skyblock server with no spawner economy, custom fruits, upgradeable minions, free ranks, island teams, events, player trading, leaderboards, Java and Bedrock crossplay, and long-term goals.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row"><CopyIpButton /><Link href="#features" className="rounded-xl border border-emerald-300/30 bg-emerald-500/15 px-8 py-4 text-center font-black text-emerald-100 backdrop-blur">Explore Skyblock</Link></div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.32em] text-emerald-300">Skyblock Features</p><h2 className="mt-3 text-5xl font-black">A Minecraft Skyblock server built around earning progress.</h2><p className="mt-5 text-lg leading-8 text-zinc-300">Zelmyra combines old-school island gameplay with custom farms, fruit progression, minions, events, ranks, economy systems, team islands, seasonal competition, and rewards that encourage active play.</p></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, text]) => <article key={title} className="rounded-3xl border border-emerald-400/15 bg-emerald-500/[0.055] p-7"><h3 className="mb-3 text-2xl font-black text-emerald-100">{title}</h3><p className="leading-7 text-zinc-300">{text}</p></article>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-950/70 to-black p-8 md:p-12">
          <h2 className="text-4xl font-black">Looking for a classic Skyblock server without spawners?</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-300">Zelmyra Skyblock is made for players searching for a free-to-play friendly Minecraft Skyblock server with custom minions, custom crops and fruits, free ranks, active events, island progression, player economy, crossplay, and a competitive seasonal leaderboard.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row"><CopyIpButton /><Link href="/vote" className="rounded-xl border border-white/15 bg-white/10 px-8 py-4 text-center font-black">Vote for Free Rewards</Link></div>
        </div>
      </section>
    </main>
  );
}
