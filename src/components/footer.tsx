import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import NewsletterForm from "@/components/newsletter-form";

export default function Footer() {
  return (
    <footer className="border-t border-brass/20 bg-forest-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl">
              Ember <span className="italic text-brass">&amp;</span> Vine
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-brass-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
              Hours
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              {SITE.hours.map((row) => (
                <li key={row.days}>
                  <span className="block text-cream/55">{row.days}</span>
                  {row.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
              The List
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-brass/15 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>{SITE.address}</p>
        </div>
      </div>
    </footer>
  );
}
