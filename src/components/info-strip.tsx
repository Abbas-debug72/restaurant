import { SITE } from "@/lib/site";

const items = [
  {
    label: "Hours",
    body: (
      <ul className="space-y-1.5">
        {SITE.hours.map((row) => (
          <li key={row.days} className="flex flex-col">
            <span className="text-cream/55">{row.days}</span>
            <span>{row.time}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    label: "Find Us",
    body: (
      <address className="not-italic">
        {SITE.address}
        <br />
        <a href={SITE.phoneHref} className="mt-1 inline-block text-brass-light hover:underline">
          {SITE.phone}
        </a>
        <br />
        <a href={SITE.emailHref} className="mt-1 inline-block text-brass-light hover:underline">
          {SITE.email}
        </a>
      </address>
    ),
  },
  {
    label: "Private Dining",
    body: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    ),
  },
  {
    label: "Reservations",
    body: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
    ),
  },
];

export default function InfoStrip() {
  return (
    <section aria-label="Restaurant information" className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {items.map((item) => (
          <div key={item.label} className="border-t border-brass/25 pt-6">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brass">
              {item.label}
            </h2>
            <div className="mt-4 text-sm leading-relaxed text-cream/80">{item.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
