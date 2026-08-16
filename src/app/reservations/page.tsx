import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ReservationForm from "./reservation-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Lorem ipsum dolor sit amet — request a table at Ember & Vine for the seasonal tasting menu.",
  alternates: { canonical: "/reservations" },
};

export default function ReservationsPage() {
  return (
    <>
      <PageHero eyebrow="Reservations" title="Book your table" seed="ember-vine-reservations" />
      <section className="bg-cream-light py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass-dark">
              Tasting menu · Seven courses
            </p>
            <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
              Request a reservation
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-ink/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam.
            </p>
            <div className="mt-10 border border-ink/10 bg-cream p-6 sm:p-10">
              <ReservationForm />
            </div>
          </div>

          <aside className="space-y-8">
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
            <div className="border-t-2 border-brass pt-6">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brass-dark">
                Good to know
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div className="border-t-2 border-brass pt-6">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brass-dark">
                By phone
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                Prefer to speak with us?{" "}
                <a href={SITE.phoneHref} className="font-medium text-brass-dark underline underline-offset-4 hover:text-brass">
                  {SITE.phone}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
