import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, ArrowUpRight } from 'lucide-react'

const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/registration' },
  { label: 'Support', href: 'https://t.me/Ayan_sx', external: true },
]

export function SiteFooter() {
  return (
    <footer id="support" className="scroll-mt-16">
      {/* Lime CTA band */}
      <div className="mx-auto max-w-[1600px] px-3 pb-10 sm:px-6 sm:pb-16">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-5 py-10 text-primary-foreground sm:px-10 sm:py-14">
          <div className="relative">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-70">
              Start today
            </p>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-extrabold uppercase leading-[0.92] tracking-[-0.03em] sm:text-5xl">
              Your trading career
              <br />
              starts with Vertex AI
            </h2>
            <p className="mt-4 max-w-lg text-[14px] font-medium leading-relaxed opacity-80">
              Thousands of traders use automated, data-driven signals to trade
              with confidence — every single day.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/registration"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 text-[12px] font-bold uppercase tracking-wide text-primary transition-transform hover:scale-[1.02]"
              >
                Create free account
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://t.me/Ayan_sx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 text-[12px] font-bold uppercase tracking-wide transition-colors hover:bg-primary-foreground/10"
              >
                Talk to admin
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-[1600px] px-3 sm:px-6">
          <div className="flex flex-col items-center gap-6 py-8 text-center md:flex-row md:justify-between md:text-left">
            <Link href="/#top" className="flex items-center gap-2.5">
              <span className="relative h-8 w-8 overflow-hidden rounded-md ring-1 ring-white/15">
                <Image
                  src="/vertex-logo.png"
                  alt="Vertex AI logo"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </span>
              <span className="text-[15px] font-extrabold uppercase tracking-tight">
                Vertex <span className="text-primary">AI</span>
              </span>
            </Link>

            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="border-t border-border py-6">
            <div className="flex gap-3 rounded-xl border border-[var(--down)]/25 bg-[var(--down)]/5 p-4">
              <AlertTriangle className="h-4 w-4 shrink-0 text-[var(--down)]" />
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                <span className="font-bold uppercase text-foreground">
                  Trading risk disclaimer:
                </span>{' '}
                Trading financial instruments carries a high level of risk and
                may not be suitable for all investors. Leverage can work against
                you as well as for you. Past performance of Vertex AI is not
                indicative of future results. Never trade with money you cannot
                afford to lose. Vertex AI provides tools and signals for
                informational purposes only and does not constitute financial
                advice.
              </p>
            </div>
            <p className="mono-label mt-6 text-center">
              © {new Date().getFullYear()} Vertex AI — All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
