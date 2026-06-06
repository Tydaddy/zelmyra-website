import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
};

export default function PageHero({ eyebrow, title, text, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24">
      {image ? (
        <Image src={image} alt={title} fill priority className="object-cover opacity-45" />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#08050d]/80 to-[#08050d]" />
      <div className="noise absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-purple-300">{eyebrow}</p>
        <h1 className="mb-6 max-w-5xl text-6xl font-black tracking-tight md:text-8xl">{title}</h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">{text}</p>
      </div>
    </section>
  );
}
