"use client";

import * as Accordion from "@radix-ui/react-accordion";

const courses = [
  {
    number: "01",
    name: "Amuse-Bouche",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    components: ["Lorem", "Ipsum", "Dolor"],
  },
  {
    number: "02",
    name: "First Course",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    components: ["Duis aute", "Irure", "Reprehenderit"],
  },
  {
    number: "03",
    name: "Second Course",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    components: ["Excepteur", "Sint occaecat", "Cupidatat"],
  },
  {
    number: "04",
    name: "Main Course",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    components: ["Sed ut", "Perspiciatis", "Unde omnis"],
  },
  {
    number: "05",
    name: "Cheese",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    components: ["Eos qui", "Ratione", "Voluptatem"],
  },
  {
    number: "06",
    name: "Dessert",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    components: ["Sed quia", "Non numquam", "Eius modi"],
  },
  {
    number: "07",
    name: "Petit Fours",
    description:
      "Tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.",
    components: ["Quis autem", "Vel eum", "Iure reprehenderit"],
  },
];

function Chevron() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-data-[state=open]:rotate-180"
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MenuAccordion() {
  return (
    <Accordion.Root type="single" collapsible defaultValue="course-04" className="divide-y divide-ink/10 border-y border-ink/10">
      {courses.map((course) => (
        <Accordion.Item key={course.number} value={`course-${course.number}`}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass">
              <span className="font-display text-sm italic text-brass-dark">{course.number}</span>
              <span className="flex-1 font-display text-2xl text-ink transition-colors group-hover:text-brass-dark md:text-3xl">
                {course.name}
              </span>
              <span className="text-ink/40">
                <Chevron />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]">
            <div className="pb-8 pl-0 md:pl-[4.5rem]">
              <p className="max-w-2xl leading-relaxed text-ink/70">{course.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {course.components.map((c) => (
                  <li
                    key={c}
                    className="border border-brass/40 px-3 py-1 text-xs uppercase tracking-[0.14em] text-brass-dark"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
