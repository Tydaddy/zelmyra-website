import Image from "next/image";

type ImageCardProps = {
  title: string;
  text: string;
  image: string;
  tag?: string;
};

export default function ImageCard({ title, text, image, tag }: ImageCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-purple-950/10">
      <div className="relative h-64 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        {tag ? <div className="absolute left-5 top-5 rounded-full bg-purple-600/90 px-4 py-2 text-xs font-black uppercase tracking-widest">{tag}</div> : null}
      </div>
      <div className="p-7">
        <h3 className="mb-3 text-2xl font-black">{title}</h3>
        <p className="leading-7 text-zinc-400">{text}</p>
      </div>
    </article>
  );
}
