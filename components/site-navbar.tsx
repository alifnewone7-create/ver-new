'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Features', href: '/#features' },
  { label: 'Engine', href: '/#engine' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Support', href: 'https://t.me/Ayan_sx', external: true },
]

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const [banner, setBanner] = useState(true)

  return (
    <>
      {banner && (
        <div className="relative z-50 bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-[1600px] items-center justify-center gap-2 px-10 py-2 text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] sm:text-[11px]">
              Free access via partner broker
            </span>
            <span className="hidden rounded-full bg-primary-foreground/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary sm:inline">
              20 signals / day
            </span>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => setBanner(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 transition-opacity hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-[1600px] items-center gap-4 px-3 sm:px-6">
          <Link href="/#top" className="flex shrink-0 items-center gap-2.5">
            <span className="relative h-7 w-7 overflow-hidden rounded-md ring-1 ring-white/15">
              <Image
                src="/vertex-logo.png"
                alt="Vertex AI"
                fill
                sizes="28px"
                className="object-cover"
                priority
              />
            </span>
            <span className="text-[15px] font-extrabold uppercase tracking-tight">
              Vertex <span className="text-primary">AI</span>
            </span>
          </Link>

          <span className="hidden h-4 w-px bg-border md:block" />

          <div className="hidden items-center md:flex">
            {NAV_LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center">
                {i > 0 && <span className="h-3 w-px bg-border" />}
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="px-3 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/login"
              className="hidden h-8 items-center rounded-full px-3 text-[13px] font-semibold text-foreground transition-colors hover:text-primary sm:inline-flex"
            >
              Login
            </Link>
            <Link
              href="/registration"
              className="inline-flex h-8 items-center gap-1 rounded-full bg-primary px-4 text-[12px] font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Sign up
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-border bg-background px-3 py-3 md:hidden">
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </a>
              ))}
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="mt-2 flex h-11 items-center justify-center rounded-full border border-border text-sm font-semibold"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
