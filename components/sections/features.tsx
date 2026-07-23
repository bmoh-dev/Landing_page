import * as React from 'react';
import {
  Globe,
  MessageCircle,
  Send,
  CalendarCheck,
  HelpCircle,
  Smartphone,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/layout';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Globe,
    benefit: 'Receive more appointment requests',
    explanation:
      'Patients have an easy way to request appointments instead of only calling — even after hours or during busy moments.',
    poweredBy: 'Modern clinic website + appointment request form',
  },
  {
    icon: HelpCircle,
    benefit: 'Reduce receptionist workload',
    explanation:
      'Common questions get answered on the website, and patient information is collected automatically — no manual data entry.',
    poweredBy: 'FAQ section + WhatsApp access button',
  },
  {
    icon: Send,
    benefit: 'Never miss a new request',
    explanation:
      'The receptionist receives patient details immediately when a request comes in — no refreshing, no checking, no waiting.',
    poweredBy: 'Telegram notifications + organized request data',
  },
  {
    icon: CalendarCheck,
    benefit: 'Keep appointments organized',
    explanation:
      'Every request is saved in a shared spreadsheet your team can access anytime. Sort, filter, and follow up without losing track.',
    poweredBy: 'Google Sheets integration',
  },
  {
    icon: MessageCircle,
    benefit: 'Stay reachable on WhatsApp',
    explanation:
      'Patients who prefer messaging can reach you with one tap. Avenra doesn\'t replace WhatsApp — it reduces the volume of repetitive messages.',
    poweredBy: 'WhatsApp button on every page',
  },
  {
    icon: Smartphone,
    benefit: 'Look professional on every device',
    explanation:
      'Your clinic website works perfectly on phones, tablets, and desktops — because that\'s what your patients are using.',
    poweredBy: 'Mobile-responsive design + fast performance',
  },
];

export function FeaturesSection() {
  return (
    <Section id="features" className="border-t border-border">
      <SectionHeader
        eyebrow="Features with Outcomes"
        title="What changes for your clinic"
        description="Each capability is designed around a real outcome — not just a feature for the sake of it."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.benefit} className="flex flex-col p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-primary-50 text-primary-600">
              <f.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>

            <h3 className="mb-2 font-display text-h4 font-semibold text-foreground">
              {f.benefit}
            </h3>
            <p className="mb-4 flex-1 text-body text-muted-foreground leading-relaxed">
              {f.explanation}
            </p>

            <div className="border-t border-border pt-4">
              <p className="text-caption font-semibold uppercase tracking-wide text-muted-foreground">
                Powered by
              </p>
              <p className="mt-1 text-small font-medium text-primary-700">
                {f.poweredBy}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
