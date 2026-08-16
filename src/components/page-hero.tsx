import { blurDataUrl, pic } from "@/lib/images";
import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  seed: string;
};

/** Dark page band used at the top of interior pages. */
export default function PageHero({ eyebrow, title, seed }: Props) {
  const image = pic(seed, 1920, 640, `${title} — ${eyebrow}`);
  return (
    <section className="relative flex min-h-[42svh] items-end overflow-hidden bg-forest-deep">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurDataUrl("#16231d")}
        className="object-cover opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/30"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-44 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-cream md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
