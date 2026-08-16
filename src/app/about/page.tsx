import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { blurDataUrl, pic } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lorem ipsum dolor sit amet — the story, chef and philosophy behind Ember & Vine.",
  alternates: { canonical: "/about" },
};

const philosophy = [
  {
    title: "Fire",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Season",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Table",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const press = ["Lorem Review", "The Ipsom Gazette", "Dolor Table", "Amet Weekly"];

export default function AboutPage() {
  const kitchen = pic("ember-vine-kitchen", 1200, 900, "The open kitchen at Ember & Vine");
  const chef = pic("ember-vine-chef", 900, 1100, "The executive chef at the pass");

  return (
    <>
      <PageHero eyebrow="About" title="Our story" seed="ember-vine-about" />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Since 2014"
              title="Built around a single fire"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <p className="mt-6 max-w-xl leading-relaxed text-ink/70">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div aria-hidden="true" className="absolute -right-4 -top-4 h-full w-full border border-brass/50" />
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={kitchen.src}
                alt={kitchen.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={blurDataUrl("#1e322a")}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-5 lg:px-10">
          <div className="relative lg:col-span-2">
            <div aria-hidden="true" className="absolute -left-4 -top-4 h-full w-full border border-brass/40" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={chef.src}
                alt={chef.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
                blurDataURL={blurDataUrl("#0e1713")}
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
              The chef
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight md:text-5xl">
              Executive Chef
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-cream/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Lorem Guide — Listed 2025", "Best New Table — Ipsom Times", "Ipsom List — Rising Star", "Dolor Plate Award 2024"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-cream/80">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-brass" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            align="center"
            eyebrow="Philosophy"
            title="How we cook"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {philosophy.map((item) => (
              <div key={item.title} className="border-t-2 border-brass pt-6">
                <h3 className="font-display text-2xl italic text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="bg-cream-light border-y border-ink/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">
            As seen in
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {press.map((name) => (
              <span key={name} className="font-display text-xl italic text-ink/55">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Come and taste the season." />
    </>
  );
}
