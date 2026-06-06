type Item = { title: string; text: string };

export default function InfoGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
          <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
          <p className="leading-7 text-zinc-400">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
