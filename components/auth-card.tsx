'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  Check,
  Loader2,
  ArrowUpRight,
  ArrowLeft,
} from 'lucide-react'
import { StarField } from '@/components/star-field'
import { useAuth } from '@/components/auth-provider'
import { cn } from '@/lib/utils'

function friendlyError(code: string): string {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.'
    case 'auth/invalid-email':
      return 'Please enter a valid email address.'
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.'
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Incorrect email or password.'
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later.'
    default:
      return 'Something went wrong. Please try again.'
  }
}

type AuthMode = 'login' | 'registration'

const inputClass =
  'h-12 w-full rounded-xl border border-border bg-background pl-11 pr-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/70 focus:ring-2 focus:ring-primary/25'

function FieldIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
      {children}
    </span>
  )
}

export function AuthCard({ mode }: { mode: AuthMode }) {
  const router = useRouter()
  const { login, register } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const isLogin = mode === 'login'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      if (isLogin) {
        await login(email, password)
      } else {
        await register(name, email, password)
      }
      router.push('/dashboard')
    } catch (err) {
      const code =
        err && typeof err === 'object' && 'code' in err
          ? String((err as { code: string }).code)
          : ''
      setError(friendlyError(code))
      setSubmitting(false)
    }
  }

  return (
    <div className="auth-card-enter w-full max-w-md rounded-2xl border border-border bg-card p-5 sm:p-8">
      {/* Segmented switcher */}
      <div className="grid grid-cols-2 gap-1 rounded-full border border-border bg-background p-1">
        <Link
          href="/login"
          aria-current={isLogin ? 'page' : undefined}
          className={cn(
            'flex h-9 items-center justify-center rounded-full text-[12px] font-bold uppercase tracking-wide transition-colors',
            isLogin
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          Login
        </Link>
        <Link
          href="/registration"
          aria-current={!isLogin ? 'page' : undefined}
          className={cn(
            'flex h-9 items-center justify-center rounded-full text-[12px] font-bold uppercase tracking-wide transition-colors',
            !isLogin
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          Register
        </Link>
      </div>

      <div className="mt-7">
        <span className="mono-label text-primary">
          {isLogin ? 'Secure sign in' : 'New account'}
        </span>
        <h1 className="mt-2 text-2xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] sm:text-3xl">
          {isLogin ? 'Welcome back' : 'Create your account'}
        </h1>
        <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
          {isLogin
            ? 'Sign in to open your Vertex AI trading terminal.'
            : 'Join Vertex AI and start trading with automated signals.'}
        </p>
      </div>

      <form className="mt-7 flex flex-col gap-3" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="relative">
            <FieldIcon>
              <User className="h-[18px] w-[18px]" />
            </FieldIcon>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              autoComplete="name"
              className={inputClass}
            />
          </div>
        )}

        <div className="relative">
          <FieldIcon>
            <Mail className="h-[18px] w-[18px]" />
          </FieldIcon>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            autoComplete="email"
            className={inputClass}
          />
        </div>

        <div className="relative">
          <FieldIcon>
            <Lock className="h-[18px] w-[18px]" />
          </FieldIcon>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete={isLogin ? 'current-password' : 'new-password'}
            className={cn(inputClass, 'pr-11')}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary"
          >
            {showPassword ? (
              <EyeOff className="h-[18px] w-[18px]" />
            ) : (
              <Eye className="h-[18px] w-[18px]" />
            )}
          </button>
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-destructive/40 bg-destructive/10 px-3 py-2.5 text-[13px] text-destructive"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-[12px] font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-70"
        >
          {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {submitting
            ? isLogin
              ? 'Signing in...'
              : 'Creating account...'
            : isLogin
              ? 'Sign in'
              : 'Create account'}
          {!submitting && <ArrowUpRight className="h-4 w-4" />}
        </button>
      </form>

      <p className="mt-6 text-center text-[13px] text-muted-foreground">
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <Link
          href={isLogin ? '/registration' : '/login'}
          className="font-bold uppercase tracking-wide text-primary transition-opacity hover:opacity-80"
        >
          {isLogin ? 'Register' : 'Sign in'}
        </Link>
      </p>
    </div>
  )
}

const brandPoints = [
  'Automated AI trading signals, delivered in real time',
  'Chart verdicts in under two seconds',
  'Forex, OTC, crypto and metals in one engine',
]

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative grid min-h-dvh grid-cols-1 bg-background lg:grid-cols-[1.05fr_1fr]">
      <StarField />
      {/* Brand panel */}
      <aside className="relative z-10 hidden flex-col justify-between overflow-hidden border-r border-border p-10 xl:p-14 lg:flex">
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />

        <Link href="/" className="relative flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-lg ring-1 ring-white/15">
            <Image
              src="/vertex-logo.png"
              alt="Vertex AI"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="text-lg font-extrabold uppercase tracking-tight">
            Vertex <span className="text-primary">AI</span>
          </span>
        </Link>

        <div className="relative max-w-lg">
          <span className="mono-label text-primary">Algorithmic trading</span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold uppercase leading-[0.92] tracking-[-0.03em] xl:text-5xl">
            Trade smarter
            <br />
            with AI powered
            <br />
            <span className="text-primary">signals.</span>
          </h2>
          <ul className="mt-9 flex flex-col gap-3.5">
            {brandPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-[13px] leading-relaxed text-muted-foreground">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mono-label relative">
          © {new Date().getFullYear()} Vertex AI
        </p>
      </aside>

      {/* Form panel */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-10 sm:px-6">
        <Link
          href="/"
          className="absolute left-4 top-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary sm:left-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Home
        </Link>

        <div className="mb-8 flex flex-col items-center gap-3 lg:hidden">
          <Link href="/" className="relative">
            <Image
              src="/vertex-logo.png"
              alt="Vertex AI"
              width={60}
              height={60}
              className="rounded-xl ring-1 ring-white/15"
              priority
            />
          </Link>
          <div className="text-center">
            <span className="text-xl font-extrabold uppercase tracking-tight">
              Vertex <span className="text-primary">AI</span>
            </span>
            <p className="mono-label mt-1.5">AI trading, made effortless</p>
          </div>
        </div>

        {children}
      </div>
    </main>
  )
}
