import CTA from "@/components/CTA";
import ImageCard from "@/components/ImageCard";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const bosses = [
  {
    title: "Tyrant",
    tag: "Zombie Warlord",
    image: "/images/boss-tyrant.png",
    text: "A brutal melee boss with empowered minions, grave slams, target swaps, and heavy pressure on groups.",
  },
  {
    title: "Voltrix the Unstable",
    tag: "Explosive Cataclysm",
    image: "/images/boss-voltrix.png",
    text: "A chaotic creeper boss encounter with TNT lob, volatile scatter, sulfur cubes, explosions, and constant pressure across the arena.",
  },
  {
    title: "The Copper Golem",
    tag: "Trial Guardian",
    image: "/images/boss-copper-golem.png",
    text: "A copper-themed boss with lightning, turrets, magnetic pull, blade swoops, overheating, and dangerous summons.",
  },
  {
    title: "Merchant King",
    tag: "Two Phase Boss",
    image: "/images/boss-merchant-king.png",
    text: "A villager boss that transforms into an evoker with life steal, false bargains, possession, and dangerous summons.",
  },
  {
    title: "Cryo Vault",
    tag: "Frozen Trial",
    image: "/images/boss-cryo-vault.png",
    text: "A frozen Breeze encounter with snowstorms, ice eruptions, trial summons, freezing effects, and movement-based mechanics.",
  },
];

const systems = [
  { title: "Solo or Group Runs", text: "Create a group, invite friends, and enter dungeons together. Bosses are designed to feel like small raid encounters instead of normal Minecraft mobs." },
  { title: "Multiple Phases", text: "Bosses change behavior as the fight continues, forcing players to adapt instead of simply standing still and attacking." },
  { title: "Exclusive Rewards", text: "Dungeon rewards are built to feel special, giving players a reason to keep progressing after normal survival gear." },
  { title: "Downed & Revive System", text: "Players can be downed during dungeon runs, creating tense moments where teammates need to recover the fight." },
  { title: "Spectator Support", text: "Players can watch dungeon runs, making boss fights feel like server-wide events when groups take on major encounters." },
  { title: "Long-Term Progression", text: "Dungeon content gives advanced players something meaningful to work toward once the normal survival loop is finished." },
];

export default function DungeonsPage() {
  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <PageHero eyebrow="Custom Dungeons" title="Boss fights built only for Zelmyra." text="Zelmyra dungeons are custom encounters with unique arenas, abilities, phases, group mechanics, and exclusive rewards." image="/images/dungeon-copper.png" />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">The Bosses</p>
          <h2 className="text-5xl font-black">Five exclusive dungeon encounters.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bosses.map((boss) => <ImageCard key={boss.title} {...boss} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">How It Works</p>
          <h2 className="text-5xl font-black">Dungeon systems that create real goals.</h2>
        </div>
        <InfoGrid items={systems} />
      </section>
      <CTA />
    </main>
  );
}
