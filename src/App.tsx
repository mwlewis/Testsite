import { motion } from "framer-motion";

export default function VaultHome() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-40 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8" />
            <span className="font-extrabold tracking-tight">VAULT</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {["Solutions","How it works","Rates","For Brokers","Security","Help"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, "")}`} className="text-sm text-neutral-700 hover:text-neutral-900">
                {item}
              </a>
            ))}
          </nav>
          <a href="#get-started" className="hidden md:inline-flex btn-primary">Get started</a>
        </div>
      </header>

      <HeroSection />
      <SolutionsSection />
      <HowSection />
      <RatesSection />
      <BrokersSection />
      <SecuritySection />
      <FAQSection />
    </div>
  );
}

function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-label="Vault logo mark" role="img">
      <polygon points="60,6 82,18 82,42 60,54 38,42 38,18" fill="#C9CBCC" />
      <polygon points="72,46 94,58 94,82 72,94 50,82 50,58" fill="#7A7A7A" />
      <polygon points="16,72 38,84 38,108 16,120 0,108 0,84" fill="#3F6F8E" />
    </svg>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]"
          >
            Financing that feels <span className="block">simple, fast, and fair.</span>
          </motion.h1>
          <p className="mt-4 text-lg text-neutral-700 max-w-prose">
            Get approved in minutes, funded in hours. Transparent rates, no surprises, and support when you need it.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#rate" className="btn-primary">Check your rate</a>
            <a href="#brokers" className="btn-secondary">I'm a broker</a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <figure className="relative aspect-video w-full rounded-3xl overflow-hidden border">
      <img src="/vault-hero.jpg" alt="Vault hero" className="absolute inset-0 h-full w-full object-cover" />
    </figure>
  );
}

function Section({ id, children, alt }: { id?: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={alt ? "py-20 bg-vault-blueLight" : "py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{children}</h2>;
}

function SolutionsSection() {
  const Card = ({ title, bullets }: { title: string; bullets: string[] }) => (
    <div className="border border-neutral-200 rounded-2xl p-5 bg-white shadow-sm">
      <h4 className="text-xl font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-neutral-700">
        {bullets.map((b) => <li key={b} className="flex gap-2"><span>✓</span>{b}</li>)}
      </ul>
      <a href="#" className="mt-4 inline-flex items-center text-sm font-semibold text-vault-blue hover:underline">Learn more</a>
    </div>
  );
  return (
    <Section id="solutions" alt>
      <H2>Solutions built for brokers, vendors & borrowers</H2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <Card title="Equipment Leasing" bullets={["Wide range of equipment","Fast approvals","Flexible structures"]} />
        <Card title="Business Financing" bullets={["$5k–$300k","Weekly payments","Funding in as little as 24h"]} />
        <Card title="Mortgages" bullets={["First & second","Residential & commercial","Alternative lending"]} />
      </div>
    </Section>
  );
}

function HowSection() {
  return (
    <Section id="how">
      <H2>How it works</H2>
      <ul className="mt-6 space-y-3 text-neutral-800">
        {["Apply in minutes", "Get personalized offers", "Fast funding"].map((t) => (
          <li key={t} className="flex gap-2"><span>✓</span>{t}</li>
        ))}
      </ul>
    </Section>
  );
}

function RatesSection() {
  return (
    <Section id="rates" alt>
      <H2>Honest rates, explained up front</H2>
      <p className="mt-3 text-neutral-700">We keep pricing transparent—no surprises.</p>
      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border p-4 bg-white">
          <p className="text-sm text-neutral-600">From</p>
          <p className="text-3xl font-extrabold">7.99%</p>
          <p className="text-sm text-neutral-600">term loans</p>
        </div>
        <div className="rounded-2xl border p-4 bg-white">
          <p className="text-sm text-neutral-600">Up to</p>
          <p className="text-3xl font-extrabold">$300k</p>
          <p className="text-sm text-neutral-600">funding</p>
        </div>
        <div className="rounded-2xl border p-4 bg-white">
          <p className="text-sm text-neutral-600">As fast as</p>
          <p className="text-3xl font-extrabold">24h</p>
          <p className="text-sm text-neutral-600">payout</p>
        </div>
      </div>
    </Section>
  );
}

function BrokersSection() {
  return (
    <Section id="forbrokers">
      <H2>Built for brokers and vendors</H2>
      <p className="mt-3 text-neutral-700">White‑label portals, clean docs, same‑day payouts.</p>
      <a href="#partner" className="mt-6 btn-primary inline-flex">Partner with Vault</a>
    </Section>
  );
}

function SecuritySection() {
  return (
    <Section id="security" alt>
      <H2>Security isn’t a feature. It’s the foundation.</H2>
      <p className="mt-3 text-neutral-700">Bank‑grade encryption, segregated accounts, SOC 2 processes.</p>
    </Section>
  );
}

function FAQSection() {
  const items: [string,string][] = [
    ["Will checking my rate affect my credit score?", "No. We use soft pulls for pre‑qualification."],
    ["How fast can I get funded?", "As little as 24 hours after final approval."],
    ["Are there prepayment penalties?", "No prepayment penalties on most programs."],
  ];
  return (
    <Section id="help">
      <H2>FAQs</H2>
      <div className="mt-6 divide-y">
        {items.map(([q,a]) => (
          <details key={q} className="py-4 group">
            <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
              {q}<span className="ml-2">›</span>
            </summary>
            <p className="mt-2 text-neutral-700">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
