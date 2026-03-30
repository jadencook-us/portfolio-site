"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { GalleryCursor } from "@/components/gallery-cursor";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";

const featuredProjects = [
  {
    title: "Nurture Nest",
    category: "UI/UX",
    year: "2026",
    description:
      "Supporting recovery through simple daily check-ins, structured routines, and easy access to help.",
    linkLabel: "EXPLORE PROCESS",
    href: "/nurture-nest",
    image: "/nurturenest.png",
    alt: "Nurturenest project preview",
    reverse: false,
    imageClassName:
      "h-[320px] w-full max-w-[42rem] object-contain mx-auto sm:h-[460px] md:h-[560px]",
    imageStyle: { objectPosition: "center center" },
  },
  {
    title: "THE CHRONICLE",
    category: "WEB DESIGN",
    year: "2023",
    description:
      "A high-end editorial platform for modern journalism. Merging traditional typography with radical digital layouts.",
    linkLabel: "VIEW LIVE SITE",
    href: "#",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Rs7dRDPTWtJFonTdaRpQrYKW4EoC6euzIz2q5DnTZRwuOBlCpsz1dG7o7wFShkezgFemFXTIqxmuI_4snkb5OLyp7mu5hk5eIvhidc4YmBF82J3fGRMNsc4r51Frztm38xz9sTjvuYVp5va2T8khvmx5bwdRwelsFUoO71rrlQa9S17Xbm6ZlOnIEzQH-yzEXnt1OhtF3RClsoMcuGZe-B34DM9yU9EzUTK6wShpgZvdDaYb4FyZeNDGObc-9Elgk6aBV5bwPBMO",
    alt: "Modern minimalist tech setup close-up",
    reverse: true,
    imageClassName: "h-[420px] w-full object-cover md:h-[600px]",
    hidden: true,
  },
];

