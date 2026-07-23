import * as React from 'react';
import {
  PhoneMissed,
  MessagesSquare,
  Repeat2,
  CalendarX2,
  UserRoundCog,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/layout';
import { Card } from '@/components/ui/card';

const problems = [
  {
    icon: PhoneMissed,
    title: 'Missed calls',
    description:
      'A patient calls during a busy hour. Nobody answers. They call the next clinic instead.',
  },
  {
    icon: MessagesSquare,
    title: 'Too many WhatsApp messages',
    description:
      'Your secretary juggles dozens of messages a day. Important details get buried in the chat.',
  },
  {
    icon: Repeat2,
    title: 'Repeated questions',
    description:
      'Every patient asks the same things: hours, location, pricing. It eats up the whole day.',
  },
  {
    icon: CalendarX2,
    title: 'Lost appointments',
    description:
      'A message gets forgotten. A note on paper disappears. The slot stays empty.',
  },
  {
    icon: UserRoundCog,
    title: 'Overworked secretary',
    description:
      'Between phone calls, messages, and walk-ins, your team has no time to breathe.',
  },
];

export function ProblemSection() {
  return (
    <Section id="problem" className="border-t border-border">
      <SectionHeader
        eyebrow="The Problem"
        title="Running a clinic shouldn't feel like firefighting"
        description="Every day, private clinics lose patients to small problems that add up fast."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((p) => (
          <Card key={p.title} className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-error/5 text-error">
              <p.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 font-display text-h4 font-semibold text-foreground">
              {p.title}
            </h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              {p.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
