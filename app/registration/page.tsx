import type { Metadata } from 'next'
import { AuthCard, AuthLayout } from '@/components/auth-card'
import { AuthRedirect } from '@/components/auth-redirect'

export const metadata: Metadata = {
  title: 'Registration | Sweetex AI',
  description:
    'Create your Sweetex AI account to start trading smarter with automated, data-driven signals built to grow your account.',
  openGraph: {
    title: 'Create your Sweetex AI account',
    description:
      'Register for Sweetex AI and start trading smarter with automated, data-driven signals today.',
    images: ['/sweetex-logo.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create your Sweetex AI account',
    description:
      'Register for Sweetex AI and start trading smarter with automated signals today.',
    images: ['/sweetex-logo.jpg'],
  },
}

export default function RegistrationPage() {
  return (
    <AuthRedirect>
      <AuthLayout>
        <AuthCard mode="registration" />
      </AuthLayout>
    </AuthRedirect>
  )
}
