import Link from 'next/link'
import { ArrowUpRight, Activity, Zap, Target } from 'lucide-react'

const HERO_CARDS = [
  {
    title: 'OTC Chart Analyzer',
    desc: 'Upload a chart. Get a verdict in seconds.',
    img: 'https://images.unsplash.com/photo-1618423644156-1f5226a6c5fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHx0cmFkaW5nJTIwY2hhcnQlMjBkYXJrfGVufDB8fHxibGFja3wxNzg2MzA2OTgwfDA&ixlib=rb-4.1.0&q=85',
    href: '/login',
    tag: 'Vision AI',
  },
  {
    title: 'Live Signals 24/7',
    desc: 'Round-the-clock entries the moment they appear.',
    img: 'https://images.unsplash.com/photo-1607799632518-da91dd151b38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHw0fHx0cmFkaW5nJTIwY2hhcnQlMjBkYXJrfGVufDB8fHxibGFja3wxNzg2MzA2OTgwfDA&ixlib=rb-4.1.0&q=85',
    href: '/login',
    tag: 'Live',
  },
  {
    title: 'Future Signals',
    desc: 'Forward-timed setups before the move starts.',
    img: 'https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxjcnlwdG8lMjB0cmFkaW5nJTIwc2NyZWVufGVufDB8fHxibGFja3wxNzg2MzA2OTgwfDA&ixlib=rb-4.1.0&q=85',
    href: '/login',
    tag: 'New',
  },
  {
    title: 'News Signals',
    desc: 'Fundamental bias from the economic calendar.',
    img: 'https://images.unsplash.com/photo-1548031061-76f86064a5ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxmaW5hbmNpYWwlMjBkYXRhJTIwbmVvbnxlbnwwfHx8YmxhY2t8MTc4NjMwNjk4MHww&ixlib=rb-4.1.0&q=85',
    href: '/login',
    tag: 'Calendar',
  },
]

const PAIRS = [
  'EUR/USD',
  'GBP/JPY',
  'BTC/USD',
  'XAU/USD',
  'USD/BDT',
  'AUD/CAD',
  'ETH/USD',
  'USD/JPY',
  'NZD/CHF',
  'EUR/GBP',
]

const STATS = [
  { icon: Target, value: '98.6%', label: 'Signal accuracy' },
  { icon: Activity, value: '24/7', label: 'Market scanning' },
  { icon: Zap, value: '<2s', label: 'Chart verdict' },
]

export function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-3 pt-10 sm:px-6 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              <span className="status-dot" />
              Algorithmic trading engine
            </span>

            <h1 className="mt-5 text-balance text-[13vw] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Trade smarter.
              <br />
              <span className="text-primary">Not harder.</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Vertex AI scans the markets in real time and delivers accurate,
              automated signals. No guesswork, no emotion — just clean,
              data-driven decisions built to grow your account.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/registration"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Get Vertex AI
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#pricing"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-7 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                View pricing
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card/60 p-3 sm:p-4"
                >
                  <s.icon className="h-4 w-4 text-primary" />
                  <p className="mt-2 text-lg font-extrabold tracking-tight sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mono-label mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHw0fHxjcnlwdG8lMjB0cmFkaW5nJTIwc2NyZWVufGVufDB8fHxibGFja3wxNzg2MzA2OTgwfDA&ixlib=rb-4.1.0&q=85"
                  alt="Vertex AI trading terminal"
                  className="h-full w-full object-cover opacity-70 saturate-[0.55] contrast-125"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />

                {/* floating readout */}
                <div className="absolute inset-x-3 bottom-3 rounded-xl border border-border bg-background/85 p-3 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="status-dot status-dot--up" />
                      <span className="mono-label">Engine · scanning</span>
                    </div>
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                      Live
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-sm font-extrabold text-[var(--up)] sm:text-base">
                        BUY
                      </p>
                      <p className="mono-label mt-0.5">EUR/USD</p>
                    </div>
                    <div className="border-x border-border">
                      <p className="text-sm font-extrabold sm:text-base">92%</p>
                      <p className="mono-label mt-0.5">Confidence</p>
                    </div>
                    <div>
                      <p className="text-sm font-extrabold sm:text-base">5M</p>
                      <p className="mono-label mt-0.5">Expiry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pair marquee */}
      <div className="relative mt-12 overflow-hidden border-y border-border bg-card/40 py-3 sm:mt-16">
        <div className="marquee-track flex w-max items-center gap-8 pr-8">
          {[...PAIRS, ...PAIRS].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
            >
              <span className="h-1 w-1 rounded-full bg-primary" />
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* card rail */}
      <div className="mx-auto max-w-[1600px] px-3 py-6 sm:px-6 sm:py-8">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {HERO_CARDS.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group w-[78vw] shrink-0 snap-start sm:w-auto"
            >
              <div className="relative overflow-hidden rounded-xl border border-border bg-card transition-colors group-hover:border-primary/50">
                <div className="relative aspect-[16/10] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-75 saturate-[0.5] contrast-125 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                    {c.tag}
                  </span>
                </div>
              </div>
              <h3 className="mt-3 text-[13px] font-extrabold uppercase tracking-tight transition-colors group-hover:text-primary">
                {c.title}
              </h3>
              <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
                {c.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
