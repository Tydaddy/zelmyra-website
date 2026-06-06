import CTA from "@/components/CTA";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const items = [
  { title: "Join The Server", text: "Use the IP Zelmyra.net, read the spawn information, and join the Discord so you can ask questions and see announcements." },
  { title: "Claim Land", text: "Find a place to settle, claim your land, and protect your starter base before collecting too many valuable items." },
  { title: "Start Ranking Up", text: "Accept rank goals early so your normal survival progress counts toward long-term progression." },
  { title: "Vote Daily", text: "Voting gives keys and helps trigger vote parties, which rewards everyone online." },
  { title: "Visit Player Warps", text: "Explore shops, towns, farms, and community builds to see what other players are creating." },
  { title: "Work Toward Dungeons", text: "Once you have gear, money, and friends, start preparing for Zelmyra's custom dungeon bosses." },
];

export default function GettingStartedGuide() {
  return <main className="min-h-screen bg-[#08050d] text-white"><PageHero eyebrow="Guide" title="Getting Started" text="Your first steps on Zelmyra: join, claim land, rank up, vote, explore, and begin building toward long-term progression." image="/images/hero-spawn.png" /><section className="mx-auto max-w-7xl px-6 py-24"><InfoGrid items={items} /></section><CTA /></main>;
}
