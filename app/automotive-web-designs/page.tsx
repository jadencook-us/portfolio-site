"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import Image from "next/image";
import { GalleryCursor } from "@/components/gallery-cursor";
import { SiteNav } from "@/components/site-nav";

const goals = [
  {
    label: "01. DESIGN GOAL",
    title: "Enhancing Aesthetics",
    description:
      "Develop a clean, professional design using high-quality imagery and a cohesive color palette to make the pages visually compelling.",
  },
  {
    label: "02. DESIGN GOAL",
    title: "Highlighting Key Features",
    description:
      "Showcase each car model's unique features, specifications, and pricing details in a way that is visually engaging and easy to compare.",
  },
  {
    label: "03. DESIGN GOAL",
    title: "Aligning with Brand Identity",
    description:
      "Ensure the designs reflect the dealership's branding, including logo placement, colors, and typography.",
  },
];

export default function AutomotiveWebDesignsPage() {
  const prefersReducedMotion = useReducedMotion();

  const sectionReveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 34 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.16 },
        transition: {
          duration: 1.7,
          ease: [0.23, 1, 0.32, 1] as const,
        },
      };

  const itemReveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 26 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.14 },
        transition: {
          duration: 1.4,
          ease: [0.23, 1, 0.32, 1] as const,
        },
      };

  return (
    <div
      style={
        {
          "--background": "#111316",
          "--foreground": "#eceef2",
          "--primary": "#c7d0df",
          "--primary-strong": "#eef2f9",
          "--surface-container-low": "#181b21",
          "--surface-container": "#1d2128",
          "--surface-container-high": "#252a33",
          "--surface-container-highest": "#2c333d",
          "--surface-outline": "#3d4551",
          "--text-muted": "#a8b0bb",
          "--heading": "#ffffff",
          "--nav-muted": "#8c95a3",
          "--header-bg": "rgba(17, 19, 22, 0.72)",
          "--button-text": "#101215",
          "--button-surface": "rgba(29, 33, 40, 0.92)",
          "--button-border": "rgba(255, 255, 255, 0.08)",
          "--button-icon": "#eceef2",
          "--section-shadow": "0 28px 60px -28px rgba(0, 0, 0, 0.35)",
        } as CSSProperties
      }
    >
      <GalleryCursor />
      <SiteNav
        containerClassName="mx-auto flex w-full max-w-[1920px] items-center justify-between px-6 py-6 sm:px-8 sm:py-6"
        items={[
          { label: "HOME", href: "/" },
          { label: "PROJECTS", href: "/#work", active: true },
          { label: "CONTACT", href: "/#contact" },
        ]}
      />

      <main className="bg-background pt-24 text-foreground sm:pt-32">
        <motion.section
          {...sectionReveal}
          className="mb-24 px-6 sm:mb-40 sm:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col gap-10 sm:mb-24 sm:gap-16 md:flex-row md:items-end">
              <motion.h1
                {...itemReveal}
                className="font-headline text-[clamp(3.2rem,14vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.04em] text-heading"
              >
                Automotive
                <br />
                <span className="text-[#b8c2d4]">Web Designs</span>
              </motion.h1>
              <motion.div {...itemReveal} className="pb-4 md:max-w-md">
                <p className="font-body text-base leading-relaxed text-on-surface-variant sm:text-lg">
                  These projects involved designing modern, user-friendly
                  homepages for car dealership websites, improving the
                  organization of vehicle information and making it easier for
                  users to explore models, view specifications, and access key
                  features, while ensuring a seamless experience across all
                  devices.
                </p>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 gap-8 border-t border-outline-variant/20 pt-10 sm:pt-16 md:grid-cols-3">
              {goals.map((goal) => (
                <motion.div {...itemReveal} key={goal.title} className="group">
                  <span className="mb-4 block font-label text-[10px] tracking-[0.2em] text-[#9aa4b7]">
                    {goal.label}
                  </span>
                  <h3 className="mb-4 font-headline text-2xl font-bold">
                    {goal.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-on-surface-variant opacity-60 transition-opacity group-hover:opacity-100">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          className="relative mb-24 overflow-hidden sm:mb-48"
        >
          <div className="flex min-h-[auto] flex-col items-stretch md:min-h-[819px] md:flex-row">
            <motion.div {...itemReveal} className="group relative w-full md:w-3/5">
              <Image
                alt="Mitsubishi homepage design preview"
                className="h-[22rem] w-full object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:grayscale-0 sm:h-[28rem] md:h-full"
                height={1600}
                src="/mitsubishi.png"
                width={2200}
              />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-background to-transparent md:block" />
            </motion.div>
            <motion.div
              {...itemReveal}
              className="relative z-10 flex w-full flex-col justify-center bg-surface-container px-6 py-10 sm:px-12 sm:py-16 md:w-2/5 md:py-0"
            >
              <span className="mb-6 font-label text-[10px] tracking-[0.2em] text-[#d94343]">
                HOMEPAGE / 001
              </span>
              <h2 className="mb-6 font-headline text-4xl font-black uppercase leading-none tracking-tighter sm:mb-8 sm:text-5xl md:text-7xl">
                Mitsubishi
              </h2>
              <p className="mb-8 max-w-sm text-base leading-relaxed text-on-surface-variant sm:mb-12 sm:text-lg">
                A modern, user-friendly homepage focused on clarity and
                accessibility, making it easy for users to explore models,
                compare features, and navigate key information efficiently.
              </p>
              <a
                className="inline-flex w-full items-center justify-center rounded-md bg-[linear-gradient(135deg,#c72424_0%,#ff5a4d_100%)] px-8 py-4 text-center font-label text-xs font-bold uppercase tracking-widest !text-[#171717] shadow-lg shadow-[#c72424]/20 sm:w-fit"
                href="https://www.figma.com/design/JasuOpjF8eeAijEUz0Nb5Q/Mitsubishi-Homepage?node-id=0-1&t=sHEDlkQNFr72p5Wq-0"
                rel="noreferrer"
                target="_blank"
              >
                VIEW ON FIGMA
                <span className="ml-3 text-sm transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>
          <div className="pointer-events-none absolute bottom-12 left-12 hidden select-none font-headline text-9xl font-black text-transparent opacity-10 [-webkit-text-stroke:1px_var(--surface-outline)] md:block">
            AERODYNAMICS
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          className="mb-24 bg-surface-container-low px-6 py-16 sm:mb-48 sm:px-12 sm:py-32"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 sm:gap-24 md:flex-row-reverse">
            <motion.div {...itemReveal} className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-high shadow-2xl">
                <Image
                  alt="Chevrolet homepage design preview"
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-500 hover:opacity-100"
                  height={1600}
                  src="/chevrolet.jpg"
                  width={1300}
                />
              </div>
            </motion.div>
            <motion.div {...itemReveal} className="w-full md:w-1/2">
              <span className="mb-4 block font-label text-[10px] tracking-[0.2em] text-[#ffd34d] sm:mb-6">
                HOMEPAGE / 002
              </span>
              <h2 className="mb-6 font-headline text-4xl font-black uppercase leading-none tracking-tighter sm:mb-8 sm:text-5xl md:text-7xl">
                Chevrolet
              </h2>
              <p className="mb-8 text-base leading-relaxed text-on-surface-variant sm:mb-12 sm:text-lg">
                A bold and structured homepage designed to highlight a diverse
                vehicle lineup, with clear navigation and strong visual
                hierarchy to guide users through key models and features.
              </p>
              <a
                className="inline-flex w-full items-center justify-center rounded-md bg-[linear-gradient(135deg,#ffcc29_0%,#ffe27d_100%)] px-10 py-5 text-center font-label text-xs font-bold uppercase tracking-widest !text-[#171717] shadow-lg shadow-[#ffcc29]/20 sm:w-fit"
                href="https://www.figma.com/design/LviMEPZ5h4zXJi474MfXsc/Chevy-Homepage-Demo?node-id=0-1&p=f&t=iulMA6qk7s3Rrxn1-0"
                rel="noreferrer"
                target="_blank"
              >
                VIEW ON FIGMA
                <span className="ml-3 text-sm transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          className="relative mb-28 overflow-hidden sm:mb-64"
        >
          <div className="flex min-h-[auto] flex-col items-stretch md:min-h-[819px] md:flex-row">
            <motion.div {...itemReveal} className="group relative w-full md:w-3/5">
              <Image
                alt="Lexus homepage design preview"
                className="h-[22rem] w-full object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:grayscale-0 sm:h-[28rem] md:h-full"
                height={1600}
                src="/lexus1.png"
                width={2200}
              />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-background to-transparent md:block" />
            </motion.div>
            <motion.div
              {...itemReveal}
              className="relative z-10 flex w-full flex-col justify-center bg-surface-container px-6 py-10 sm:px-12 sm:py-16 md:w-2/5 md:py-0"
            >
              <span className="mb-6 font-label text-[10px] tracking-[0.2em] text-[#5c9cff]">
                HOMEPAGE / 003
              </span>
              <h2 className="mb-6 font-headline text-4xl font-black uppercase leading-none tracking-tighter sm:mb-8 sm:text-5xl md:text-7xl">
                Lexus
              </h2>
              <p className="mb-8 max-w-sm text-base leading-relaxed text-on-surface-variant sm:mb-12 sm:text-lg">
                A refined and minimalist homepage experience designed to
                reflect Lexus&apos; premium identity, emphasizing elegance,
                clarity, and a seamless browsing experience.
              </p>
              <a
                className="inline-flex w-full items-center justify-center rounded-md bg-[linear-gradient(135deg,#2d6dff_0%,#73a7ff_100%)] px-8 py-4 text-center font-label text-xs font-bold uppercase tracking-widest !text-[#171717] shadow-lg shadow-[#2d6dff]/20 sm:w-fit"
                href="https://www.figma.com/design/74K17tPER55u5fhOYM3T2z/Lexus-Website-Design?node-id=0-1&t=uIcFeORUx0wagG8h-1"
                rel="noreferrer"
                target="_blank"
              >
                VIEW ON FIGMA
                <span className="ml-3 text-sm transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>
          <div className="pointer-events-none absolute bottom-12 left-12 hidden select-none font-headline text-9xl font-black text-transparent opacity-10 [-webkit-text-stroke:1px_var(--surface-outline)] md:block">
            TELEMETRY
          </div>
        </motion.section>
      </main>

      <footer className="w-full bg-surface-container-low px-6 py-14 sm:px-12 sm:py-20">
        <div className="mx-auto flex w-full max-w-[1920px] justify-center">
          <p className="text-center font-label text-[0.75rem] uppercase tracking-[0.1em] text-on-surface-variant/60">
            © 2026 designed and developed by jaden cook
          </p>
        </div>
      </footer>
    </div>
  );
}
