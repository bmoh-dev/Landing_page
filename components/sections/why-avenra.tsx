import * as React from 'react';
import { Layers, Stethoscope, Feather, Zap } from 'lucide-react';
import { Section, SectionHeader, BlobBackground } from '@/components/layout';
import { FloatingCard } from '@/components/ui/special-cards';
import { Badge } from '@/components/ui/badge';

const points = [
  {
    icon: Layers,
    title: 'Not just a website',
    description:
      'A normal website sits there and looks nice. Avenra actively captures requests, organizes them, and notifies your team — it works for you.',
  },
  {
    icon: Stethoscope,
    title: 'Not a complicated system',
    description:
      'It\'s not a hospital management platform or an EMR. It\'s a simple intake layer that fits between your patients and your existing workflow.',
  },
  {
    icon: Feather,
    title: 'Simple by design',
    description:
      'No complex dashboard to learn. No training needed. Your receptionist understands it in minutes because there\'s almost nothing to learn.',
  },
  {
    icon: Zap,
    title: 'Fast where it matters',
    description:
      'From page load to notification delivery, everything happens in real time. No delays between a patient requesting and your team responding.',
  },
];

export function WhyAvenraSection() {
  return (
    <Section id="why-avenra" className="border-t border-border overflow-hidden">
      <BlobBackground />

      <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — pitch */}
        <div className="flex flex-col gap-6">
          <SectionHeader
            align="left"
            eyebrow="Why Avenra"
            title="A simple patient intake layer, not another system"
            description="Most clinics either have a brochure website that does nothing, or a complex management system nobody uses. Avenra sits in between — built specifically for private clinics."
          />

          <div className="flex flex-wrap gap-3">
            <Badge variant="soft">SaaS, not a brochure</Badge>
            <Badge variant="soft-accent">For clinics, not hospitals</Badge>
            <Badge variant="outline">No technical knowledge needed</Badge>
          </div>
        </div>

        {/* Right — cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <FloatingCard key={p.title} className="p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-button bg-primary-50 text-primary-600">
                <p.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mb-1.5 font-display text-h4 font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="text-small text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </FloatingCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
