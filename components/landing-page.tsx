import { SiteNavbar } from '@/components/site-navbar'
import { HeroSection } from '@/components/hero-section'
import { FeatureGrid, EngineBanner } from '@/components/feature-grid'
import { PricingTiers } from '@/components/pricing-tiers'
import { SiteFooter } from '@/components/site-footer'

export function LandingPage() {
  return (
    <div id="top" className="min-h-dvh bg-background">
      <SiteNavbar />
      <main>
        <HeroSection />
        <FeatureGrid />
        <EngineBanner />
        <PricingTiers />
      </main>
      <SiteFooter />
    </div>
  )
}
