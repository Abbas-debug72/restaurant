import Image from "next/image";
import { blurDataUrl, pic } from "@/lib/images";
import ButtonLink from "@/components/button";
import { SITE } from "@/lib/site";

export default function Hero() {
  const hero = pic("ember-vine-hero", 1920, 1080, "Ember & Vine dining room at dusk");
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-forest-deep">
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurDataUrl("#0e1713")}
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/45 to-forest-deep/20"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
          {SITE.tagline}
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-cream md:text-7xl">
          A seasonal table, <span className="italic text-brass">wood-fired</span> from dusk
          till close.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/reservations">Book a Table</ButtonLink>
          <ButtonLink href="/menu" variant="outline">
            Explore the Menu
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
