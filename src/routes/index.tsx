import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mic,
  Sparkles,
  BarChart3,
  Check,
  Quote,
  Zap,
  Users,
  Headphones,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SpeakyWidget } from "@/components/SpeakyWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Speaky — A 30-second voice intro for every visitor" },
      {
        name: "description",
        content:
          "Speaky is a voice onboarding widget that greets every website visitor with a personalized 30-second intro from your founder. Convert more, faster.",
      },
      { property: "og:title", content: "Speaky — Voice onboarding for SaaS" },
      {
        property: "og:description",
        content:
          "Greet every visitor with a personal 30-second voice intro. Lift activation by 38%.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <LogoStrip />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <SpeakyWidget />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,var(--color-brand-sky-soft),transparent)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="speaky-pulse h-1.5 w-1.5 rounded-full bg-brand-green" />
            Now in private beta — 200 teams onboarded
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl"
          >
            A <span className="text-brand-orange">30-second</span> voice intro
            for every visitor.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-xl text-lg text-muted-foreground"
          >
            Speaky drops a small widget on your site that greets visitors with a
            real, personalized voice from your founder. More trust, more
            activation, fewer ghosted demos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition hover:brightness-95"
            >
              Start free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/simulator"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition hover:bg-secondary"
            >
              See live demo
            </Link>
          </motion.div>
          <div className="mt-6 flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand-green" /> No code required</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand-green" /> 4-min setup</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand-green" /> GDPR-ready</span>
          </div>
        </div>

        {/* Hero preview card with mock browser + widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-2xl border border-border bg-surface p-2 shadow-2xl shadow-brand-navy/10">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <div className="ml-3 flex-1 rounded-md bg-secondary px-3 py-1 text-xs text-muted-foreground">
                acme.com
              </div>
            </div>
            <div className="relative h-[380px] overflow-hidden rounded-xl bg-gradient-to-br from-brand-sky-soft via-surface to-brand-orange-soft p-6">
              <div className="h-3 w-32 rounded-full bg-foreground/10" />
              <div className="mt-3 h-8 w-3/4 rounded-md bg-foreground/15" />
              <div className="mt-2 h-3 w-2/3 rounded-full bg-foreground/10" />
              <div className="mt-6 grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-20 rounded-lg bg-surface/70" />
                ))}
              </div>
              {/* Embedded widget preview */}
              <div className="absolute bottom-4 right-4 w-[260px] rounded-xl border border-border bg-surface shadow-xl">
                <div className="flex items-center gap-2 rounded-t-xl bg-brand-navy px-3 py-2 text-white">
                  <span className="speaky-pulse h-2 w-2 rounded-full bg-brand-green" />
                  <span className="text-xs font-medium">Personal intro · 30 sec</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-3">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span
                      key={i}
                      className="wave-bar w-[2px] rounded-full bg-brand-orange"
                      style={{ height: `${10 + ((i * 5) % 14)}px`, animationDelay: `${i * 0.05}s` }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 rounded-b-xl bg-brand-navy px-3 py-2 text-white">
                  <span className="speaky-pulse h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span className="text-[11px] text-white/85">Most teams set this up in 4 min →</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const logos = ["Linear", "Notion", "Loom", "Vercel", "Framer", "Cal.com"];
  return (
    <section className="border-y border-border bg-surface-muted/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 py-6 text-sm font-medium text-muted-foreground">
        <span className="text-xs uppercase tracking-wider text-muted-foreground/70">
          Trusted by teams at
        </span>
        {logos.map((l) => (
          <span key={l} className="font-display text-base font-semibold text-foreground/70">
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Mic,
      title: "Record once",
      desc: "Drop in a 30-sec voice clip from your founder. We handle the rest.",
      color: "bg-brand-orange-soft text-brand-orange",
    },
    {
      icon: Sparkles,
      title: "We personalize it",
      desc: "Speaky adapts the intro to each visitor's name and context — live.",
      color: "bg-brand-sky-soft text-brand-sky",
    },
    {
      icon: BarChart3,
      title: "Watch it convert",
      desc: "Get listen rates, retention uplift and a funnel of every interaction.",
      color: "bg-brand-green-soft text-brand-green",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24" id="how">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
          How it works
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight">From silent site to spoken welcome in minutes.</h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-surface p-7"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.color}`}>
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "For tinkerers and side projects.",
      features: ["1 voice library slot", "500 widget loads / mo", "Basic analytics", "Speaky branding"],
      cta: "Start free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/ month",
      desc: "For growing startups closing real deals.",
      features: ["5 voice slots", "25k widget loads / mo", "Full funnel analytics", "Custom hook text", "Remove branding"],
      cta: "Start 14-day trial",
      highlight: true,
    },
    {
      name: "Scale",
      price: "$99",
      period: "/ month",
      desc: "For teams with heavy traffic and multiple sites.",
      features: ["Unlimited voices", "250k widget loads / mo", "A/B testing", "Visitor segments", "Priority support"],
      cta: "Talk to sales",
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="bg-surface-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Pricing</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">Simple plans. Real ROI.</h2>
          <p className="mt-3 text-muted-foreground">Start free. Upgrade once you see the lift.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-8 ${
                t.highlight
                  ? "border-brand-navy bg-brand-navy text-white shadow-2xl shadow-brand-navy/20"
                  : "border-border bg-surface"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className={`mt-1 text-sm ${t.highlight ? "text-white/70" : "text-muted-foreground"}`}>{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">{t.price}</span>
                <span className={`text-sm ${t.highlight ? "text-white/60" : "text-muted-foreground"}`}>{t.period}</span>
              </div>
              <Link
                to="/dashboard"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  t.highlight
                    ? "bg-brand-orange text-white hover:brightness-95"
                    : "border border-border bg-surface hover:bg-secondary"
                }`}
              >
                {t.cta}
              </Link>
              <ul className="mt-7 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.highlight ? "text-brand-green" : "text-brand-green"}`} />
                    <span className={t.highlight ? "text-white/90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: "Listen rate hit 41% in week one. Our demo bookings nearly doubled — without changing anything else on the site.",
      name: "Priya Patel",
      role: "Founder, Hatchwise",
      icon: Zap,
    },
    {
      quote: "Felt weird to record at first. Now I can't imagine our site without it. It's the closest thing to being there.",
      name: "Marco Liu",
      role: "CEO, Plotline",
      icon: Headphones,
    },
    {
      quote: "Setup took 4 minutes. Retention uplift the next month was 18%. The math was easy.",
      name: "Anna Rivera",
      role: "Head of Growth, Tendril",
      icon: Users,
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Loved by founders</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight">Real voices, real lift.</h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <div key={t.name} className="flex flex-col rounded-2xl border border-border bg-surface p-7">
            <Quote className="h-6 w-6 text-brand-orange" />
            <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-sky-soft text-brand-navy">
                <t.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-brand-navy px-10 py-16 text-center text-white shadow-2xl">
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Your visitors deserve a hello.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Give them one in your own voice. Set up Speaky in 4 minutes — free forever for small sites.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold shadow-lg transition hover:brightness-95"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/simulator"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            Try the live widget
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-navy text-white">
            <Mic className="h-3.5 w-3.5" />
          </span>
          <span className="font-display font-semibold text-foreground">Speaky</span>
          <span className="ml-2">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
