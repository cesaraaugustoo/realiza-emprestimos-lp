import { HeroSection } from '@/sections/HeroSection'
import { BenefitsSection } from '@/sections/BenefitsSection'
import { HowItWorksSection } from '@/sections/HowItWorksSection'
import { SocialProofSection } from '@/sections/SocialProofSection'
import { FAQSection } from '@/sections/FAQSection'
import { CTASection } from '@/sections/CTASection'
import { Footer } from '@/sections/Footer'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <SocialProofSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  )
}
