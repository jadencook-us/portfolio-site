"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
  active?: boolean;
};

type SiteNavProps = {
  items: NavItem[];
  brandLeadClassName?: string;
  brandAccentClassName?: string;
  headerClassName?: string;
  containerClassName?: string;
};

const defaultAccentClassName =
  "inline-block bg-[linear-gradient(90deg,#d7deff_0%,#9dacff_58%,#6f86ff_100%)] bg-clip-text pr-[1.06em] text-transparent";

export function SiteNav({
  items,
  brandLeadClassName = "text-heading",
  brandAccentClassName = defaultAccentClassName,
  headerClassName = "fixed left-0 right-0 top-0 z-50 bg-[color:var(--header-bg)] backdrop-blur-xl",
  containerClassName = "mx-auto flex w-full max-w-[1920px] items-center justify-between px-6 py-6 sm:px-12 sm:py-8",
}: SiteNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={headerClassName}>
      <nav className={containerClassName}>
        <Link
          className="relative z-[70] font-headline text-[1.2rem] font-black lowercase tracking-[-0.05em] text-heading italic sm:text-[1.45rem]"
          href="/"
          onClick={closeMenu}
        >
          <span className={brandLeadClassName}>jaden</span>
          <span className={brandAccentClassName}>cook.design</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          {items.map((item) => (
            <Link
              key={item.label}
              className={
                item.active
                  ? "border-b-2 border-primary pb-1 font-headline text-sm font-bold uppercase tracking-[-0.04em] text-primary"
                  : "font-headline text-sm font-bold uppercase tracking-[-0.04em] text-nav-muted transition-colors duration-300 hover:text-primary"
              }
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          aria-controls="mobile-nav"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-primary md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        <div
          className={`fixed inset-0 z-[60] bg-background/96 px-6 pb-8 pt-28 backdrop-blur-xl transition-all duration-300 md:hidden ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          id="mobile-nav"
        >
          <div className="mx-auto flex h-full w-full max-w-xl flex-col justify-between">
            <div className="grid gap-3">
              {items.map((item) => (
                <Link
                  key={item.label}
                  className={`rounded-2xl border px-5 py-4 font-headline text-2xl font-bold uppercase tracking-[-0.04em] transition-colors ${
                    item.active
                      ? "border-primary bg-primary/8 text-primary"
                      : "border-[color:var(--button-border)] bg-[color:var(--button-surface)] text-heading"
                  }`}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="pt-10 text-center font-label text-[10px] uppercase tracking-[0.2em] text-nav-muted">
              Jaden Cook Design
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}
