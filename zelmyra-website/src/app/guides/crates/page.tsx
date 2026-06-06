import CTA from "@/components/CTA";
import GuideNav from "@/components/GuideNav";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const items = [
  { title: "Win Events", text: "Server events like Fishing Frenzy, Mining Mayhem, and Slaying Showdown can reward active players with keys and prizes." },
  { title: "Rank Up", text: "Free rank progression can unlock crate keys as you complete gameplay quests and move through the rank ladder." },
  { title: "Buy With In-Game Money", text: "Visit /warp crates to preview rewards and buy certain keys with in-game money earned through the economy." },
  { title: "Keyall Events", text: "When the player count gets large, staff may run keyall events so online players can receive keys together." },
  { title: "Vote Keys", text: "Voting daily is one of the easiest ways to earn keys while supporting Zelmyra on Minecraft server lists." },
  { title: "Rare Rewards", text: "Legendary, Mythic, and Zelmyra keys are built around stronger rewards, progression, collectibles, and long-term server goals." },
];

export default function CratesGuide() {
  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <PageHero eyebrow="Guide" title="Crates Guide" text="Learn how to earn crate keys through events, rank progression, voting, in-game money, and keyall events." image="/images/hero-dungeon.png" />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <InfoGrid items={items} />
      </section>
      <GuideNav current="/guides/crates" />
      <CTA />
    </main>
  );
}
