import Image from "next/image";
import Hero from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import ImageCard from "@/components/image-card";
import TestimonialCard from "@/components/testimonial-card";
import InfoStrip from "@/components/info-strip";
import CtaBand from "@/components/cta-band";
import ButtonLink from "@/components/button";
import JsonLd from "@/components/json-ld";
import { blurDataUrl, pic } from "@/lib/images";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  image: "https://picsum.photos/seed/ember-vine-hero/1200/630",
  url: SITE.url,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "24 Lorem Street",
    addressLocality: "Example City",
    addressCountry: "US",
  },
  servesCuisine: "Seasonal Tasting",
  priceRange: "$$$$",
  openingHours: ["Tu-Th 17:00-22:00", "Fr-Sa 17:00-23:00"],
};

export default function HomePage() {
  const intro = pic("ember-vine-intro", 1200, 900, "Dining room detail — linen and candlelight");
  const courseOne = pic("ember-vine-course-1", 800, 600, "Amuse-bouche plated on ceramic");
  const courseTwo = pic("ember-vine-course-2", 800, 600, "Main course plated on dark stoneware");
  const courseThree = pic("ember-vine-course-3", 800, 600, "Dessert plated with gold leaf");

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Welcome"
              title={
                <>
                  A table built around{" "}
                  <span className="italic text-brass-dark">the season</span>.
                </>
              }
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
            <div className="mt-9">
              <ButtonLink href="/about" variant="outline-light">
                Our Story
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="absolute -left-4 -top-4 h-full w-full border border-brass/50" />
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={intro.src}
                alt={intro.alt}
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

      {/* Featured courses */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="From the kitchen"
              title="Tonight's tasting"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
            <ButtonLink href="/menu" variant="outline-light" className="shrink-0">
              View the Full Menu
            </ButtonLink>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <ImageCard image={courseOne} label="Course 01" caption="Amuse-Bouche" />
            <ImageCard image={courseTwo} label="Course 04" caption="Main Course" />
            <ImageCard image={courseThree} label="Course 06" caption="Dessert" />
          </div>
        </div>
      </section>

      {/* Chef quote */}
      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
            The philosophy
          </p>
          <blockquote className="mt-8 font-display text-3xl italic leading-snug md:text-4xl">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </blockquote>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/60">
            — Executive Chef, Ember &amp; Vine
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            align="center"
            eyebrow="Guests"
            title="Words from the table"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              attribution="Dining Guest"
            />
            <TestimonialCard
              quote="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
              attribution="Anniversary Guest"
            />
            <TestimonialCard
              quote="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              attribution="Regular Guest"
            />
          </div>
        </div>
      </section>

      <InfoStrip />
      <CtaBand title="Reserve your table tonight." />
    </>
  );
}
