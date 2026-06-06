type SectionCardProps = {
  title: string;
  text: string;
  eyebrow?: string;
};

export default function SectionCard({ title, text, eyebrow }: SectionCardProps) {
  return (
    <div className="glow-card rounded-3xl border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-purple-950/10">
      <div className="relative z-10">
        {eyebrow ? (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-purple-300">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="mb-4 text-2xl font-black">{title}</h3>
        <p className="leading-7 text-zinc-400">{text}</p>
      </div>
    </div>
  );
}
