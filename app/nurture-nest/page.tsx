import Image from "next/image";
import Link from "next/link";
import { Caveat, Nunito } from "next/font/google";
import { GalleryCursor } from "@/components/gallery-cursor";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const approachSteps = [
  {
    title: "Empathize",
    items: ["User Research", "User Interviews"],
  },
  {
    title: "Define",
    items: ["User Persona", "Goal Statement", "Empathy Map"],
  },
  {
    title: "Ideate",
    items: ["Site Map", "User Flow", "How Might We’s"],
  },
  {
    title: "Design",
    items: ["LowFi Wireframes", "Visual Design"],
  },
  {
    title: "Test",
    items: ["Usability Tests", "Improvements"],
  },
];

const roleItems = [
  "Design Strategy",
  "Problem Solution",
  "Information Architecture",
  "Research Insights",
  "Usability Testing",
  "User Flow",
  "Prototyping",
  "Wireframes",
  "Competitive Analysis",
  "Visual Design",
  "User Research",
  "User Persona",
];

const timelineItems = [
  { week: "1st Week", title: "Strategy (Research)", row: "top" },
  { week: "2nd Week", title: "Interviews, Empathy Map", row: "mid" },
  {
    week: "3rd Week",
    title: "Problem Statement & Goal Statement",
    row: "low",
  },
  {
    week: "4th Week",
    title: "Competitive Analysis & Information Architecture",
    row: "bottom",
    wide: true,
  },
  { week: "6th Week", title: "Lo-Fi Wireframes", row: "top" },
  { week: "7th Week", title: "Visual Design", row: "mid" },
  { week: "8th Week", title: "Usability Testing", row: "low" },
];

const quantitativeInsights = [
  {
    question:
      "Did sleep deprivation make it harder to make decisions during the first weeks postpartum?",
    yes: 80,
    no: 20,
  },
  {
    question:
      "Did you have people willing to help, but without a clear system for organizing that help?",
    yes: 80,
    no: 20,
  },
  {
    question: "Did you feel uncomfortable directly asking people for help?",
    yes: 70,
    no: 30,
  },
  {
    question:
      "Did the apps you used focus more on tracking the baby rather than supporting your recovery?",
    yes: 83,
    no: 17,
  },
  {
    question:
      "Did you rely on multiple tools (texts, notes, apps, calendars) to manage postpartum tasks or questions?",
    yes: 68,
    no: 32,
  },
];

