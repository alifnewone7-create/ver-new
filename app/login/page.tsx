import type { Metadata } from 'next'
import { AuthCard, AuthLayout } from '@/components/auth-card'
import { AuthRedirect } from '@/components/auth-redirect'

export const metadata: Metadata = {
  title: 'Login | Sweetex AI',
  description:
    'Sign in to your Sweetex AI account to access your algorithmic trading dashboard and automated signals.',
  openGraph: {
    title: 'Login to Sweetex AI',
    description:
      'Sign in to your Sweetex AI account and access your automated, data-driven trading signals.',
    images: ['/sweetex-logo.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Login to Sweetex AI',
    description:
      'Sign in to your Sweetex AI account and access your automated trading signals.',
    images: ['/sweetex-logo.jpg'],
  },
}

export default function LoginPage() {
  return (
    <AuthRedirect>
      <AuthLayout>
        <AuthCard mode="login" />
      </AuthLayout>
    </AuthRedirect>
  )
}
