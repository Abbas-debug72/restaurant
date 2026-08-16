"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { NAV_LINKS, SITE } from "@/lib/site";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    // Sync the initial state from the current scroll position. Runs after
    // hydration so the server HTML (transparent header) never mismatches.
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-brass/20 bg-forest-deep/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="font-display text-2xl tracking-wide text-cream transition-colors hover:text-brass-light"
        >
          Ember <span className="italic text-brass">&amp;</span> Vine
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${
                isActive(link.href)
                  ? "text-brass"
                  : "text-cream/85 hover:text-brass-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservations"
            className="bg-brass px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest-deep transition-colors hover:bg-brass-light"
          >
            Book a Table
          </Link>
        </nav>

        <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center text-cream transition-colors hover:text-brass md:hidden"
            >
              <MenuIcon />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-forest-deep/60 backdrop-blur-sm" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col border-l border-brass/25 bg-forest-deep px-8 py-8 shadow-2xl focus:outline-none">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-display text-xl text-cream">
                  {SITE.name}
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="flex h-10 w-10 items-center justify-center text-cream transition-colors hover:text-brass"
                  >
                    <CloseIcon />
                  </button>
                </Dialog.Close>
              </div>
              <nav aria-label="Mobile" className="mt-10 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Dialog.Close key={link.href} asChild>
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`border-b border-brass/15 py-4 font-display text-3xl transition-colors ${
                        isActive(link.href)
                          ? "italic text-brass"
                          : "text-cream hover:text-brass-light"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </Dialog.Close>
                ))}
              </nav>
              <div className="mt-auto">
                <Dialog.Close asChild>
                  <Link
                    href="/reservations"
                    className="block bg-brass px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-forest-deep transition-colors hover:bg-brass-light"
                  >
                    Book a Table
                  </Link>
                </Dialog.Close>
                <p className="mt-6 text-xs leading-relaxed text-cream/60">
                  {SITE.address}
                  <br />
                  {SITE.phone}
                </p>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
