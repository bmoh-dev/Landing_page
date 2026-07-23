import { Navigation, Footer } from '@/components/layout';
import { Hero } from '@/components/sections/hero';
import { ProblemSection } from '@/components/sections/problem';
import { SolutionSection } from '@/components/sections/solution';
import { FeaturesSection } from '@/components/sections/features';
import { TelegramPreviewSection } from '@/components/sections/telegram-preview';
import { WhyAvenraSection } from '@/components/sections/why-avenra';
import { TrustSection } from '@/components/sections/trust';
import { FAQSection } from '@/components/sections/faq';
import { FinalCTASection } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <TelegramPreviewSection />
        <WhyAvenraSection />
        <TrustSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
