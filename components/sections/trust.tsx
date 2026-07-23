import * as React from 'react';
import {
  Rocket,
  Stethoscope,
  Smartphone,
  LifeBuoy,
  Workflow,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/layout';
import { Card } from '@/components/ui/card';

const trustPoints = [
  {
    icon: Rocket,
    title: 'Simple setup',
    description:
      'We handle the setup for you. Your clinic website, form, and notifications are ready within a day — no technical work on your side.',
  },
  {
    icon: Stethoscope,
    title: 'Designed for clinics',
    description:
      'Built for dental, dermatology, pediatrics, gynecology, ophthalmology, orthopedics, and general practice — not a generic tool.',
  },
  {
    icon: Smartphone,
    title: 'Mobile friendly',
    description:
      'Your patients are on their phones. Your website works perfectly on every screen size, from small phones to desktops.',
  },
  {
    icon: LifeBuoy,
    title: 'Support included',
    description:
      'Something needs changing? You reach a real person, not a ticket system. We respond quickly and we understand clinics.',
  },
  {
    icon: Workflow,
    title: 'Works with your workflow',
    description:
      'Avenra doesn\'t replace your phone, your WhatsApp, or your process. It adds a layer that makes everything smoother.',
  },
];

export function TrustSection() {
  return (
    <Section id="trust" className="border-t border-border bg-muted/30">
      <SectionHeader
        eyebrow="Why Clinics Trust Avenra"
        title="Built to fit your clinic, not the other way around"
        description="No certifications or buzzwords. Just practical reasons private clinics choose Avenra."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {trustPoints.map((t) => (
          <Card key={t.title} className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-primary-50 text-primary-600">
              <t.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 font-display text-h4 font-semibold text-foreground">
              {t.title}
            </h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              {t.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
