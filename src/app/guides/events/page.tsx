import CTA from "@/components/CTA";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const items = [
  { title: "Fishing Frenzy", text: "Catch the biggest fish during the timer and compete for event leaderboard rewards." },
  { title: "Mining Mayhem", text: "Mine the target ores, climb the leaderboard, and try to hold first place." },
  { title: "Slaying Showdown", text: "Defeat mobs during the event and compete against the rest of the server." },
  { title: "Boss Bar Timer", text: "Watch the boss bar to see how much time is left during an active event." },
  { title: "Leaderboard Rewards", text: "Top players receive rewards, making events a great way to earn money and items." },
  { title: "Server Activity", text: "Events give players something to do together even when everyone is spread across the world." },
];

export default function EventsGuide() {
  return <main className="min-h-screen bg-[#08050d] text-white"><PageHero eyebrow="Guide" title="Events Guide" text="Learn how Zelmyra's server-wide events work and how to compete for rewards." image="/images/players-event.png" /><section className="mx-auto max-w-7xl px-6 py-24"><InfoGrid items={items} /></section><CTA /></main>;
}
