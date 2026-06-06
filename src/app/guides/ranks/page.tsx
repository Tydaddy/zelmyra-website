import CTA from "@/components/CTA";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const rankRewards = [
  { rank: "Peasant", reward: "Starting Rank", note: "Begin your medieval survival journey." },
  { rank: "Page", reward: "/tpahere", note: "Bring trusted players to your location faster." },
  { rank: "Squire", reward: "/si", note: "Unlock the sit command for roleplay and builds." },
  { rank: "Apprentice", reward: "1 Legendary Key", note: "Earn your first major crate reward through progression." },
  { rank: "Footman", reward: "/back", note: "Return to your previous location after teleporting." },
  { rank: "Knight", reward: "/top", note: "Move to the highest safe block above you." },
  { rank: "Warlord", reward: "1 Player Warp", note: "Create a public destination for shops, towns, or builds." },
  { rank: "King", reward: "/hat", note: "Wear blocks and items as cosmetic hats." },
  { rank: "Archon", reward: "/craft", note: "Open a crafting table anywhere." },
  { rank: "Warden", reward: "/ptime", note: "Control your personal time setting." },
  { rank: "Magister", reward: "/anvil", note: "Open an anvil anywhere." },
  { rank: "Sorcerer", reward: "3 Sethomes", note: "Set more homes for bases, farms, shops, and towns." },
  { rank: "Highlord", reward: "/feed", note: "Restore hunger as a late-game quality-of-life reward." },
  { rank: "Mythic", reward: "/enderchest", note: "Access your ender chest from anywhere." },
  { rank: "Zelmyra", reward: "/fly", note: "Reach the final rank and unlock the ultimate survival perk." },
];

const items = [
  { title: "15 Rank Levels", text: "Progress from Peasant to Zelmyra by completing gameplay quests instead of only buying perks." },
  { title: "Accept Quests Early", text: "Make sure your rank quests are active so mining, farming, trading, fishing, crafting, walking, and combat progress counts." },
  { title: "Free Rewards", text: "Rank progression unlocks useful commands, crate keys, player warps, homes, and late-game quality-of-life perks." },
  { title: "Long-Term SMP Goals", text: "The rank ladder gives survival players something to work toward after gear, Netherite, bases, farms, and shops are already established." },
  { title: "Economy Progression", text: "Ranks naturally push players into trading, farming, mining, shops, player warps, voting, and server events." },
  { title: "End Game Grind", text: "Late ranks are intentionally difficult long-term goals for players who want a meaningful medieval economy survival grind." },
];

export default function RankGuide() {
  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <PageHero eyebrow="Guide" title="Rank Progression" text="Zelmyra's rank system gives Minecraft SMP players long-term quests, free rewards, and a reason to keep progressing." image="/images/hero-castle.png" />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">Free Rank Rewards</p>
          <h2 className="text-5xl font-black">Every rank gives you another goal.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Zelmyra uses gameplay quests to reward active players with commands, keys, homes, and long-term survival perks. The system is designed for players looking for a medieval Minecraft survival server with real progression.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-950/35 via-white/[0.035] to-black/30 p-6 md:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-purple-300">Progression Ladder</p>
              <h3 className="mt-3 text-3xl font-black">From Peasant to Zelmyra</h3>
            </div>
            <p className="max-w-xl text-zinc-300">
              Complete quests, unlock perks, and keep building toward the next milestone. This is one of Zelmyra's main long-term survival progression systems.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rankRewards.map((item, index) => (
              <div key={item.rank} className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="absolute right-4 top-4 text-5xl font-black text-white/[0.04]">{String(index + 1).padStart(2, "0")}</div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">Rank {index + 1}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{item.rank}</h3>
                <p className="mt-3 text-xl font-black text-purple-200">{item.reward}</p>
                <p className="mt-3 leading-7 text-zinc-400">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <InfoGrid items={items} />
      </section>

      <CTA />
    </main>
  );
}
