export const SITE = {
  name: "Ember & Vine",
  url: "https://restaurant.gat6.vercel.app",
  tagline: "Seasonal · Wood-Fired · Tasting",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ember & Vine is a seasonal, wood-fired tasting experience in the heart of the city.",
  address: "24 Lorem Street, Ipsom District, Example City",
  phone: "+1 (555) 012-3456",
  phoneHref: "tel:+15550123456",
  email: "hello@ember-vine.example.com",
  emailHref: "mailto:hello@ember-vine.example.com",
  hours: [
    { days: "Tuesday – Thursday", time: "5:00 PM – 10:00 PM" },
    { days: "Friday – Saturday", time: "5:00 PM – 11:00 PM" },
    { days: "Sunday – Monday", time: "Closed" },
  ],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
] as const;
