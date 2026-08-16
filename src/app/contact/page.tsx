import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import InquiryForm from "./inquiry-form";
import { SITE } from "@/lib/site";
import { blurDataUrl, pic } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Lorem ipsum dolor sit amet — reach Ember & Vine by phone, email or private dining inquiry.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const map = pic("ember-vine-location", 1200, 700, "Map of the Lorem District, Example City");
  return (
    <>
      <PageHero eyebrow="Contact" title="Find us" seed="ember-vine-contact" />

      <section className="bg-cream-light py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3 lg:px-10">
          <div className="border-t-2 border-brass pt-6">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brass-dark">
              Visit
            </h2>
            <address className="mt-4 text-sm not-italic leading-relaxed text-ink/75">
              {SITE.address}
              <br />
              <a href={SITE.phoneHref} className="mt-2 inline-block text-brass-dark underline underline-offset-4 hover:text-brass">
                {SITE.phone}
              </a>
            </address>
          </div>
          <div className="border-t-2 border-brass pt-6">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brass-dark">
              Write
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">
              <a href={SITE.emailHref} className="text-brass-dark underline underline-offset-4 hover:text-brass">
                {SITE.email}
              </a>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="border-t-2 border-brass pt-6">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brass-dark">
              Hours
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/75">
              {SITE.hours.map((row) => (
                <li key={row.days}>
                  <span className="block text-ink/50">{row.days}</span>
                  {row.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass-dark">
              Private dining &amp; events
            </p>
            <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">Send an inquiry</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-ink/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-8 border border-ink/10 bg-cream-light p-6 sm:p-8">
              <InquiryForm />
            </div>
          </div>
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden border border-ink/10">
              <Image
                src={map.src}
                alt={map.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={blurDataUrl("#eae1cc")}
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-ink/50">
              Lorem District, Example City
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
