import Link from 'next/link'
import {
  ScanSearch,
  SlidersHorizontal,
  Radio,
  CalendarClock,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
} from 'lucide-react'

const TILES = [
  {
    icon: ScanSearch,
    title: 'Advanced Chart Analysis',
    desc: 'Deep technical reads across OTC and real pairs, surfacing high-probability setups.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Instant Trade Management',
    desc: 'Open, monitor and adjust instant trades from a single control room.',
  },
  {
    icon: Radio,
    title: 'Live 24/7 Signals',
    desc: 'Round-the-clock signals delivered the moment opportunity appears.',
  },
  {
    icon: CalendarClock,
    title: 'Future Signals',
    desc: 'Forward-looking entries timed for upcoming moves and trend shifts.',
  },
  {
    icon: Cpu,
    title: 'AI-Driven Accuracy',
    desc: 'Models weigh price action, volume and momentum for signal precision.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management',
    desc: 'Confidence scoring helps you size positions and protect capital.',
  },
]

export function FeatureGrid() {
  return (
    <section id="features" className="scroll-mt-16 py-10 sm:py-16">
      <div className="mx-auto max-w-[1600px] px-3 sm:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          The toolkit
        </p>
        <h2 className="mt-3 max-w-3xl text-balance text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] sm:text-5xl">
          Everything you need to trade with precision
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          A complete algorithmic trading suite engineered for accuracy, speed
          and consistency.
        </p>

        {/* feature banners */}
        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          <Link
            href="/login"
            className="group relative overflow-hidden rounded-2xl border border-border bg-card lg:col-span-2"
          >
            <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1598040795256-03d22d952f4d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxmaW5hbmNpYWwlMjBkYXRhJTIwbmVvbnxlbnwwfHx8YmxhY2t8MTc4NjMwNjk4MHww&ixlib=rb-4.1.0&q=85"
                alt="Vertex AI engine"
                loading="lazy"
                className="h-full w-full object-cover opacity-70 saturate-[0.6] contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8">
                <span className="mono-label text-primary">Vision engine</span>
                <h3 className="mt-2 max-w-md text-2xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-4xl">
                  Upload a chart. Get a verdict.
                </h3>
                <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
                  Vertex reads candles, structure and momentum from a raw
                  screenshot and returns direction, confidence and expiry.
                </p>
                <span className="mt-4 inline-flex h-10 w-fit items-center gap-1.5 rounded-full bg-primary px-5 text-[12px] font-bold uppercase tracking-wide text-primary-foreground">
                  Try now
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/login"
            className="group relative overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:h-full lg:min-h-[260px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxjcnlwdG8lMjB0cmFkaW5nJTIwc2NyZWVufGVufDB8fHxibGFja3wxNzg2MzA2OTgwfDA&ixlib=rb-4.1.0&q=85"
                alt="Live signals"
                loading="lazy"
                className="h-full w-full object-cover opacity-70 saturate-[0.5] contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                <span className="mono-label text-primary">Always on</span>
                <h3 className="mt-2 text-xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-2xl">
                  Signals around the clock
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  Live and future signals for OTC and real markets, refreshed
                  continuously.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* small tiles */}
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((t) => (
            <div
              key={t.title}
              className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/25">
                <t.icon className="h-4.5 w-4.5" />
              </span>
              <h3 className="mt-4 text-[13px] font-extrabold uppercase tracking-tight transition-colors group-hover:text-primary">
                {t.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EngineBanner() {
  return (
    <section id="engine" className="scroll-mt-16 pb-10 sm:pb-16">
      <div className="mx-auto max-w-[1600px] px-3 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid items-stretch md:grid-cols-2">
            <div className="order-2 p-6 sm:p-10 md:order-1">
              <span className="mono-label text-primary">Vertex engine v4</span>
              <h2 className="mt-3 text-2xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] sm:text-4xl">
                One engine for every
                <br />
                market you trade
              </h2>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                Forex, OTC, crypto and metals in a single context. Vertex fuses
                technical structure with the economic calendar to decide when to
                stay out — and when to strike.
              </p>
              <div className="mt-6 grid max-w-sm grid-cols-2 gap-3">
                {[
                  ['4', 'AI tools'],
                  ['50+', 'Pairs covered'],
                  ['6 AM', 'Daily quota reset'],
                  ['0', 'Setup required'],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl border border-border p-3">
                    <p className="text-lg font-extrabold tracking-tight">{v}</p>
                    <p className="mono-label mt-1">{l}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/registration"
                className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-[12px] font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Explore the engine
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="relative order-1 min-h-[220px] md:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1607799632518-da91dd151b38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHw0fHx0cmFkaW5nJTIwY2hhcnQlMjBkYXJrfGVufDB8fHxibGFja3wxNzg2MzA2OTgwfDA&ixlib=rb-4.1.0&q=85"
                alt="Vertex engine"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-70 saturate-[0.5] contrast-125"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent md:bg-gradient-to-r md:from-card md:via-card/20 md:to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
