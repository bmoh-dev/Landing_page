import * as React from 'react';
import {
  User,
  Globe,
  FileText,
  Sheet,
  Send,
  CheckCircle2,
  ArrowDown,
} from 'lucide-react';
import { Section, SectionHeader, GlowBackground } from '@/components/layout';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: User,
    label: 'Patient',
    description: 'A patient visits your clinic website.',
  },
  {
    icon: Globe,
    label: 'Website',
    description: 'They browse your services and available times.',
  },
  {
    icon: FileText,
    label: 'Appointment Request',
    description: 'They fill a short form with their details and preferred slot.',
  },
  {
    icon: Sheet,
    label: 'Google Sheets',
    description: 'The request is saved automatically to your spreadsheet.',
  },
  {
    icon: Send,
    label: 'Telegram Notification',
    description: 'Your team gets an instant notification with all the details.',
  },
  {
    icon: CheckCircle2,
    label: 'Secretary Confirms',
    description: 'Your secretary calls or messages to confirm the appointment.',
  },
];

export function SolutionSection() {
  return (
    <Section id="how-it-works" className="border-t border-border overflow-hidden">
      <GlowBackground />
      <SectionHeader
        eyebrow="How it Works"
        title="From patient request to confirmed appointment"
        description="A simple flow that replaces phone tags, scattered messages, and lost notes."
      />

      <div className="relative mt-16">
        {/* Vertical line for mobile / horizontal for desktop */}
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary-200 via-primary-100 to-transparent lg:hidden" />

        <div className="grid gap-4 lg:grid-cols-6 lg:gap-3">
          {steps.map((step, i) => (
            <React.Fragment key={step.label}>
              {/* Connector arrow — desktop */}
              {i > 0 && (
                <div className="hidden lg:flex absolute items-center" style={{ left: `${((i - 0.5) / 6) * 100}%` }}>
                  <ArrowDown className="h-4 w-4 -rotate-90 text-primary-300" />
                </div>
              )}

              <div className="relative flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                {/* Step number circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-button border border-primary-200 bg-card text-primary-600 shadow-sm lg:h-14 lg:w-14">
                  <step.icon className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.5} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-badge bg-primary text-primary-foreground text-caption font-bold">
                    {i + 1}
                  </span>
                </div>

                <div className="flex-1 lg:flex-none">
                  <h3 className="font-display text-h4 font-semibold text-foreground">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-small text-muted-foreground leading-relaxed lg:mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
}
