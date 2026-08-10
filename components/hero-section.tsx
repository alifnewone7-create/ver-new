import Link from 'next/link'
import {
  ArrowUpRight,
  Activity,
  Zap,
  Target,
  ScanSearch,
  Radio,
  Telescope,
  Newspaper,
} from 'lucide-react'
import { AiEngineCard } from '@/components/ai-engine-card'

const HERO_CARDS = [
  {
    title: 'OTC Chart Analyzer',
    desc: 'Upload a chart. Get a verdict in seconds.',
    href: '/login',
    tag: 'Vision AI',
    icon: ScanSearch,
  },
  {
    title: 'Live Signals 24/7',
    desc: 'Round-the-clock entries the moment they appear.',
    href: '/login',
    tag: 'Live',
    icon: Radio,
  },
  {
    title: 'Future Signals',
    desc: 'Forward-timed setups before the move starts.',
    href: '/login',
    tag: 'New',
    icon: Telescope,
  },
  {
    title: 'News Signals',
    desc: 'Fundamental bias from the economic calendar.',
    href: '/login',
    tag: 'Calendar',
    icon: Newspaper,
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
    <section id="about" className="relative">
      <div className="mx-auto max-w-[1600px] px-3 pt-10 sm:px-6 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
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

          {/* animated engine card (no imagery) */}
          <div className="relative">
            <AiEngineCard />
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

      {/* minimal tool rail */}
      <div className="mx-auto max-w-[1600px] px-3 py-6 sm:px-6 sm:py-8">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {HERO_CARDS.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group flex w-[78vw] shrink-0 snap-start flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50 sm:w-auto"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/25">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                  {c.tag}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="flex items-center gap-1.5 text-[13px] font-extrabold uppercase tracking-tight transition-colors group-hover:text-primary">
                  {c.title}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground">
                  {c.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
