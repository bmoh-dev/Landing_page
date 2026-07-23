import * as React from 'react';
import {
  CalendarCheck,
  Repeat2,
  Clock4,
  HeartHandshake,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/layout';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    icon: CalendarCheck,
    title: 'Reduce missed appointments',
    description:
      'Every request is captured and tracked. No more lost messages or forgotten callbacks.',
  },
  {
    icon: Repeat2,
    title: 'Reduce repetitive work',
    description:
      'Patients find answers on the website. Your secretary spends less time repeating the same information.',
  },
  {
    icon: Clock4,
    title: 'Receive requests outside hours',
    description:
      'Your website works around the clock. Patients can request an appointment at midnight if they want.',
  },
  {
    icon: HeartHandshake,
    title: 'Improve patient experience',
    description:
      'A calm, modern intake process makes your clinic feel professional before the patient even arrives.',
  },
];

export function BenefitsSection() {
  return (
    <Section id="benefits" className="border-t border-border bg-muted/30">
      <SectionHeader
        eyebrow="Benefits"
        title="What changes when you use Clinora"
        description="This isn't about features. It's about giving your team time back and giving patients a better first impression."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {benefits.map((b) => (
          <Card key={b.title} className="flex items-start gap-5 p-7">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-button bg-primary-50 text-primary-600">
              <b.icon className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-h3 font-semibold text-foreground">
                {b.title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
