import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MapPin,
  MessageCircle,
  Network,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";
import logo from "@/assets/termino-x-logo.png.asset.json";
import heroImage from "@/assets/hero-consulting.jpg";
import trainingImage from "@/assets/programs-training.jpg";
import teamImage from "@/assets/packages-team.jpg";
import kigaliImage from "@/assets/kigali-city.jpg";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TERMINO-X | Our Story & Mission" },
      {
        name: "description",
        content:
          "Meet TERMINO-X LTD in Kigali and discover our story, team, mission, and journey helping people turn skills and ideas into income and growth.",
      },
      { property: "og:title", content: "About TERMINO-X | Our Story & Mission" },
      {
        property: "og:description",
        content:
          "Our Kigali story, practical team, and journey from business support to skills-to-income programs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://terminoxconsultrw.lovable.app/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terminoxconsultrw.lovable.app/about" }],
  }),
  component: AboutPage,
});

const WHATSAPP_NUMBER = "250781065367";

const teamFunctions = [
  {
    icon: BriefcaseBusiness,
    title: "Business Growth",
    focus: "Strategy, documentation & investment readiness",
    description:
      "Our business team turns early ideas and existing enterprises into clear plans, profiles, proposals, systems and growth strategies.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Facilitation",
    focus: "Practical skills that lead to action",
    description:
      "Our facilitators deliver hands-on learning in sales, digital productivity, entrepreneurship and skills-to-income development.",
  },
  {
    icon: BarChart3,
    title: "Sales & Digital",
    focus: "Customer growth, tools & execution",
    description:
      "Our sales and digital specialists help clients find customers, communicate their value and use modern tools more productively.",
  },
  {
    icon: Network,
    title: "Agent Network",
    focus: "Local opportunity & wider access",
    description:
      "Our agents connect businesses with the support they need while creating an accessible pathway to learn, refer and earn.",
  },
];

const milestones = [
  {
    label: "The need",
    title: "A gap between potential and opportunity",
    description:
      "We saw capable people with useful skills and promising ideas, but without the practical documents, market access and guidance needed to move forward.",
    icon: Lightbulb,
  },
  {
    label: "The response",
    title: "Practical business support",
    description:
      "TERMINO-X brought business planning, proposals, company profiles, pitch preparation, sales and operational support into one accessible service.",
    icon: BriefcaseBusiness,
  },
  {
    label: "The expansion",
    title: "Accelerators built for action",
    description:
      "We expanded into sales, professional skills and skills-to-income programs designed around practical outcomes rather than theory alone.",
    icon: Rocket,
  },
  {
    label: "Today",
    title: "A connected growth platform",
    description:
      "From Kigali, our services, training and Digital Agent Network now connect individuals, entrepreneurs and organizations with clearer paths to income and growth.",
    icon: Network,
  },
];

const values = [
  { icon: Target, title: "Practical outcomes", text: "Work people can use, present, sell or build on." },
  { icon: HeartHandshake, title: "Accessible support", text: "Clear guidance shaped around real needs and budgets." },
  { icon: Sparkles, title: "Modern opportunity", text: "Digital tools, AI and market-ready skills for today." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHeader />
      <main>
        <AboutHero />
        <Story />
        <Team />
        <Journey />
        <AboutCta />
      </main>
      <AboutFooter />
    </div>
  );
}

function AboutHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" aria-label="TERMINO-X home">
          <img src={logo.url} alt="TERMINO-X LTD logo" className="h-9 w-auto" />
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6">
          <span className="hidden text-sm font-semibold text-primary sm:inline">About us</span>
          <Link to="/" hash="services" className="hidden text-sm font-medium text-muted-foreground hover:text-primary md:inline">
            Services
          </Link>
          <Button asChild size="sm" className="rounded-full">
            <Link to="/" hash="contact">Talk to us <ArrowRight /></Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function AboutHero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-brand sm:min-h-[660px]">
      <img
        src={heroImage}
        alt="TERMINO-X consultants working with a business team in Kigali"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-brand opacity-75" />
      <div aria-hidden className="animate-drift absolute -right-24 top-16 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-end px-5 py-16 sm:min-h-[660px] sm:py-20">
        <div className="max-w-3xl">
          <Link
            to="/"
            className="animate-rise-in inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
          <p className="mt-10 animate-rise-in text-sm font-bold uppercase tracking-widest text-primary-foreground/75" style={{ animationDelay: "80ms" }}>
            Our story · Kigali, Rwanda
          </p>
          <h1 className="mt-4 animate-rise-in text-4xl font-extrabold leading-tight text-primary-foreground sm:text-6xl" style={{ animationDelay: "160ms" }}>
            We turn potential into <span className="text-shimmer">practical progress.</span>
          </h1>
          <p className="mt-6 max-w-2xl animate-rise-in text-lg leading-relaxed text-primary-foreground/85" style={{ animationDelay: "260ms" }}>
            TERMINO-X LTD is a Kigali-based business growth and skills development company. We help people move from an idea, skill or challenge to a useful solution, stronger income and sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={trainingImage}
                alt="A practical TERMINO-X training session"
                width={1600}
                height={900}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105 sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-brand p-6 text-primary-foreground">
                <p className="text-sm font-semibold uppercase tracking-widest opacity-75">Our belief</p>
                <p className="mt-2 text-xl font-bold">Knowledge matters most when it becomes action.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Why TERMINO-X began</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Built around a simple, urgent idea</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Across Rwanda, people have ideas worth building and skills worth paying for. Many businesses also have real potential, yet struggle to express their value, organize their operations, reach customers or prepare for investment.
              </p>
              <p>
                TERMINO-X exists to close that gap. We combine business services with practical learning so a client does not leave with advice alone, but with a plan, document, strategy, skill or next step they can use.
              </p>
              <p>
                That approach connects everything we do—from business plans and pitch decks to sales training, digital tools, sector programs and our Skills-to-Income pathway.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-lg border border-border bg-card p-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 text-sm font-bold text-card-foreground">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">The team behind the work</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Different strengths, one practical mission</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            TERMINO-X brings together the functions clients need to move from uncertainty to action. Each part of the team contributes to one connected client journey.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamFunctions.map(({ icon: Icon, title, focus, description }, index) => (
            <Reveal key={title} delay={index * 90}>
              <article className="group h-full rounded-lg border border-border bg-card p-6 shadow-card transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-card-foreground">{title}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-primary">{focus}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={180} className="mt-10">
          <div className="grid overflow-hidden rounded-2xl bg-brand lg:grid-cols-2">
            <img src={teamImage} alt="A collaborative business team working together" loading="lazy" width={1600} height={1000} className="h-full min-h-72 w-full object-cover" />
            <div className="flex flex-col justify-center p-8 text-primary-foreground sm:p-12">
              <CheckCircle2 className="h-8 w-8 text-accent" />
              <h3 className="mt-5 text-2xl font-bold">A team measured by what clients can do next</h3>
              <p className="mt-4 leading-relaxed text-primary-foreground/80">
                Our standard is practical: clearer decisions, stronger documents, better sales conversations, useful skills and a realistic route to the next opportunity.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Our journey</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Milestones shaped by the people we serve</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our journey is not only a sequence of services. It is the continued development of a practical model for turning potential into progress.
          </p>
        </Reveal>
        <ol className="relative mt-14 space-y-7 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-border sm:before:left-8">
          {milestones.map(({ label, title, description, icon: Icon }, index) => (
            <li key={title} className="relative pl-16 sm:pl-20">
              <Reveal delay={index * 100}>
                <span className="absolute left-0 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-card sm:h-16 sm:w-16">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <article className="rounded-lg border border-border bg-card p-6 shadow-card transition duration-300 hover:border-primary/35 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{label}</p>
                  <h3 className="mt-2 text-xl font-bold text-card-foreground sm:text-2xl">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AboutCta() {
  const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello TERMINO-X LTD, I would like to learn more about your work.")}`;
  return (
    <section className="relative overflow-hidden py-24">
      <img src={kigaliImage} alt="Kigali skyline and green hills" loading="lazy" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-brand opacity-85" />
      <Reveal className="relative mx-auto max-w-3xl px-5 text-center text-primary-foreground">
        <MapPin className="mx-auto h-8 w-8 text-accent" />
        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-primary-foreground/70">Kigali, Rwanda</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Let’s turn your next step into progress.</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-foreground/80">
          Whether you are building a business, preparing an opportunity or turning a skill into income, our team is ready to listen.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="secondary" className="rounded-full transition-transform hover:scale-105">
            <a href={whatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle /> Chat on WhatsApp</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/" hash="programs">Explore our programs</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

function AboutFooter() {
  return (
    <footer className="bg-brand py-10 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-center sm:flex-row sm:text-left">
        <div>
          <img src={logo.url} alt="TERMINO-X LTD" className="h-9 w-auto" />
          <p className="mt-3 text-xs text-primary-foreground/60">Gatenga, Kicukiro · Kigali, Rwanda</p>
        </div>
        <div className="flex items-center gap-5 text-sm font-medium">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/" hash="services" className="hover:text-accent">Services</Link>
          <Link to="/" hash="contact" className="hover:text-accent">Contact</Link>
        </div>
      </div>
    </footer>
  );
}