import * as React from 'react';
import {
  Globe,
  FileText,
  MessageCircle,
  HelpCircle,
  MapPin,
  Sheet,
  Send,
  Smartphone,
  Zap,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/layout';
import { FeatureCard } from '@/components/ui/feature-card';

const features = [
  {
    icon: Globe,
    title: 'Modern Website',
    description:
      'A clean, fast site that presents your clinic professionally to every visitor.',
  },
  {
    icon: FileText,
    title: 'Appointment Request Form',
    description:
      'Patients fill a short form with their details and preferred time — no phone call needed.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Button',
    description:
      'A one-tap button lets patients reach you directly on WhatsApp for quick questions.',
  },
  {
    icon: HelpCircle,
    title: 'FAQ Section',
    description:
      'Answer the common questions once — hours, location, pricing — right on the page.',
  },
  {
    icon: MapPin,
    title: 'Google Maps',
    description:
      'Patients see exactly where you are and get directions without leaving the site.',
  },
  {
    icon: Sheet,
    title: 'Google Sheets Integration',
    description:
      'Every request is saved automatically to a shared spreadsheet your team can access.',
  },
  {
    icon: Send,
    title: 'Telegram Notifications',
    description:
      'Get an instant message on Telegram with patient details the moment a request comes in.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description:
      'Looks and works perfectly on every phone, tablet, and desktop your patients use.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description:
      'Pages load in under a second. No one waits, and no one leaves out of frustration.',
  },
];

export function FeaturesSection() {
  return (
    <Section id="features" className="border-t border-border">
      <SectionHeader
        eyebrow="Features"
        title="Everything your clinic needs, nothing it doesn't"
        description="Each feature is designed to reduce repetitive work and help patients reach you more easily."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <FeatureCard
            key={f.title}
            icon={<f.icon className="h-6 w-6" strokeWidth={1.5} />}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
    </Section>
  );
}
