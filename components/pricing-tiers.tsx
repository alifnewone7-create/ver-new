import Link from 'next/link'
import {
  Check,
  UserPlus,
  Wallet,
  ShieldCheck,
  KeyRound,
  Headset,
  ArrowUpRight,
} from 'lucide-react'
import { TIER_DAILY_LIMIT, TIER_LABEL } from '@/lib/tiers'

const FREE_STEPS = [
  {
    icon: UserPlus,
    title: 'Create account',
    desc: 'Register your trading account through our exclusive partner link.',
  },
  {
    icon: Wallet,
    title: 'Deposit capital',
    desc: 'A minimum $50 balance activates your trading account.',
  },
  {
    icon: ShieldCheck,
    title: 'Verify UID',
    desc: 'Send your UID to support for instant verification and unlock.',
  },
]

const LICENSE_PERKS = [
  'Skip broker registration entirely',
  'Direct, unrestricted access',
  '1-month full license, instant activation',
  'Priority support included',
]

const PAID_TIERS = ['basic', 'standard', 'premium'] as const

export function PricingTiers() {
  return (
    <section id="pricing" className="scroll-mt-16 py-10 sm:py-16">
      <div className="mx-auto max-w-[1600px] px-3 sm:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          Access
        </p>
        <h2 className="mt-3 max-w-3xl text-balance text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] sm:text-5xl">
          Two ways to get in
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Unlock Vertex AI free through our partner broker, or buy a direct
          license and skip the setup completely.
        </p>

        <div className="mt-8 grid gap-3 lg:grid-cols-2">
          {/* Free access */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold uppercase tracking-tight">
                Free access
              </h3>
              <span className="rounded-full border border-border px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                $0 · partner
              </span>
            </div>
            <p className="mt-2 text-[13px] text-muted-foreground">
              Three steps and the engine is yours.
            </p>

            <ol className="mt-6 flex flex-1 flex-col gap-2.5">
              {FREE_STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-xl border border-border bg-background/50 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-[12px] font-extrabold text-primary ring-1 ring-primary/25">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-primary" />
                      <p className="text-[13px] font-extrabold uppercase tracking-tight">
                        {step.title}
                      </p>
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <a
                href="https://market-qx.pro/sign-up/?lid=619650"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background text-[12px] font-bold uppercase tracking-wide transition-colors hover:border-primary/50 hover:text-primary"
              >
                <UserPlus className="h-4 w-4" />
                Create broker account
              </a>
              <a
                href="https://t.me/Ayan_sx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 text-[12px] font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary/20"
              >
                <Headset className="h-4 w-4" />
                Contact admin
              </a>
            </div>
          </div>

          {/* License */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-primary/45 bg-card p-5 sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-primary/12 blur-3xl" />
            <div className="relative flex items-center justify-between">
              <h3 className="text-lg font-extrabold uppercase tracking-tight">
                Buy license
              </h3>
              <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                Direct access
              </span>
            </div>
            <p className="relative mt-2 text-[13px] text-muted-foreground">
              No broker, no verification. Instant unrestricted activation.
            </p>

            <div className="relative mt-6 flex items-end gap-2">
              <span className="text-5xl font-extrabold tracking-[-0.04em] text-primary sm:text-6xl">
                $99
              </span>
              <span className="mb-2 mono-label">per month</span>
            </div>

            <ul className="relative mt-6 flex flex-1 flex-col gap-3">
              {LICENSE_PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-[13px]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-foreground/90">{perk}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://t.me/Ayan_sx"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-[12px] font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <KeyRound className="h-4 w-4" />
              Purchase license
            </a>
          </div>
        </div>

        {/* daily credit tiers */}
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {PAID_TIERS.map((t) => (
            <div
              key={t}
              className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4"
            >
              <div>
                <p className="text-[13px] font-extrabold uppercase tracking-tight">
                  {TIER_LABEL[t]} plan
                </p>
                <p className="mono-label mt-1">Per tool, per day</p>
              </div>
              <p className="text-2xl font-extrabold tracking-tight text-primary">
                {TIER_DAILY_LIMIT[t]}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 flex items-center gap-2 text-[12px] text-muted-foreground">
          Already have access?
          <Link
            href="/login"
            className="inline-flex items-center gap-1 font-bold uppercase tracking-wide text-primary hover:underline"
          >
            Sign in <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </p>
      </div>
    </section>
  )
}
