import Link from 'next/link'
import {
  ScanSearch,
  SlidersHorizontal,
  Radio,
  CalendarClock,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  BrainCircuit,
} from 'lucide-react'

const TILES = [
  {
    icon: ScanSearch,
    title: 'Advanced Chart Analysis',
    desc: 'Deep technical reads across OTC and real pairs, surfacing high-probability setups.',
    anim: 'icon-pulse-soft',
  },
  {
    icon: SlidersHorizontal,
    title: 'Instant Trade Management',
    desc: 'Open, monitor and adjust instant trades from a single control room.',
    anim: 'icon-slide',
  },
  {
    icon: Radio,
    title: 'Live 24/7 Signals',
    desc: 'Round-the-clock signals delivered the moment opportunity appears.',
    anim: 'icon-broadcast',
  },
  {
    icon: CalendarClock,
    title: 'Future Signals',
    desc: 'Forward-looking entries timed for upcoming moves and trend shifts.',
    anim: 'icon-tick',
  },
  {
    icon: Cpu,
    title: 'AI-Driven Accuracy',
    desc: 'Models weigh price action, volume and momentum for signal precision.',
    anim: 'icon-flicker',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management',
    desc: 'Confidence scoring helps you size positions and protect capital.',
    anim: 'icon-beat',
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

        {/* feature banners — pure CSS, no imagery */}
        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          <Link
            href="/login"
            className="group corner-frame relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:p-10 lg:col-span-2"
          >
            <div className="tech-grid pointer-events-none absolute inset-0 opacity-60" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <span className="mono-label text-primary">Vision engine</span>
              <h3 className="mt-3 max-w-md text-2xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-4xl">
                Upload a chart. Get a verdict.
              </h3>
              <p className="mt-3 max-w-md text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
                Vertex reads candles, structure and momentum from a raw
                screenshot and returns direction, confidence and expiry.
              </p>

              {/* minimal readout strip */}
              <div className="mt-6 grid max-w-md grid-cols-3 gap-2">
                {[
                  ['BUY', 'Direction'],
                  ['92%', 'Confidence'],
                  ['5M', 'Expiry'],
                ].map(([v, l], i) => (
                  <div
                    key={l}
                    className="rounded-lg border border-border bg-background/60 px-3 py-2.5 text-center"
                  >
                    <p
                      className={`text-sm font-extrabold ${i === 0 ? 'text-[var(--up)]' : ''}`}
                    >
                      {v}
                    </p>
                    <p className="mono-label mt-1">{l}</p>
                  </div>
                ))}
              </div>

              <span className="mt-6 inline-flex h-10 w-fit items-center gap-1.5 rounded-full bg-primary px-5 text-[12px] font-bold uppercase tracking-wide text-primary-foreground">
                Try now
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>

          <Link
            href="/login"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/25">
                <Radio className="icon-broadcast h-5 w-5" />
              </span>
              <span className="status-dot status-dot--up" />
            </div>
            <div className="relative mt-10">
              <span className="mono-label text-primary">Always on</span>
              <h3 className="mt-2 text-xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-2xl">
                Signals around the clock
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                Live and future signals for OTC and real markets, refreshed
                continuously.
              </p>
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
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/25">
                  <t.icon className={`h-4.5 w-4.5 ${t.anim}`} />
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              </div>
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

const ENGINE_ROWS = [
  ['EUR/USD', 'BUY', '92%'],
  ['GBP/JPY', 'SELL', '88%'],
  ['XAU/USD', 'BUY', '95%'],
  ['BTC/USD', 'SELL', '84%'],
]

export function EngineBanner() {
  return (
    <section id="engine" className="scroll-mt-16 pb-10 sm:pb-16">
      <div className="mx-auto max-w-[1600px] px-3 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
          <div className="relative grid items-center gap-8 p-6 sm:p-10 md:grid-cols-2 md:gap-12">
            <div>
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

            {/* minimal terminal readout */}
            <div className="rounded-xl border border-border bg-background/60 p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="icon-pulse-soft h-4 w-4 text-primary" />
                  <span className="mono-label">Engine feed</span>
                </div>
                <span className="flex items-center gap-1.5">
                  <span className="status-dot" />
                  <span className="mono-label">Live</span>
                </span>
              </div>
              <div className="divide-y divide-border">
                {ENGINE_ROWS.map(([pair, dir, conf]) => (
                  <div
                    key={pair}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="font-mono text-[13px] font-semibold tabular-nums">
                      {pair}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                        dir === 'BUY'
                          ? 'bg-[var(--up)]/15 text-[var(--up)]'
                          : 'bg-[var(--down)]/15 text-[var(--down)]'
                      }`}
                    >
                      {dir}
                    </span>
                    <span className="font-mono text-[13px] tabular-nums text-muted-foreground">
                      {conf}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mono-label mt-3 border-t border-border pt-3">
                Refreshed continuously · sample output
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