export default function NurtureNestPage() {
  return (
    <>
      <GalleryCursor />
      <nav className="fixed left-0 right-0 top-0 z-50 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-8 py-6">
          <Link
            className="font-headline text-[1.45rem] font-black lowercase tracking-[-0.05em] text-heading italic"
            href="/"
          >
            <span className="text-heading">jaden</span>
            <span className="inline-block bg-[linear-gradient(90deg,#d7deff_0%,#9dacff_58%,#6f86ff_100%)] bg-clip-text pr-[1.06em] text-transparent">
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

      <main className="bg-[#FFFFFF] pt-32 text-[#2b312d]">
        <section className="mx-auto max-w-[1920px] px-8 pb-28">
          <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="max-w-2xl pt-8">
              <div className="mb-10 inline-flex rounded-full bg-[#edf5ec] px-6 py-3">
                <span className="font-body text-lg text-[#74b58b]">
                  UI/UX Case Study
                </span>
              </div>

              <h1 className="font-headline text-[clamp(3.3rem,7vw,5.8rem)] font-bold leading-[0.94] tracking-[-0.05em] text-[#74b58b]">
                Nurture Nest
              </h1>
              <p className="mt-4 max-w-xl font-body text-[clamp(1.45rem,2.8vw,2.2rem)] leading-tight text-[#4a524d]">
                Support and Recovery, Simplified
              </p>

              <div className="mt-10 flex gap-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f1f4f0]">
                  <Image
                    alt="Figma"
                    className="h-14 w-14 object-contain"
                    height={56}
                    src="/figma.png"
                    width={56}
                  />
                </div>
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f1f4f0]">
                  <Image
                    alt="Google Docs"
                    className="h-14 w-14 object-contain"
                    height={56}
                    src="/google-docs.png"
                    width={56}
                  />
                </div>
              </div>

              <div className="mt-16">
                <h2 className="font-headline text-4xl font-semibold tracking-[-0.04em] text-[#74b58b]">
                  Overview
                </h2>
                <p className="mt-6 max-w-2xl font-body text-xl leading-relaxed text-[#4f5753]">
                  Nurture Nest is a postpartum support and recovery planner
                  designed to reduce mental load for new mothers during the
                  early weeks after birth. The product helps coordinate help
                  from friends and family, track daily recovery, and store
                  medical questions in a calm, low-effort experience designed
                  for cognitive fatigue.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#f2f6ef] p-6 md:p-8">
              <div className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 rounded-full bg-[#c9dec7]/60 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-[#c9dec7]/60 blur-2xl" />
              <Image
                alt="Nurture Nest case study overview"
                className="h-auto w-full rounded-[1.5rem] object-cover"
                height={1400}
                priority
                src="/nurturenest.png"
                width={1200}
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-8 pb-32">
          <div className="space-y-24 text-center">
            <div>
              <h2 className="font-headline text-[clamp(2.2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em] text-[#202522]">
                Problem <span className="text-[#74b58b]">Statement</span>
              </h2>
              <p className="mx-auto mt-8 max-w-4xl font-body text-xl leading-relaxed text-[#3f4742]">
                A first-time postpartum mother is a sleep-deprived parent
                navigating recovery, hormonal changes, and newborn care who
                needs a low-effort way to request help and track her wellbeing
                because support often exists but is unstructured, leaving the
                burden of coordination on her.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-[clamp(2.2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em] text-[#202522]">
                Possible <span className="text-[#74b58b]">Solution</span>
              </h2>
              <p className="mx-auto mt-8 max-w-4xl font-body text-xl leading-relaxed text-[#3f4742]">
                Nurture Nest is a postpartum support and recovery planner that
                helps new mothers coordinate help, track their physical and
                emotional wellbeing, and manage medical appointments, all
                within a calm, privacy-first experience designed for cognitive
                fatigue.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-[clamp(2.2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em] text-[#202522]">
                Target <span className="text-[#74b58b]">Audience</span>
              </h2>
              <ul className="mx-auto mt-8 max-w-4xl list-disc space-y-3 pl-6 text-left font-body text-xl leading-relaxed text-[#3f4742] marker:text-[#74b58b]">
                <li>
                  <strong>Postpartum mothers</strong> who are recovering
                  physically + emotionally and need simple, low-effort support
                  tools
                </li>
                <li>
                  <strong>First-time moms</strong> experiencing information
                  overload, anxiety, and uncertainty about what&apos;s
                  “normal”
                </li>
                <li>
                  <strong>Mothers with limited support systems</strong>{" "}
                  (partner working, family far away, few friends nearby)
                </li>
                <li>
                  <strong>Support people</strong> (partner, family, close
                  friends) who genuinely want to help but don&apos;t know what
                  to do or how to coordinate
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1920px] px-8 pb-36">
          <div className="rounded-[2rem] bg-[#FFFFFF] px-8 py-16 md:px-12 md:py-20">
            <h2 className="text-center font-headline text-[clamp(2.4rem,4vw,4rem)] font-semibold tracking-[-0.05em] text-[#202522]">
              The <span className="text-[#74b58b]">Approach</span>
            </h2>
            <p className="mx-auto mt-8 max-w-5xl text-center font-body text-lg leading-relaxed text-[#3f4742] md:text-xl">
              To design a solution that genuinely supports mothers during the
              postpartum period, I followed a user-centered design process
              focused on understanding real experiences and reducing cognitive
              load.
            </p>

            <div className="mt-16">
              <Image
                alt="Nurture Nest design process"
                className="h-auto w-full object-contain"
                height={900}
                src="/process.png"
                width={1600}
              />

              <div className="mt-8 grid gap-8 text-center md:grid-cols-5">
                {approachSteps.map((step) => (
                  <div key={step.title}>
                    <h3 className="font-headline text-3xl font-medium tracking-[-0.04em] text-[#202522] md:text-4xl">
                      {step.title}
                    </h3>
                    <div className="mt-4 space-y-1 font-body text-lg leading-relaxed text-[#3f4742] md:text-xl">
                      {step.items.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1920px] px-8 pb-36">
          <h2 className="text-center font-headline text-[clamp(2.4rem,4vw,4rem)] font-semibold tracking-[-0.05em] text-[#202522]">
            My <span className="text-[#74b58b]">Role</span>
          </h2>

          <div className="mt-12 rounded-[2rem] bg-[#86c99a] px-8 py-14 md:px-16 md:py-16">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {roleItems.map((item) => (
                <div
                  key={item}
                  className="flex min-h-20 items-center justify-center rounded-full bg-[#f4f7f0] px-8 py-5 text-center shadow-[0_10px_30px_rgba(86,140,104,0.16)]"
                >
                  <span className="font-body text-lg leading-tight text-[#202522] md:text-xl">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1920px] px-8 pb-36">
          <h2 className="text-center font-headline text-[clamp(2.4rem,4vw,4rem)] font-semibold tracking-[-0.05em] text-[#202522]">
            Project <span className="text-[#74b58b]">Timeline</span>
          </h2>

          <div className="mt-12 rounded-[2rem] bg-[#FFFFFF] px-6 py-12 md:px-10">
            <div className="mb-4 hidden gap-6 md:grid md:grid-cols-8">
              <div className="col-span-5 rounded-full bg-[#86c99a] px-8 py-5 text-center font-headline text-xl font-medium text-white md:text-2xl">
                UX Design
              </div>
              <div className="col-span-3 rounded-full bg-[#86c99a] px-8 py-5 text-center font-headline text-xl font-medium text-white md:text-2xl">
                UI Design
              </div>
            </div>
            <div className="mb-10 grid gap-6 md:hidden">
              <div className="rounded-full bg-[#86c99a] px-8 py-5 text-center font-headline text-xl font-medium text-white md:text-2xl">
                UX Design
              </div>
              <div className="rounded-full bg-[#86c99a] px-8 py-5 text-center font-headline text-xl font-medium text-white md:text-2xl">
                UI Design
              </div>
            </div>

            <div className="hidden grid-cols-8 gap-6 md:grid">
              {Array.from({ length: 8 }, (_, index) => (
                <div
                  key={`line-${index + 1}`}
                  className="relative min-h-[34rem]"
                >
                  <div className="absolute left-1/2 top-0 h-[30rem] -translate-x-1/2 border-l border-[#d4ddd2]" />
                  {timelineItems
                    .filter((item) => item.week === `${index + 1}${index === 0 ? "st" : index === 1 ? "nd" : index === 2 ? "rd" : "th"} Week`)
                    .map((item) => (
                      <div
                        key={item.title}
                        className={`absolute left-1/2 ${
                          item.wide ? "w-[17rem]" : "w-[15rem]"
                        } -translate-x-1/2 rounded-[1.5rem] bg-[#EDFCF3] px-5 py-4 text-center font-body text-lg leading-snug text-[#3a433e] shadow-[0_10px_30px_rgba(149,191,161,0.12)] ${
                          item.row === "top"
                            ? "top-10"
                            : item.row === "mid"
                              ? "top-34"
                            : item.row === "low"
                              ? "top-58"
                              : "top-82"
                        }`}
                      >
                        {item.title}
                      </div>
                    ))}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center font-body text-lg text-[#49514c]">
                    {index + 1}
                    {index === 0
                      ? "st"
                      : index === 1
                        ? "nd"
                        : index === 2
                          ? "rd"
                          : "th"}
                    <br />
                    Week
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:hidden">
              {timelineItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] bg-[#EDFCF3] px-5 py-4 shadow-[0_10px_30px_rgba(149,191,161,0.12)]"
                >
                  <p className="font-label text-xs uppercase tracking-[0.2em] text-[#74b58b]">
                    {item.week}
                  </p>
                  <p className="mt-2 font-body text-lg leading-snug text-[#3a433e]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-36">
          <h2 className="text-center font-headline text-[clamp(2.4rem,4vw,4rem)] font-semibold tracking-[-0.05em] text-[#202522]">
            <span className="text-[#74b58b]">Empathize</span> Phase
          </h2>

          <div className="mt-14">
            <h3 className="font-headline text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-0.04em] text-[#202522]">
              Qualitative Research
            </h3>

            <div className="mt-8 space-y-8 font-body text-lg leading-relaxed text-[#3f4742] md:text-xl">
              <p>
                Qualitative research was conducted to better understand the
                challenges mothers experience during the early postpartum period
                and how they coordinate support during recovery.
              </p>
              <p>
                This research included five semi-structured interviews with
                mothers between 0–12 weeks postpartum, along with community
                research from postpartum forums and a competitive audit of
                existing tools. These conversations provided insight into the
                emotional and practical challenges mothers face, including
                sleep deprivation, difficulty asking for help, fragmented
                support coordination, and the lack of tools designed
                specifically to support maternal recovery.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="font-headline text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-0.04em] text-[#202522]">
                Interview Questions
              </h3>

              <ul className="mt-8 list-disc space-y-3 pl-8 font-body text-lg leading-relaxed text-[#3f4742] marker:text-[#74b58b] md:text-xl">
                <li>
                  What was your support situation like? (partner, family
                  nearby, etc.)
                </li>
                <li>What felt hardest in the first 2–6 weeks?</li>
                <li>What did you need help with the most?</li>
                <li>When people offered help, what usually happened?</li>
                <li>What made it hard or awkward to ask for help?</li>
                <li>Did you use any apps/tools? Which ones?</li>
                <li>What didn&apos;t work about them?</li>
                <li>
                  If you could wave a magic wand and have one tool postpartum,
                  what would it do?
                </li>
                <li>What would make you actually keep using it?</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-36">
          <div className="rounded-[2rem] bg-[#EDFCF3] px-10 py-12 md:px-14 md:py-14">
            <h3 className="font-headline text-[clamp(2rem,3vw,3rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
              Key Insight Derived
            </h3>

            <ul className="mt-8 list-disc space-y-5 pl-8 font-body text-lg leading-relaxed text-[#202522] marker:text-[#202522] md:text-xl">
              <li>
                “I wished someone could just look at a list and pick something
                instead of making me decide.”
              </li>
              <li>
                “It wasn&apos;t that I didn&apos;t have support, it just
                wasn&apos;t organized.”
              </li>
              <li>
                “I was so sleep deprived I wasn&apos;t capable of making
                decisions, I didn&apos;t even know what I needed in the moment
                other than sleep.”
              </li>
              <li>
                “I needed reassurance that what I was feeling mentally and
                physically was normal.”
              </li>
            </ul>
          </div>

          <div className="mx-auto mt-14 max-w-7xl">
            <h3 className="font-headline text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-0.04em] text-[#202522]">
              Quantitative Research
            </h3>

            <div className="mt-8 space-y-8 font-body text-lg leading-relaxed text-[#3f4742] md:text-xl">
              <p>
                Interview responses were analyzed to identify measurable
                patterns across participants. By translating recurring
                responses into percentages, I was able to quantify how common
                certain postpartum challenges were among participants.
              </p>
              <p>
                The data below highlights key trends related to sleep
                deprivation impacting decision-making, discomfort asking for
                help, reliance on multiple tools to manage postpartum life, and
                the lack of solutions focused on maternal recovery.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-36">
          <div className="space-y-28">
            {quantitativeInsights.map((item, index) => {
              const chart = (
                <div className="flex justify-center">
                  <div className="relative h-52 w-52">
                    <div
                      className="h-full w-full rounded-full"
                      style={{
                        background: `conic-gradient(#86c99a 0 ${item.yes}%, #eef9f1 ${item.yes}% 100%)`,
                      }}
                    />
                    <div className="absolute inset-[22%] rounded-full bg-[#FFFFFF]" />
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#111111] px-3 py-2 font-label text-sm text-white">
                      {item.yes}%
                    </div>
                    <div className="absolute right-0 top-[18%] translate-x-1/3 rounded-xl bg-[#111111] px-3 py-2 font-label text-sm text-white">
                      {item.no}%
                    </div>
                  </div>
                </div>
              );

              const copy = (
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="mx-auto max-w-md font-body text-lg leading-relaxed text-[#3f4742] md:text-xl">
                    {item.question}
                  </p>
                  <div className="mt-6 flex items-center gap-6">
                    <div className="h-4 w-4 rounded-sm bg-[#86c99a]" />
                    <span className="font-body text-base text-[#4e5752]">
                      Yes
                    </span>
                    <div className="h-4 w-4 rounded-sm bg-[#eef9f1]" />
                    <span className="font-body text-base text-[#4e5752]">
                      No
                    </span>
                  </div>
                </div>
              );

              return (
                <div
                  key={item.question}
                  className="grid items-center gap-4 pb-4 md:grid-cols-2 md:gap-6 md:pb-6"
                >
                  {index % 2 === 0 ? (
                    <>
                      {copy}
                      {chart}
                    </>
                  ) : (
                    <>
                      {chart}
                      {copy}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-36">
          <div className="rounded-[2rem] bg-[#EDFCF3] px-10 py-12 md:px-14 md:py-14">
            <h3 className="font-headline text-[clamp(2rem,3vw,3rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
              Key Insight Derived
            </h3>

            <ul className="mt-8 list-disc space-y-4 pl-8 font-body text-lg leading-relaxed text-[#202522] marker:text-[#202522] md:text-xl">
              <li>80% said sleep deprivation impacted decision making</li>
              <li>70% said asking for help felt uncomfortable</li>
              <li>83% of apps analyzed focused on baby tracking</li>
              <li>68% used multiple tools to manage postpartum tasks</li>
              <li>80% said support existed but wasn&apos;t organized</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-36">
          <h2 className="text-center font-headline text-[clamp(2.4rem,4vw,4rem)] font-semibold tracking-[-0.05em] text-[#202522]">
            Define <span className="text-[#74b58b]">Phase</span>
          </h2>

          <div className="mt-14">
            <h3 className="font-headline text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-0.04em] text-[#202522]">
              Goal Statement
            </h3>

            <div className="mt-8 space-y-8 font-body text-lg leading-relaxed text-[#3f4742] md:text-xl">
              <p>
                Our postpartum support and recovery planner will let users
                coordinate support tasks, track recovery with daily check-ins,
                and store medical questions for appointments which will affect
                new mothers in the early postpartum weeks and their support
                network by reducing mental load, making it easier to request
                help, and providing a simple place to track recovery and
                important information during a cognitively demanding time.
              </p>
              <p>
                We will measure effectiveness by daily check-in completion
                rate, number of support tasks created and claimed, onboarding
                completion rate, and user return rate after 7 days.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-36">
          <h2 className="font-headline text-[clamp(2.2rem,3.8vw,3.6rem)] font-semibold tracking-[-0.05em] text-[#202522]">
            User Persona
          </h2>

          <div className="mt-10 grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_40px_rgba(32,37,34,0.08)]">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_35%,#f8faf9_0%,#e8efea_100%)]">
                <Image
                  alt="Ashleigh Green"
                  className="h-full w-full object-cover"
                  height={160}
                  src="/ashleigh.png"
                  width={160}
                />
              </div>
              <h3 className="mt-8 text-center font-headline text-[clamp(2rem,3vw,3rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
                Ashleigh Green
              </h3>

              <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 font-body text-lg leading-relaxed text-[#3f4742]">
                <dt className="font-semibold text-[#202522]">Age</dt>
                <dd>29</dd>
                <dt className="font-semibold text-[#202522]">Education</dt>
                <dd>Bachelor&apos;s Degree</dd>
                <dt className="font-semibold text-[#202522]">Status</dt>
                <dd>Married, 1st time mom</dd>
                <dt className="font-semibold text-[#202522]">Occupation</dt>
                <dd>Marketing Manager (on maternity leave)</dd>
                <dt className="font-semibold text-[#202522]">Location</dt>
                <dd>Denver, Colorado</dd>
              </dl>

              <div className="mt-10">
                <h4 className="text-center font-headline text-[clamp(1.8rem,2.5vw,2.4rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
                  Personality
                </h4>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  {["Calm", "Caring", "Organized"].map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full bg-[#edf7f1] px-5 py-2 font-body text-base text-[#4a524d]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-center font-headline text-[clamp(1.8rem,2.5vw,2.4rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
                  Brief Story
                </h4>
                <p className="mt-6 font-body text-lg leading-relaxed text-[#3f4742]">
                  Ashleigh is three weeks postpartum and adjusting to life with
                  her newborn while recovering physically and emotionally.
                  Although friends and family offer help, coordinating that
                  support feels overwhelming while she is sleep deprived. The
                  tools she currently uses focus on the baby, leaving her
                  without an easy way to track her own recovery or organize
                  support.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Goals",
                  items: [
                    "Recover physically and emotionally while adjusting to life with a newborn",
                    "Have an easy way to organize and coordinate help from family and friends",
                    "Track how she is feeling day-to-day without adding extra mental effort",
                  ],
                },
                {
                  title: "Frustations",
                  items: [
                    "Feeling overwhelmed by decision-making due to sleep deprivation",
                    "Support offers that are vague and require her to coordinate everything",
                    "Existing apps focus on the baby rather than supporting her recovery",
                    "Important questions for doctors getting lost in notes apps or texts",
                  ],
                },
                {
                  title: "Needs",
                  items: [
                    "A simple way to request help without feeling like a burden",
                    "A central place to track recovery, mood, pain, and sleep",
                    "An easy way to save questions and notes for medical appointments",
                    "Tools that reduce cognitive load instead of adding complexity",
                  ],
                },
                {
                  title: "Motivations",
                  items: [
                    "Feeling reassured that her recovery and emotions are normal",
                    "Having more time and mental space to focus on bonding with her baby",
                    "Feeling supported by family and friends without needing to manage every detail",
                  ],
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className="rounded-[2rem] bg-[#EDFCF3] px-8 py-8"
                >
                  <h3 className="font-headline text-[clamp(1.9rem,2.6vw,2.6rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
                    {section.title}
                  </h3>
                  <ul className="mt-5 list-disc space-y-3 pl-6 font-body text-lg leading-relaxed text-[#3f4742] marker:text-[#202522]">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-36">
          <div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_40px_rgba(32,37,34,0.08)]">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_35%,#f8faf9_0%,#e8efea_100%)]">
                <Image
                  alt="Luis Suarez"
                  className="h-full w-full object-cover"
                  height={160}
                  src="/luis.png"
                  width={160}
                />
              </div>
              <h3 className="mt-8 text-center font-headline text-[clamp(2rem,3vw,3rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
                Luis Suarez
              </h3>

              <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 font-body text-lg leading-relaxed text-[#3f4742]">
                <dt className="font-semibold text-[#202522]">Age</dt>
                <dd>31</dd>
                <dt className="font-semibold text-[#202522]">Education</dt>
                <dd>Bachelor&apos;s Degree</dd>
                <dt className="font-semibold text-[#202522]">Status</dt>
                <dd>Friend of the mother</dd>
                <dt className="font-semibold text-[#202522]">Occupation</dt>
                <dd>Software Engineer</dd>
                <dt className="font-semibold text-[#202522]">Location</dt>
                <dd>Denver, Colorado</dd>
              </dl>

              <div className="mt-10">
                <h4 className="text-center font-headline text-[clamp(1.8rem,2.5vw,2.4rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
                  Personality
                </h4>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  {["Practical", "Reliable", "Creative"].map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full bg-[#edf7f1] px-5 py-2 font-body text-base text-[#4a524d]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-center font-headline text-[clamp(1.8rem,2.5vw,2.4rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
                  Brief Story
                </h4>
                <p className="mt-6 font-body text-lg leading-relaxed text-[#3f4742]">
                  Luis is a close friend of a new mother and wants to be
                  supportive during her postpartum recovery. He regularly
                  checks in and offers help, but often doesn&apos;t know what
                  would actually be useful. When he asks how he can help, the
                  response is usually “I&apos;m okay” or “I&apos;ll let you
                  know,” leaving him unsure what to do next.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Goals",
                  items: [
                    "Help the new mother in ways that are genuinely useful",
                    "Easily see what tasks or support are needed",
                    "Contribute support without adding extra stress",
                  ],
                },
                {
                  title: "Frustations",
                  items: [
                    "Not knowing what kind of help is actually needed",
                    "Vague responses like “I’ll let you know”",
                    "Feeling like he might be bothering the mother during a stressful time",
                  ],
                },
                {
                  title: "Needs",
                  items: [
                    "A clear list of ways to help",
                    "Simple tasks he can claim without needing coordination",
                    "Visibility into what has already been taken care of",
                  ],
                },
                {
                  title: "Motivations",
                  items: [
                    "Supporting someone he cares about during a difficult transition",
                    "Being helpful without creating additional stress for the mother",
                    "Feeling confident that his help is meaningful and appreciated",
                  ],
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className="rounded-[2rem] bg-[#EDFCF3] px-8 py-8"
                >
                  <h3 className="font-headline text-[clamp(1.9rem,2.6vw,2.6rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
                    {section.title}
                  </h3>
                  <ul className="mt-5 list-disc space-y-3 pl-6 font-body text-lg leading-relaxed text-[#3f4742] marker:text-[#202522]">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-36">
          <h2 className="font-headline text-[clamp(2.2rem,3.8vw,3.6rem)] font-semibold tracking-[-0.05em] text-[#202522]">
            Empathy Map
          </h2>

          <div className="relative mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Says",
                items: [
                  "“I wished someone could just look at a list and pick something instead of making me decide.”",
                  "“I was so sleep deprived I wasn’t capable of making decisions.”",
                  "“Let me know if you need anything sounds nice, but I never know what to ask for.”",
                  "“I needed reassurance that what I was feeling mentally and physically was normal.”",
                ],
              },
              {
                title: "Thinks",
                items: [
                  "“Other moms handle this, I should be able to too.”",
                  "“I don’t want to bother people by asking for help.”",
                  "“Am I recovering normally?”",
                  "“I wish someone could just take over the small tasks so I can focus on the baby.”",
                ],
              },
              {
                title: "Does",
                items: [
                  "Uses a baby tracking app to monitor feedings and diapers",
                  "Writes doctor questions in her notes app",
                  "Scrolls through group texts from friends and family offering help",
                  "Tries to manage household tasks even when exhausted",
                ],
              },
              {
                title: "Feels",
                items: [
                  "Overwhelmed from sleep deprivation and emotional changes",
                  "Guilty asking others for help",
                  "Relieved when someone offers concrete support",
                  "Reassured when she knows her recovery experiences are normal",
                ],
              },
            ].map((section) => (
              <div
                key={section.title}
                className="rounded-[2rem] bg-[#86c99a] px-8 py-8 text-white shadow-[0_18px_40px_rgba(116,181,139,0.2)]"
              >
                <h3 className="font-headline text-[clamp(2rem,3vw,3rem)] font-medium tracking-[-0.04em]">
                  {section.title}
                </h3>
                <ul className="mt-6 list-disc space-y-3 pl-6 font-body text-lg leading-relaxed md:text-xl">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-44 w-44 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-8 border-white bg-[radial-gradient(circle_at_50%_35%,#f8faf9_0%,#e8efea_100%)] shadow-[0_18px_40px_rgba(32,37,34,0.1)] md:block">
              <Image
                alt="Empathy map persona"
                className="h-full w-full object-cover"
                height={176}
                src="/empathy.png"
                width={176}
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1920px] px-8 pb-36">
          <h2 className="text-center font-headline text-[clamp(2.4rem,4vw,4rem)] font-semibold tracking-[-0.05em] text-[#202522]">
            Ideate <span className="text-[#74b58b]">Phase</span>
          </h2>

          <div className="mt-14">
            <h3 className="ml-[95px] font-headline text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-0.04em] text-[#202522]">
              User Flow
            </h3>

            <div className="mt-12 bg-[#FFFFFF] p-6 md:p-8">
              <Image
                alt="Nurture Nest user flow diagram"
                className="h-auto w-full object-contain"
                height={1000}
                src="/group-578.png"
                width={1600}
              />
            </div>

            <div className="mx-[95px] mt-20 rounded-[2rem] bg-[#EDFCF3] p-8">
              <h3 className="font-headline text-[clamp(2rem,3vw,3rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
                How Might We
              </h3>

              <ul className="mt-8 list-disc space-y-4 pl-8 font-body text-lg leading-relaxed text-[#202522] marker:text-[#202522] md:text-xl">
                <li>
                  How might we help postpartum mothers receive help without
                  needing to coordinate everything themselves?
                </li>
                <li>
                  How might we reduce decision-making for sleep-deprived mothers
                  when they don&apos;t know what to ask for?
                </li>
                <li>
                  How might we help mothers track recovery in a way that feels
                  gentle, private, and non-clinical?
                </li>
                <li>
                  How might we reduce the number of apps and places mothers rely
                  on to manage postpartum life?
                </li>
                <li>
                  How might we make it easier for family and friends to help in a
                  way that&apos;s actually useful?
                </li>
              </ul>
            </div>

            <div className="mt-20">
              <h3 className="ml-[95px] font-headline text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-0.04em] text-[#202522]">
                Site Map
              </h3>

              <div className="mt-12 bg-[#FFFFFF] p-6 md:p-8">
                <Image
                  alt="Nurture Nest site map"
                  className="mx-auto h-auto w-full max-w-4xl object-contain"
                  height={1000}
                  src="/sitemap.png"
                  width={1600}
                />
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-center font-headline text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-0.04em] text-[#202522]">
                Low Fidelity <span className="text-[#74b58b]">Wireframes</span>
              </h3>

              <div className="-mx-8 mt-12 bg-[#FFFFFF]">
                <Image
                  alt="Nurture Nest low fidelity wireframes"
                  className="h-auto w-full object-contain"
                  height={1200}
                  src="/lowfi-wireframes.png"
                  width={1600}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-36">
          <h2 className="text-center font-headline text-[clamp(2.4rem,4vw,4rem)] font-semibold tracking-[-0.05em] text-[#202522]">
            Typography & <span className="text-[#74b58b]">Colors</span>
          </h2>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="font-headline text-[clamp(1.8rem,2.6vw,2.6rem)] font-medium text-[#202522]">
                Primary Font
              </h3>
              <div
                className={`${nunito.className} inline-flex px-6 py-5 text-[clamp(2.6rem,5vw,4rem)] leading-none text-[#69CE99]`}
              >
                Nunito
              </div>
              <p className="font-body text-xl tracking-[0.06em] text-[#141615]">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="font-body text-xl text-[#141615]">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="font-body text-xl text-[#141615]">1234567890</p>
            </div>

            <div className="space-y-6">
              <h3 className="font-headline text-[clamp(1.8rem,2.6vw,2.6rem)] font-medium text-[#202522]">
                Secondary Font
              </h3>
              <div
                className={`${caveat.className} inline-flex px-6 py-5 text-[clamp(2.6rem,5vw,4rem)] leading-none text-[#69CE99]`}
              >
                Caveat
              </div>
              <p className={`${caveat.className} text-xl text-[#141615]`}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className={`${caveat.className} text-xl text-[#141615]`}>
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className={`${caveat.className} text-xl text-[#141615]`}>
                1234567890
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-3 xl:grid-cols-5">
            {[
              { label: "Primary", value: "#69CE99", color: "#69CE99" },
              { label: "Red", value: "#F66D6D", color: "#F66D6D" },
              { label: "Yellow", value: "#FFDB59", color: "#FFDB59" },
              { label: "Green", value: "#66C97A", color: "#66C97A" },
              { label: "Purple", value: "#DECDF5", color: "#DECDF5" },
              { label: "Primary Text", value: "#141615", color: "#141615" },
              { label: "Secondary Text", value: "#3E4341", color: "#3E4341" },
              { label: "Outline", value: "#B0BCB5", color: "#B0BCB5" },
              {
                label: "Background",
                value: "#FAFFFC",
                color: "#FAFFFC",
                ring: true,
              },
              { label: "BG Color", value: "#EDFCF3", color: "#EDFCF3" },
            ].map((swatch) => (
              <div key={swatch.label} className="text-center">
                <div
                  className={`mx-auto h-28 w-28 rounded-[42%_58%_56%_44%/44%_42%_58%_56%] ${
                    swatch.ring ? "border border-[#B0BCB5]" : ""
                  }`}
                  style={{ backgroundColor: swatch.color }}
                />
                <p className="mt-5 font-body text-xl text-[#3E4341]">
                  {swatch.label}
                </p>
                <p className="mt-2 font-body text-xl text-[#3E4341]">
                  {swatch.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1920px] px-8 pb-36">
          <h2 className="text-center font-headline text-[clamp(2.4rem,4vw,4rem)] font-semibold tracking-[-0.05em] text-[#202522]">
            Visual <span className="text-[#74b58b]">Design</span>
          </h2>

          <div className="mt-12 bg-[#FFFFFF] p-6 md:p-8">
            <Image
              alt="Nurture Nest visual design breakdown"
              className="h-auto w-full object-contain"
              height={1200}
              src="/visualdesign.png"
              width={1600}
            />
          </div>
        </section>

        <section className="mx-auto max-w-[1920px] pb-36">
          <div className="-mx-4 bg-[#EDFCF3] py-10 md:py-14">
            <Image
              alt="Nurture Nest app collage"
              className="mx-auto h-auto w-[85%] object-contain"
              height={1400}
              src="/collage-nuturenest.png"
              width={1600}
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-28">
          <div className="rounded-[2rem] bg-[#EDFCF3] px-10 py-12 md:px-14 md:py-14">
            <h2 className="font-headline text-[clamp(2rem,3vw,3rem)] font-medium tracking-[-0.04em] text-[#74b58b]">
              Reflection
            </h2>

            <div className="mt-8 space-y-8 font-body text-lg leading-relaxed text-[#202522] md:text-xl">
              <p>
                One feature I am particularly proud of is the support task
                list, which allows mothers to easily share specific ways others
                can help. Research showed that while support often exists, it
                is rarely organized, and many mothers feel uncomfortable
                directly asking for help. This feature aims to reduce that
                friction by allowing helpers to choose tasks independently.
              </p>
              <p>
                Working on this project reinforced the importance of simplicity
                in design, especially when building for users experiencing
                fatigue, stress, and emotional vulnerability. As someone who
                has experienced the postpartum period myself, this perspective
                helped guide many of the design decisions.
              </p>
              <p>
                If I were to continue developing this product, the next step
                would be conducting additional usability testing with
                postpartum mothers to better understand how the experience
                performs in real-life situations and identify opportunities for
                further refinement.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-8 pb-36 text-center">
          <p className="font-body text-[clamp(1.8rem,3vw,2.6rem)] leading-snug text-[#202522]">
            Thank you for taking the time to review this case study.
          </p>
          <a
            className="mt-8 inline-flex rounded-md bg-[linear-gradient(135deg,#69CE99_0%,#66C97A_100%)] px-8 py-4 font-label text-sm font-bold uppercase tracking-widest !text-white"
            href="https://www.figma.com/design/9aXKlzwsyZLhko603rPKIn/Nurture-Nest-Mobile-App?node-id=355-3364&t=KxnbVjJaeVXdnwSF-1"
            rel="noreferrer"
            target="_blank"
          >
            View Figma File
          </a>
        </section>
      </main>

      <footer className="w-full bg-surface-container-low px-12 py-20">
        <div className="mx-auto flex w-full max-w-[1920px] justify-center">
          <p className="text-center font-label text-[0.75rem] uppercase tracking-[0.1em] text-on-surface-variant/60">
            © 2026 designed and developed by jaden cook
          </p>
        </div>
      </footer>
    </>
  );
}
