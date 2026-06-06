import CTA from "@/components/CTA";
import GuideNav from "@/components/GuideNav";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const items = [
  { title: "Open The Dungeon Menu", text: "Use the dungeon menu to view available bosses, cooldowns, and readiness before entering a fight." },
  { title: "Create A Group", text: "Invite friends before entering if you want to run a boss as a team instead of solo." },
  { title: "Prepare Gear", text: "Bring strong armor, weapons, food, potions, and anything else needed for a longer custom encounter." },
  { title: "Learn Mechanics", text: "Each boss has different abilities, phases, and arenas. Winning requires movement and awareness." },
  { title: "Revive Teammates", text: "Downed players can create clutch moments where the team has to recover instead of instantly losing." },
  { title: "Respect Cooldowns", text: "Dungeon cooldowns keep boss rewards meaningful and make wins feel more important." },
];

export default function DungeonGuide() {
  return <main className="min-h-screen bg-[#08050d] text-white"><PageHero eyebrow="Guide" title="Dungeons Guide" text="Learn how to prepare for Zelmyra's custom dungeon bosses, group runs, phases, rewards, and cooldowns." image="/images/dungeon-copper.png" /><section className="mx-auto max-w-7xl px-6 py-24"><InfoGrid items={items} /></section><GuideNav current="/guides/dungeons" />
      <CTA /></main>;
}
