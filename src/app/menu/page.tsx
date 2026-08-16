import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import MenuAccordion from "@/components/menu-accordion";
import MenuItem from "@/components/menu-item";
import CtaBand from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Lorem ipsum dolor sit amet — the seven-course tasting menu, a la carte and wine list at Ember & Vine.",
  alternates: { canonical: "/menu" },
};

const aLaCarte = [
  { name: "Wood-Fired Steak", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", price: "$42" },
  { name: "Market Fish", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.", price: "$38" },
  { name: "Garden Risotto", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.", price: "$26" },
  { name: "Roast Chicken", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.", price: "$32" },
  { name: "Charred Greens", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.", price: "$18" },
  { name: "Seasonal Tart", description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.", price: "$14" },
];

const wineGroups = [
  {
    title: "By the Glass",
    items: [
      { name: "Sauvignon Blanc", note: "Lorem region", price: "$14" },
      { name: "Chardonnay", note: "Ipsum valley", price: "$16" },
      { name: "Pinot Noir", note: "Dolor hills", price: "$18" },
    ],
  },
  {
    title: "White",
    items: [
      { name: "Chablis", note: "Amet — 2023", price: "$68" },
      { name: "Riesling", note: "Consectetur — 2022", price: "$58" },
      { name: "Vermentino", note: "Adipiscing — 2024", price: "$44" },
    ],
  },
  {
    title: "Red",
    items: [
      { name: "Barolo", note: "Elit — 2019", price: "$120" },
      { name: "Syrah", note: "Sed do — 2020", price: "$74" },
      { name: "Malbec", note: "Eiusmod — 2021", price: "$52" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <PageHero eyebrow="The Menu" title="Seasonal tasting & cellar" seed="ember-vine-menu" />

      {/* Tasting menu */}
      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Tasting menu"
            title="Seven courses, one fire"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Select a course to read more."
          />
          <div className="mt-12">
            <MenuAccordion />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6 text-sm text-ink/70">
            <p>
              Tasting menu <span className="font-medium text-ink">$185</span> per guest
            </p>
            <p>
              Wine pairing <span className="font-medium text-ink">$95</span> per guest
            </p>
          </div>
        </div>
      </section>

      {/* A la carte */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="A la carte"
            title="From the pass"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <div className="mt-12 grid gap-x-14 md:grid-cols-2">
            {aLaCarte.map((item) => (
              <MenuItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Wine list */}
      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            tone="light"
            eyebrow="Cellar"
            title="The wine list"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {wineGroups.map((group) => (
              <div key={group.title} className="border-t border-brass/30 pt-6">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brass">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-5">
                  {group.items.map((wine) => (
                    <li key={wine.name} className="flex items-baseline gap-3">
                      <div>
                        <p className="font-display text-lg text-cream">{wine.name}</p>
                        <p className="text-sm text-cream/55">{wine.note}</p>
                      </div>
                      <span aria-hidden="true" className="flex-1 border-b border-dotted border-cream/25" />
                      <span className="text-sm text-brass-light">{wine.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let us cook for you." />
    </>
  );
}
