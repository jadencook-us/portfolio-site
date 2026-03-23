import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { GalleryCursor } from "@/components/gallery-cursor";

const tags = ["Fintech", "UX/UI Design"];
const solutionPoints = [
  "Simplified navigation structure",
  "Improved visual hierarchy",
  "Modernized interface system",
];

export default function TributaxPage() {
  return (
    <div
      style={
        {
          "--background": "#eef3fb",
          "--foreground": "#1c2431",
          "--primary": "#3c7dff",
          "--primary-strong": "#1e5ee6",
          "--surface-container-low": "#dde6f3",
          "--surface-container": "#f7fbff",
          "--surface-container-high": "#eaf1f9",
          "--surface-container-highest": "#d5dfec",
          "--surface-outline": "#b5c1d1",
          "--text-muted": "#5d6876",
          "--heading": "#101826",
          "--nav-muted": "#6d7786",
          "--header-bg": "rgba(238, 243, 251, 0.78)",
          "--button-text": "#ffffff",
          "--button-surface": "rgba(247, 251, 255, 0.92)",
          "--button-border": "rgba(16, 24, 38, 0.08)",
          "--button-icon": "#1c2431",
          "--section-shadow": "0 32px 60px -24px rgba(22, 58, 130, 0.12)",
        } as CSSProperties
      }
      className="dark:[--background:#171b22] dark:[--foreground:#e8edf5] dark:[--primary:#72a6ff] dark:[--primary-strong:#a7c6ff] dark:[--surface-container-low:#1e232c] dark:[--surface-container:#252b35] dark:[--surface-container-high:#2d3440] dark:[--surface-container-highest:#384253] dark:[--surface-outline:#475264] dark:[--text-muted:#afbac8] dark:[--heading:#f5f8fd] dark:[--nav-muted:#919cab] dark:[--header-bg:rgba(23,27,34,0.72)] dark:[--button-text:#101826] dark:[--button-surface:rgba(37,43,53,0.92)] dark:[--button-border:rgba(114,166,255,0.18)] dark:[--button-icon:#e8edf5] dark:[--section-shadow:0_40px_40px_-15px_rgba(114,166,255,0.08)]"
    >
      <GalleryCursor />
      <nav className="fixed left-0 right-0 top-0 z-50 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-8 py-6">
          <Link
            className="font-headline text-[1.45rem] font-black lowercase tracking-[-0.05em] text-heading italic"
            href="/"
          >
            <span className="text-white">jaden</span>
            <span className="inline-block bg-[linear-gradient(90deg,#d9e8ff_0%,#85adff_58%,#4e7dff_100%)] bg-clip-text pr-[1.06em] text-transparent">
              cook.design
            </span>
          </Link>
          <div className="hidden gap-12 md:flex">
            <Link
              className="font-headline text-sm font-bold uppercase tracking-[-0.04em] text-nav-muted transition-colors hover:text-heading"
              href="/"
            >
              Home
            </Link>
            <Link
              className="border-b-2 border-primary pb-1 font-headline text-sm font-bold uppercase tracking-[-0.04em] text-primary"
              href="/#work"
            >
              Projects
            </Link>
            <Link
              className="font-headline text-sm font-bold uppercase tracking-[-0.04em] text-nav-muted transition-colors hover:text-heading"
              href="/#contact"
            >
              Contact
            </Link>
          </div>
          <button
            aria-label="Open navigation"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-primary md:hidden"
            type="button"
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </button>
        </div>
      </nav>

      <main className="bg-background text-foreground">
        <section className="relative flex min-h-[700px] items-end overflow-hidden pt-32 md:h-[921px]">
          <div className="absolute inset-0">
            <Image
              alt="Tributax App Interface Close-up"
              className="h-full w-full object-cover brightness-50"
              height={1600}
              priority
              src="/group-11.png"
              width={2400}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b142314_0%,#0b14232e_20%,var(--background)_100%)] dark:bg-[linear-gradient(180deg,#03060c2e_0%,#03060c52_20%,var(--background)_100%)]" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1920px] px-8 pb-20">
            <span className="mb-4 block font-label text-sm uppercase tracking-[0.2em] text-primary">
              Redesign / 2024
            </span>
            <h1 className="font-headline text-[12vw] font-black leading-[0.85] tracking-[-0.06em] text-heading md:text-[10rem]">
              TRIBUTAX
            </h1>
            <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <p className="font-headline text-2xl font-medium tracking-tight text-on-surface-variant md:text-4xl">
                App Redesign for the Guatemalan Tax Ecosystem
              </p>
              <div className="flex gap-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm bg-surface-container-highest px-4 py-2 font-label text-[0.65rem] uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1920px] px-8 pb-14 pt-32">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="font-headline text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
                Pioneering digital tax solutions in{" "}
                <span className="italic text-primary">Central America.</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="mb-12 font-body text-xl leading-relaxed text-on-surface-variant md:text-2xl">
                Tributax is the first tax app tailored to Guatemala&apos;s
                unique tax system. Rooted in a collaborative effort between the
                CEO, the lead frontend developer, and myself, this project aims
                to transform the user experience and visual allure of
                Tributax. Our collective vision is to not only modernize the
                app&apos;s appearance but also to streamline tax filing
                processes, ensuring seamless navigation for users across
                Guatemala.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1920px] px-8 pb-32 pt-14">
          <div className="grid grid-cols-1 items-start gap-24 md:grid-cols-2">
            <div className="flex flex-col gap-12">
              <div className="rounded-xl border border-primary/15 border-l-4 bg-surface-container p-12 shadow-[var(--section-shadow)]">
                <h3 className="mb-6 font-label text-xs uppercase tracking-widest text-primary">
                  The Challenge
                </h3>
                <h4 className="mb-6 font-headline text-3xl font-bold">
                  A Fragmented App Experience
                </h4>
                <p className="leading-relaxed text-on-surface-variant">
                  The previous iteration of the app faced several usability and
                  visual challenges that impacted the overall experience. The
                  logo felt outdated, and the color scheme lacked cohesion,
                  resulting in an unpolished interface. Navigation was not
                  intuitive, making it difficult for users to complete tasks,
                  while the placement of the home icon caused confusion.
                </p>
              </div>
              <Image
                alt="Tributax redesign screenshot"
                className="h-[calc(var(--spacing)*90)] w-full rounded-xl border border-primary/10 object-cover grayscale transition-all duration-700 hover:grayscale-0"
                height={800}
                src="/newgroup12.png"
                width={1200}
              />
            </div>
            <div className="flex flex-col gap-12 md:pt-32">
              <div className="space-y-6">
                <h3 className="font-label text-xs uppercase tracking-widest text-primary">
                  The Solution
                </h3>
                <h4 className="font-headline text-5xl font-black leading-[0.9] tracking-tight">
                  Clarity Through Design
                </h4>
                <p className="text-xl leading-relaxed text-on-surface-variant">
                  The redesign focused on improving clarity and usability
                  through a cleaner, more modern interface. The sidebar was
                  simplified, and the homepage layout was refined to prioritize
                  actionable content. Illustrations were replaced with a
                  minimalist approach to enhance hierarchy, while the
                  navigation bar and icons were updated for better
                  intuitiveness. A softer color palette was also introduced to
                  improve readability and create a more cohesive visual
                  experience.
                </p>
                <ul className="mt-8 space-y-4">
                  {solutionPoints.map((point) => (
                    <li
                      key={point}
                      className="font-label flex items-center gap-4 text-xs uppercase tracking-wider text-primary"
                    >
                      <span className="text-sm">●</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1920px] px-8 py-20">
          <div className="overflow-hidden rounded-lg border border-primary/10 bg-surface-container shadow-[var(--section-shadow)]">
            <Image
              alt="Tributax collage"
              className="h-auto w-full object-cover"
              height={1600}
              src="/collage.png"
              width={2400}
            />
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-8 py-40 text-center">
          <div className="mb-8 text-5xl text-primary">“</div>
          <blockquote className="font-headline text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            It finally feels like a real product, polished, intuitive, and
            something users can actually trust and navigate with confidence.
          </blockquote>
          <p className="mt-12 font-label text-sm uppercase tracking-widest text-on-surface-variant">
            Luis Suarez, CTO @ Tributax
          </p>
        </section>

      </main>

      <footer className="w-full bg-surface-container-low px-12 py-20">
        <div className="mx-auto flex w-full max-w-[1920px] justify-center">
          <p className="text-center font-label text-[0.75rem] uppercase tracking-[0.1em] text-on-surface-variant/60">
            © 2026 designed and developed by jaden cook
          </p>
        </div>
      </footer>
    </div>
  );
}
