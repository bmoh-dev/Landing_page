import * as React from 'react';
import {
  Globe,
  FileText,
  Send,
  PhoneCall,
  ArrowDown,
} from 'lucide-react';
import { Section, SectionHeader, GlowBackground } from '@/components/layout';

const steps = [
  {
    icon: Globe,
    label: 'Patient visits the clinic website',
    description:
      'Your clinic has a clean, modern site where patients can learn about your services and available times.',
  },
  {
    icon: FileText,
    label: 'Patient sends an appointment request',
    description:
      'They fill a short form with their name, phone number, and preferred date and time — no phone call needed.',
  },
  {
    icon: Send,
    label: 'Clinic receives patient information instantly',
    description:
      'The request arrives on Telegram with all the details, and is saved to your spreadsheet automatically.',
  },
  {
    icon: PhoneCall,
    label: 'Receptionist contacts the patient to confirm',
    description:
      'Your team calls or messages the patient to confirm the appointment. One tap to call, one tap to WhatsApp.',
  },
];

export function SolutionSection() {
  return (
    <Section id="how-it-works" className="border-t border-border overflow-hidden">
      <GlowBackground />
      <SectionHeader
        eyebrow="How It Works"
        title="From patient request to confirmed appointment"
        description="A simple flow that replaces phone tags, scattered messages, and lost notes."
      />

      <div className="relative mt-16">
        {/* Vertical line — mobile */}
        <div className="absolute left-6 top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary-200 via-primary-100 to-transparent lg:hidden" />

        <div className="grid gap-8 lg:grid-cols-4 lg:gap-4">
          {steps.map((step, i) => (
            <div key={step.label} className="relative flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
              {/* Step circle */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-button border border-primary-200 bg-card text-primary-600 shadow-sm lg:h-14 lg:w-14">
                <step.icon className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.5} />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-badge bg-primary text-primary-foreground text-caption font-bold">
                  {i + 1}
                </span>
              </div>

              <div className="flex-1 lg:flex-none lg:mt-4">
                <h3 className="font-display text-h4 font-semibold text-foreground lg:text-body lg:font-semibold">
                  {step.label}
                </h3>
                <p className="mt-1.5 text-small text-muted-foreground leading-relaxed lg:mt-2">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector — desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block lg:absolute lg:right-[-1.25rem] lg:top-7">
                  <ArrowDown className="h-4 w-4 -rotate-90 text-primary-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
