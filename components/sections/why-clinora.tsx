import * as React from 'react';
import { Layers, Stethoscope, Feather, Zap } from 'lucide-react';
import { Section, SectionHeader, BlobBackground } from '@/components/layout';
import { FloatingCard } from '@/components/ui/special-cards';
import { Badge } from '@/components/ui/badge';

const differentiators = [
  {
    icon: Layers,
    title: 'Modern SaaS, not a static site',
    description:
      'A normal website sits there. Clinora actively captures, routes, and notifies — it works for you.',
  },
  {
    icon: Stethoscope,
    title: 'Built specifically for clinics',
    description:
      'Not a generic form builder. Every detail is designed around how private clinics actually operate.',
  },
  {
    icon: Feather,
    title: 'Simple by design',
    description:
      'No complex dashboard to learn. No training needed. Your secretary understands it in minutes.',
  },
  {
    icon: Zap,
    title: 'Fast where it matters',
    description:
      'From page load to notification delivery, everything happens in real time. No delays, no waiting.',
  },
];

export function WhyClinoraSection() {
  return (
    <Section id="why-clinora" className="border-t border-border overflow-hidden">
      <BlobBackground />

      <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — pitch */}
        <div className="flex flex-col gap-6">
          <SectionHeader
            align="left"
            eyebrow="Why Clinora"
            title="A website that actually does something"
            description="Most clinics get a brochure website. It looks nice and does nothing. Clinora is different — it's built to capture requests and route them to your team automatically."
          />

          <div className="flex flex-wrap gap-3">
            <Badge variant="soft">SaaS, not a brochure</Badge>
            <Badge variant="soft-accent">For clinics, not hospitals</Badge>
            <Badge variant="outline">No technical knowledge needed</Badge>
          </div>
        </div>

        {/* Right — differentiator cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((d) => (
            <FloatingCard key={d.title} className="p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-button bg-primary-50 text-primary-600">
                <d.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mb-1.5 font-display text-h4 font-semibold text-foreground">
                {d.title}
              </h3>
              <p className="text-small text-muted-foreground leading-relaxed">
                {d.description}
              </p>
            </FloatingCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
