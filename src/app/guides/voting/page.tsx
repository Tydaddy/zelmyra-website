import CTA from "@/components/CTA";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const items = [
  { title: "Vote Daily", text: "Voting supports the server and gives you rewards without needing to spend money." },
  { title: "Earn Keys", text: "Vote rewards can include keys and useful items that help your progression." },
  { title: "Vote Party", text: "Every vote helps push the server closer to a vote party reward for online players." },
  { title: "Support Growth", text: "Voting helps new players discover Zelmyra on server lists." },
  { title: "Free Progression", text: "Voting is one of the easiest ways to earn rewards while supporting the community." },
  { title: "Bring Friends Online", text: "Vote parties are better when more players are online to receive rewards." },
];

export default function VotingGuide() {
  return <main className="min-h-screen bg-[#08050d] text-white"><PageHero eyebrow="Guide" title="Voting Guide" text="Vote daily, earn rewards, trigger vote parties, and help more players discover Zelmyra." image="/images/event-fishing-frenzy.png" /><section className="mx-auto max-w-7xl px-6 py-24"><InfoGrid items={items} /></section><CTA /></main>;
}