const archiveProjects = [
  {
    eyebrow: "REDESIGN",
    title: "Hedge Social",
    description: "Smarter investing through clear, actionable insights",
    href: "https://www.figma.com/design/Ln5CQLGyKip0aS6BR4jlM6/Hedge-Social?node-id=0-1&p=f&t=kiDf3NnQsuYGUU4D-0",
  },
  {
    eyebrow: "REDESIGN",
    title: "Tributax",
    description: "Simplifying taxes for a stress-free filing experience",
    href: "/tributax",
  },
  {
    eyebrow: "HOMEPAGE DESIGNS",
    title: "Automotive Web Designs",
    description: "Streamlining the online car-buying experience",
    href: "/automotive-web-designs",
  },
  {
    eyebrow: "UI EXPERIMENTS",
    title: "Dribbble",
    description: "A curated collection of visual experiments in digital form and interaction",
    href: "https://dribbble.com/jadencook",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const sectionReveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: {
          duration: 2.4,
          ease: [0.23, 1, 0.32, 1] as const,
        },
      };

  const itemReveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: {
          duration: 2.1,
          ease: [0.23, 1, 0.32, 1] as const,
        },
      };

  useEffect(() => {
    const updateActiveSection = () => {
      const workSection = document.getElementById("work");
      const contactSection = document.getElementById("contact");
      const scrollPosition = window.scrollY + 140;

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveSection("contact");
        return;
      }

      if (workSection && scrollPosition >= workSection.offsetTop) {
        setActiveSection("projects");
        return;
      }

      setActiveSection("home");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/jadencook.us@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFormStatus("Message sent! I’ll be in touch soon.");
      form.reset();
    } catch {
      setFormStatus("Message failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <GalleryCursor />
      <ThemeToggle />
      <SiteNav
        headerClassName="fixed top-0 z-50 w-full bg-[color:var(--header-bg)] shadow-[var(--section-shadow)] backdrop-blur-xl"
        items={[
          { label: "HOME", href: "#", active: activeSection === "home" },
          {
            label: "PROJECTS",
            href: "#work",
            active: activeSection === "projects",
          },
          {
            label: "CONTACT",
            href: "#contact",
            active: activeSection === "contact",
          },
        ]}
      />

      <main className="pt-8 sm:pt-14">
        <motion.section
          {...sectionReveal}
          className="mx-auto mb-12 flex min-h-[calc(100svh-4rem)] max-w-[1920px] flex-col justify-center px-6 pt-20 sm:mb-16 sm:px-12 md:min-h-[819px] md:px-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-headline text-[clamp(2.45rem,10vw,5.8rem)] font-bold leading-[1.02] tracking-[-0.04em] text-heading sm:mb-8">
              <span className="block text-[0.76em] font-medium text-heading/90">
                Hi, I&apos;m
              </span>
              <span className="block bg-[linear-gradient(90deg,#d7deff_0%,#9dacff_58%,#6f86ff_100%)] bg-clip-text pr-[0.04em] text-transparent">
                Jaden Cook
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant sm:mb-12 sm:text-xl md:text-2xl">
              I&apos;m a UI/UX designer with a front-end background, focused on
              creating clean, intuitive digital experiences.
            </p>
            <div className="flex justify-center gap-4 sm:gap-6">
              <a
                className="rounded-md bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-strong)_100%)] px-6 py-4 text-center font-label text-xs font-bold uppercase tracking-[0.18em] !text-[color:var(--button-text)] transition-transform duration-300 hover:scale-105 sm:px-8 sm:text-sm sm:tracking-widest"
                href="/jaden-cook-resume-2026.pdf"
                rel="noreferrer"
                target="_blank"
              >
                VIEW RESUME
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          className="mx-auto mb-32 max-w-[1920px] px-6 sm:px-12 md:mb-48 md:px-24"
          id="work"
        >
          <div className="mb-16 flex items-end justify-between md:mb-20">
            <motion.div {...itemReveal}>
              <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                CASE STUDIES
              </h2>
              <p className="mt-3 font-body text-sm text-on-surface-variant md:text-base">
                In-depth explorations of craft and strategy
              </p>
            </motion.div>
            <motion.div
              {...itemReveal}
              className="hidden h-px w-1/3 bg-outline-variant/20 md:block"
            />
          </div>

          <div className="grid grid-cols-1 gap-20 md:gap-32">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className={`group items-center gap-8 md:grid-cols-12 md:gap-12 ${
                  project.hidden ? "hidden" : "grid"
                }`}
              >
                <motion.div
                  {...itemReveal}
                  className={`overflow-hidden rounded-lg ${
                    project.title === "Nurture Nest" ? "" : "bg-surface-container"
                  } ${project.reverse ? "md:order-2 md:col-span-8" : "md:col-span-8"}`}
                >
                  <Image
                    alt={project.alt}
                    className={project.imageClassName}
                    height={1200}
                    priority={!project.reverse}
                    src={project.image}
                    style={project.imageStyle}
                    width={1600}
                  />
                </motion.div>
                <motion.div
                  {...itemReveal}
                  className={`flex flex-col gap-6 ${
                    project.reverse ? "md:order-1 md:col-span-4" : "md:col-span-4"
                  }`}
                >
                  <motion.div {...itemReveal} className="flex gap-2">
                    <span className="bg-surface-container-highest px-3 py-1 font-label text-[10px] uppercase tracking-widest text-primary">
                      {project.category}
                    </span>
                    <span className="bg-surface-container-highest px-3 py-1 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                      {project.year}
                    </span>
                  </motion.div>
                  <motion.h3
                    {...itemReveal}
                    className="font-headline text-3xl font-bold tracking-tight sm:text-4xl"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    {...itemReveal}
                    className="font-body leading-relaxed text-on-surface-variant"
                  >
                    {project.description}
                  </motion.p>
                  <motion.a
                    {...itemReveal}
                    className="font-label text-sm tracking-[0.1em] !text-primary transition-all hover:underline hover:decoration-2 hover:underline-offset-8"
                    href={project.href}
                    rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {project.linkLabel} →
                  </motion.a>
                </motion.div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          className="mb-24 bg-surface-container-low px-6 py-20 sm:px-12 md:px-24 md:py-32"
        >
          <div className="mx-auto max-w-[1920px]">
            <div className="mb-12 md:mb-16">
              <h2 className="mb-4 font-headline text-3xl font-bold">
                SELECTED ARCHIVE
              </h2>
              <p className="max-w-xl font-body text-on-surface-variant">
                A collection of experiments, side-quests, and collaborative
                ventures.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {archiveProjects.map((project) => (
                <motion.a
                  {...itemReveal}
                  key={project.title}
                  href={project.href}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  className="group flex min-h-72 flex-col justify-between rounded-lg bg-surface-container p-6 transition-colors duration-300 hover:bg-surface-container-high sm:aspect-square sm:p-8"
                >
                  <div key={`${project.title}-archive-copy`}>
                    <span className="mb-4 block font-label text-[10px] uppercase tracking-widest text-primary">
                      {project.eyebrow}
                    </span>
                    <h4 className="mb-2 font-headline text-2xl font-bold">
                      {project.title}
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                      {project.description}
                    </p>
                  </div>
                  <div
                    key={`${project.title}-archive-arrow`}
                    className="flex justify-end text-primary"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7 17L17 7M9 7H17V15"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          className="mx-auto mb-24 max-w-[1920px] px-6 sm:px-12 md:px-24"
          id="contact"
        >
          <div className="grid gap-16 py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-20 lg:gap-28">
            <div className="max-w-xl pt-2">
              <h2 className="font-headline text-5xl font-bold leading-[0.96] tracking-[-0.05em] text-heading sm:text-6xl md:text-[4.75rem] lg:text-[5.75rem]">
                Let&apos;s
                <br />
                Connect
              </h2>
              <p className="mt-8 max-w-md font-body text-lg leading-[1.7] text-on-surface-variant sm:mt-10 sm:text-xl">
                Interested in working together or just want to say hi? Feel
                free to reach out. I&apos;m currently available for new
                projects and collaborations.
              </p>
            </div>

            <form
              className="grid gap-9 pt-2"
              method="POST"
              onSubmit={handleContactSubmit}
            >
              <input name="_captcha" type="hidden" value="false" />
              <input
                name="_subject"
                type="hidden"
                value="New portfolio contact form submission"
              />
              <label className="grid gap-3">
                <span className="font-label text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Name
                </span>
                <input
                  className="border border-[color:var(--button-border)] bg-transparent px-4 py-4 font-body text-lg text-foreground outline-none transition-colors placeholder:text-on-surface-variant/60 focus:border-primary sm:py-5 sm:text-xl"
                  name="name"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </label>

              <label className="grid gap-3">
                <span className="font-label text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Email
                </span>
                <input
                  className="border border-[color:var(--button-border)] bg-transparent px-4 py-4 font-body text-lg text-foreground outline-none transition-colors placeholder:text-on-surface-variant/60 focus:border-primary sm:py-5 sm:text-xl"
                  name="email"
                  placeholder="john@example.com"
                  required
                  type="email"
                />
              </label>

              <label className="grid gap-3">
                <span className="font-label text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Message
                </span>
                <textarea
                  className="min-h-32 border border-[color:var(--button-border)] bg-transparent px-4 py-4 font-body text-lg text-foreground outline-none transition-colors placeholder:text-on-surface-variant/60 focus:border-primary sm:py-5 sm:text-xl"
                  name="message"
                  placeholder="Say hello..."
                  required
                />
              </label>

              <div className="pt-2">
                <button
                  className="w-full rounded-md bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-strong)_100%)] px-8 py-4 font-label text-xs font-bold uppercase tracking-[0.2em] !text-[color:var(--button-text)] transition-transform duration-300 hover:scale-105 sm:w-auto sm:px-12 sm:py-5 sm:text-sm"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {formStatus ? (
                  <p className="mt-4 font-body text-sm text-on-surface-variant">
                    {formStatus}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </motion.section>
      </main>

      <motion.footer
        {...sectionReveal}
        className="w-full border-t border-[color:var(--button-border)] bg-background"
        id="footer"
      >
        <div className="mx-auto flex w-full max-w-[1920px] justify-center px-6 py-12 sm:px-12 md:py-16">
          <p className="text-center font-label text-[10px] font-medium uppercase tracking-[0.2em] text-nav-muted">
            © 2026 designed and developed by jaden cook
          </p>
        </div>
      </motion.footer>
    </>
  );
}
