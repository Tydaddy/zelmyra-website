import CTA from "@/components/CTA";
import ImageCard from "@/components/ImageCard";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const economy = [
  { title: "Player Shops", text: "Open shops, sell resources, build a market, and become known for what you provide to the server." },
  { title: "Auction House", text: "List valuable items, buy from other players, and keep the economy active even when players are spread across the world." },
  { title: "Player Warps", text: "Visit public shops, farms, towns, and community builds with the player warp system." },
  { title: "Crate Keys", text: "Earn keys through voting, events, ranks, and gameplay without needing to rely only on purchases." },
  { title: "Rank Progression", text: "Unlock perks and rewards by completing gameplay goals instead of running out of things to do." },
  { title: "Server Goals", text: "The economy connects with events, dungeons, shops, spawners, collectibles, and long-term progression." },
];

export default function EconomyPage() {
  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <PageHero eyebrow="Player Economy" title="Build wealth, run shops, and create towns." text="Zelmyra is designed around a player-driven economy where shops, trading, player warps, ranks, and rewards all connect together." image="/images/economy-market-builds.png" />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">Economy Features</p><h2 className="text-5xl font-black">A survival economy with reasons to keep grinding.</h2></div>
        <InfoGrid items={economy} />
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3">
        <ImageCard title="Towns" tag="Build" image="/images/economy-towns.png" text="Create player towns, invite friends, decorate your land, and become part of the world." />
        <ImageCard title="Market Builds" tag="Trade" image="/images/economy-market-builds.png" text="Turn your builds into shops, sell resources, and give other players a reason to visit." />
        <ImageCard title="Long-Term Wealth" tag="Progress" image="/images/long-term-wealth.png" text="Work toward rare items, keys, spawners, dungeon rewards, and high-value goals." />
      </section>
      <CTA />
    </main>
  );
}
