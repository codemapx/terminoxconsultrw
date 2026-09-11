import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Presentation,
  TrendingUp,
  Cpu,
  Settings,
  GraduationCap,
  Coins,
  Network,
  Calculator,
  Truck,
  Lightbulb,
  MapPin,
  Phone,
  Mail,
  Check,
  MessageCircle,
} from "lucide-react";
import logo from "@/assets/termino-x-logo.png.asset.json";
import heroImage from "@/assets/hero-consulting.jpg";
import servicesImage from "@/assets/services-docs.jpg";
import programsImage from "@/assets/programs-training.jpg";
import agentsImage from "@/assets/agents-network.jpg";
import packagesImage from "@/assets/packages-team.jpg";
import pitchImage from "@/assets/pitch-presentation.jpg";
import classroomImage from "@/assets/skills-classroom.jpg";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TERMINO-X LTD | Turn Skills & Ideas Into Income" },
      {
        name: "description",
        content:
          "TERMINO-X LTD, Kigali: business plans, company profiles, pitch decks, sales & marketing consulting, plus accelerator programs that turn skills into income.",
      },
      { property: "og:title", content: "TERMINO-X LTD | Business Growth & Skills Development" },
      {
        property: "og:description",
        content:
          "From skills and ideas to income, business and growth. Business services and accelerator programs in Kigali, Rwanda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "250781065367";

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const serviceGroups = [
  {
    icon: Briefcase,
    title: "Business Development",
    items: [
      "Business plans",
      "Business profiles",
      "Business & project proposals",
      "Concept notes",
      "Market research",
      "Business models & strategy",
      "Feasibility support",
    ],
  },
  {
    icon: Presentation,
    title: "Presentation & Investment Readiness",
    items: [
      "Pitch decks",
      "Investor & company presentations",
      "Partnership presentations",
      "Funding documents",
      "Pitch coaching",
      "Investor meeting preparation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing",
    items: [
      "Sales strategy",
      "Marketing strategy",
      "Customer acquisition",
      "Lead generation",
      "Sales team training",
      "Digital marketing",
      "Sales consulting",
    ],
  },
  {
    icon: Cpu,
    title: "Digital & AI",
    items: [
      "AI productivity",
      "AI business training",
      "Digital transformation",
      "Website & digital project coordination",
      "Business automation",
      "Software solutions",
    ],
  },
  {
    icon: Settings,
    title: "Business Operations",
    items: [
      "Operations improvement",
      "Business processes",
      "Inventory systems",
      "Customer management",
      "Business documentation",
      "SOP development",
    ],
  },
];

const packages = [
  {
    tag: "🚀",
    title: "Start My Business",
    who: "For someone with an idea.",
    includes: "Consultation + market research + business plan + business profile",
  },
  {
    tag: "📈",
    title: "Grow My Business",
    who: "For an existing SME.",
    includes: "Business diagnosis + sales & marketing strategy + growth plan",
  },
  {
    tag: "💼",
    title: "Prepare My Business",
    who: "For investors, banks, partners and institutions.",
    includes: "Company profile + proposal + pitch deck + presentation preparation",
  },
  {
    tag: "🎓",
    title: "Build My Skills",
    who: "For students, job seekers and professionals.",
    includes: "TSAP + Sales & Marketing + Sector Accelerators",
  },
  {
    tag: "💰",
    title: "Turn My Skills Into Income",
    who: "For people who already have a skill.",
    includes: "Skills-to-Income Accelerator + Digital Agent pathway",
  },
];

const programs = [
  {
    icon: TrendingUp,
    name: "Sales & Marketing Accelerator",
    price: "100,000 RWF",
    purpose: "Learn how to sell products and services effectively in the digital age.",
    points: [
      "Digital marketing & prospecting",
      "Sales strategies & negotiation",
      "Closing deals & customer relationships",
      "Income through sales roles",
    ],
  },
  {
    icon: GraduationCap,
    name: "Skills Accelerator Program (TSAP)",
    price: "150,000 RWF",
    purpose: "Build practical digital, entrepreneurial and professional skills for the modern workplace.",
    points: [
      "Digital productivity & AI tools",
      "Entrepreneurship & innovation",
      "Communication & personal branding",
      "CV, LinkedIn & interview preparation",
    ],
  },
  {
    icon: Coins,
    name: "Skills-to-Income Accelerator",
    price: "180,000 RWF",
    purpose: "Turn what you know into something people will pay you for.",
    points: [
      "Discover & package your skill",
      "Pricing and value-based offers",
      "Selling: proposals, WhatsApp, social media",
      "Deliver, get referrals and grow",
    ],
    featured: true,
  },
];

const sectorPrograms = [
  {
    icon: Calculator,
    name: "Accounting & Finance Accelerator",
    price: "250,000 RWF",
    points: ["Bookkeeping", "Financial management", "Budgeting & reporting", "Finance operations"],
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain Accelerator",
    price: "250,000 RWF",
    points: ["Supply chain", "Procurement & inventory", "Logistics & distribution", "Trade systems"],
  },
  {
    icon: Lightbulb,
    name: "Entrepreneurship & Innovation",
    price: "On request",
    points: ["Innovation", "Business models", "Opportunity identification", "Startup development"],
  },
];

const pathway = [
  { step: "Learn", detail: "Join TSAP and build digital and professional skills." },
  { step: "Package", detail: "Use Skills-to-Income to turn your skill into a paid service." },
  { step: "Become an Agent", detail: "Join the TERMINO-X Digital Agent Network." },
  { step: "Earn", detail: "Refer businesses to TERMINO-X and earn commission." },
];

function Nav() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#packages", label: "Packages" },
    { href: "#programs", label: "Programs" },
    { href: "#agents", label: "Agent Network" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo.url} alt="TERMINO-X LTD logo" className="h-9 w-auto" />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="rounded-full">
          <a href="#contact">
            Get started <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand">
      <img
        src={heroImage}
        alt="TERMINO-X consultants advising a business team in Kigali"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-brand opacity-80" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-drift"
        style={{ animationDelay: "-6s" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div>
          <span className="inline-flex animate-rise-in items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
            TERMINO-X LTD · Kigali, Rwanda
          </span>
          <h1
            className="mt-6 animate-rise-in text-4xl font-extrabold leading-[1.05] text-primary-foreground sm:text-5xl md:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            From skills &amp; ideas to{" "}
            <span className="text-shimmer">income, business &amp; growth</span>
          </h1>
          <p
            className="mt-6 max-w-xl animate-rise-in text-base leading-relaxed text-primary-foreground/85 sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            TERMINO-X LTD is a business growth and skills development company helping individuals,
            entrepreneurs and organizations turn ideas, skills and opportunities into practical
            income, business solutions and sustainable growth.
          </p>
          <div
            className="mt-9 flex animate-rise-in flex-wrap gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full shadow-glow transition-transform hover:scale-105"
            >
              <a href="#contact">Request a service</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent text-primary-foreground transition-transform hover:scale-105 hover:bg-white/10 hover:text-primary-foreground"
            >
              <a href="#programs">Explore programs</a>
            </Button>
          </div>
          <div
            className="mt-10 flex animate-rise-in flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/75"
            style={{ animationDelay: "480ms" }}
          >
            {[
              "Business Solutions",
              "Sales & Marketing",
              "Skills Development",
              "Skills-to-Income",
              "Digital & AI",
              "Sector Training",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className="w-full animate-rise-in rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur"
            style={{ animationDelay: "300ms" }}
          >
            <img
              src={logo.url}
              alt="TERMINO-X brand mark"
              className="mx-auto h-24 w-auto animate-float-slow"
            />
            <div className="mt-8 space-y-4">
              {[
                ["Business & Professional Services", "Plans, profiles, proposals, pitch decks"],
                ["Learning & Accelerators", "Sales, TSAP, Skills-to-Income"],
                ["Digital Agent Network", "Refer businesses, earn commission"],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl bg-background/95 p-4 transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="text-sm font-semibold text-ink">{t}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function SectionHead({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-muted-foreground">{text}</p> : null}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-soft py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHead
            eyebrow="Professional & Business Services"
            title="Practical services you can order today"
            text="Delivered directly for individuals, entrepreneurs and SMEs."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((g, idx) => (
            <Reveal key={g.title} delay={idx * 90} className="h-full">
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <g.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{g.title}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <Reveal delay={serviceGroups.length * 90} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 shadow-glow">
              <img
                src={servicesImage}
                alt="Business plans, proposals and pitch decks prepared by TERMINO-X"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand opacity-85" />
              <div className="relative">
                <h3 className="text-lg font-semibold text-primary-foreground">
                  Not sure what you need?
                </h3>
                <p className="mt-3 text-sm text-primary-foreground/85">
                  Send a message on WhatsApp and we will advise the right service for your situation.
                </p>
              </div>
              <Button
                asChild
                variant="secondary"
                className="relative mt-6 rounded-full transition-transform hover:scale-105"
              >
                <a
                  href={waLink("Hello TERMINO-X, I need advice on which service fits my business.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


const stats = [
  { value: "5", label: "Service areas" },
  { value: "6", label: "Accelerator programs" },
  { value: "100%", label: "Practical, hands-on delivery" },
  { value: "Kigali", label: "Based in Rwanda" },
];

function Showcase() {
  return (
    <section className="relative overflow-hidden bg-brand py-16">
      <img
        src={pitchImage}
        alt="TERMINO-X client presenting a pitch deck to investors"
        loading="lazy"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-brand opacity-75" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-0 h-64 w-64 rounded-full bg-accent/25 blur-3xl animate-drift"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-xl font-semibold leading-relaxed text-primary-foreground sm:text-2xl">
            We prepare you for the rooms that matter — investors, banks, partners and customers.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur transition-transform duration-300 hover:-translate-y-1.5">
                <p className="text-3xl font-extrabold text-primary-foreground">{s.value}</p>
                <p className="mt-2 text-sm text-primary-foreground/80">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="packages" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHead
            eyebrow="Simple Offers"
            title="Five packages, one clear choice"
            text="Pick the package that matches where you are right now."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="group relative mt-12 overflow-hidden rounded-3xl shadow-card">
            <img
              src={packagesImage}
              alt="Entrepreneurs planning their business growth together in Kigali"
              loading="lazy"
              width={1600}
              height={912}
              className="h-56 w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 sm:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            <div className="absolute bottom-0 p-6 sm:p-8">
              <p className="text-lg font-semibold text-primary-foreground sm:text-2xl">
                Wherever you are starting from, there is a package for you.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow">
                <span className="text-2xl transition-transform duration-300 group-hover:scale-125">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{p.who}</p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.includes}</p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-6 rounded-full transition-transform hover:scale-105"
                >
                  <a
                    href={waLink(`Hello TERMINO-X, I am interested in the "${p.title}" package.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Request this package
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function Programs() {
  return (
    <section id="programs" className="bg-soft py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHead
            eyebrow="TERMINO-X Programs"
            title="Accelerators that lead to income"
            text="Learn a skill, package it, sell it and grow it."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="group relative mt-12 overflow-hidden rounded-3xl shadow-card">
            <img
              src={classroomImage}
              alt="Trainees learning digital and business skills in a TERMINO-X classroom"
              loading="lazy"
              width={1600}
              height={912}
              className="h-52 w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 sm:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-md items-center p-6 sm:p-10">
              <div>
                <p className="text-xl font-bold text-primary-foreground sm:text-3xl">
                  Learn. Package. Sell. Earn.
                </p>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  Practical training with real income pathways.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {programs.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 110} className="h-full">
            <div
              className={`flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-2 ${
                p.featured
                  ? "border-transparent bg-brand shadow-glow"
                  : "border-border bg-card shadow-card hover:shadow-glow"
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                  p.featured ? "animate-float-slow bg-white/15" : "bg-secondary"
                }`}
              >

                <p.icon
                  className={`h-5 w-5 ${p.featured ? "text-primary-foreground" : "text-primary"}`}
                />
              </div>
              <h3
                className={`mt-5 text-xl font-semibold ${
                  p.featured ? "text-primary-foreground" : "text-ink"
                }`}
              >
                {p.name}
              </h3>
              <p
                className={`mt-2 text-lg font-bold ${
                  p.featured ? "text-primary-foreground" : "text-primary"
                }`}
              >
                {p.price}
              </p>
              <p
                className={`mt-3 text-sm ${
                  p.featured ? "text-primary-foreground/85" : "text-muted-foreground"
                }`}
              >
                {p.purpose}
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className={`flex gap-2 text-sm ${
                      p.featured ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        p.featured ? "text-primary-foreground" : "text-accent"
                      }`}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={p.featured ? "secondary" : "default"}
                className="mt-7 rounded-full"
              >
                <a
                  href={waLink(`Hello TERMINO-X, I want to enroll in the ${p.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enroll now
                </a>
              </Button>
            </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 text-center text-2xl font-bold text-ink">Sector Accelerators</h3>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {sectorPrograms.map((s, idx) => (
            <Reveal key={s.name} delay={idx * 110} className="h-full">
            <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow">

              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold text-primary">{s.price}</span>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-ink">{s.name}</h4>
              <ul className="mt-4 space-y-2">
                {s.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full rounded-full">
                <a
                  href={waLink(`Hello TERMINO-X, I am interested in the ${s.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask about this
                </a>
              </Button>
            </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}

function AgentNetwork() {
  return (
    <section id="agents" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Digital Agent Network
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Earn by connecting businesses to TERMINO-X
            </h2>
            <p className="mt-4 text-muted-foreground">
              Become a TERMINO-X Digital Agent. Identify businesses that need a website, business
              plan, digital marketing, AI training, sales training or a company profile, refer them
              to TERMINO-X, and earn through an agreed commission structure.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Network className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-ink">
                TERMINO-X trains · Agents find opportunities · TERMINO-X delivers · Agents earn
              </span>
            </div>
            <Button asChild size="lg" className="mt-8 rounded-full">
              <a
                href={waLink("Hello TERMINO-X, I want to become a TERMINO-X Digital Agent.")}
                target="_blank"
                rel="noreferrer"
              >
                Become an agent
              </a>
            </Button>
          </div>
          <ol className="space-y-4">
            {pathway.map((p, i) => (
              <li
                key={p.step}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">{p.step}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const interests = [
  "Business plan",
  "Company profile",
  "Business / project proposal",
  "Pitch deck & presentation",
  "Market research",
  "Sales & marketing consulting",
  "Digital & AI services",
  "Sales & Marketing Accelerator (100,000 RWF)",
  "TSAP (150,000 RWF)",
  "Skills-to-Income Accelerator (180,000 RWF)",
  "Sector Accelerator (250,000 RWF)",
  "Digital Agent Network",
  "Other",
];

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Please enter your name.");
    if (phone.trim().length < 7) return setError("Please enter a phone number we can reach you on.");
    if (!interest) return setError("Please choose what you need.");
    if (message.trim().length < 5) return setError("Please add a short message.");
    setError("");
    const text = [
      "Hello TERMINO-X LTD,",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : null,
      `Interested in: ${interest}`,
      "",
      `Message: ${message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-soft py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Contact"
          title="Tell us what you need"
          text="Fill the form and your message opens directly in WhatsApp."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-ink">Location</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Gatenga, Kicukiro District
                    <br />
                    Kigali, Rwanda
                  </p>
                </div>
              </div>
            </div>
            <a
              href={waLink("Hello TERMINO-X LTD, I would like to discuss my project.")}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary"
            >
              <div className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-ink">Phone & WhatsApp</p>
                  <p className="mt-1 text-sm text-muted-foreground">+250 781 065 367</p>
                </div>
              </div>
            </a>
            <a
              href="mailto:info@terminox.rw"
              className="block rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary"
            >
              <div className="flex gap-4">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-ink">Email</p>
                  <p className="mt-1 text-sm text-muted-foreground">info@terminox.rw</p>
                </div>
              </div>
            </a>
          </div>

          <form
            onSubmit={submit}
            className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  value={name}
                  maxLength={100}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={phone}
                  maxLength={25}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+250 7.. ... ..."
                />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                value={email}
                maxLength={255}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <div className="mt-4 space-y-2">
              <Label htmlFor="interest">What do you need?</Label>
              <Select value={interest} onValueChange={setInterest}>
                <SelectTrigger id="interest">
                  <SelectValue placeholder="Choose a service or program" />
                </SelectTrigger>
                <SelectContent>
                  {interests.map((i) => (
                    <SelectItem key={i} value={i}>
                      {i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                maxLength={1000}
                rows={4}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us briefly about your business or goal"
              />
            </div>
            {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}
            <Button type="submit" size="lg" className="mt-6 w-full rounded-full">
              <MessageCircle className="mr-2 h-4 w-4" /> Send on WhatsApp
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Your details are sent as a WhatsApp message to +250 781 065 367.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <img src={logo.url} alt="TERMINO-X LTD" className="h-10 w-auto" />
        <p className="max-w-xl text-sm text-primary-foreground/80">
          Business Solutions · Sales & Marketing · Skills Development · Skills-to-Income · Digital &
          AI · Sector Training
        </p>
        <p className="text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} TERMINO-X LTD · Gatenga, Kicukiro · Kigali, Rwanda
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Packages />
        <Programs />
        <AgentNetwork />
        <Contact />
      </main>
      <Footer />
      <a
        href={waLink("Hello TERMINO-X LTD, I would like more information.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand shadow-glow transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </a>
    </div>
  );
}
