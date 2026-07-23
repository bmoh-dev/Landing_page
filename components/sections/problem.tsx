import * as React from 'react';
import {
  PhoneMissed,
  MessagesSquare,
  ClipboardList,
  CalendarX2,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/layout';
import { Card } from '@/components/ui/card';

const problems = [
  {
    icon: PhoneMissed,
    title: 'Patients call while the receptionist is busy',
    description:
      'A patient calls during a consultation. Nobody answers. They hang up and call the next clinic.',
  },
  {
    icon: MessagesSquare,
    title: 'WhatsApp questions repeat every day',
    description:
      'Hours, location, fees, availability — the same questions arrive message after message, eating up your team\'s day.',
  },
  {
    icon: ClipboardList,
    title: 'Appointment details are exchanged manually',
    description:
      'Names, phone numbers, and preferred times get typed and retyped across messages, notes, and paper.',
  },
  {
    icon: CalendarX2,
    title: 'Some requests are delayed or forgotten',
    description:
      'A message gets buried. A note disappears. The slot stays empty, and the patient goes elsewhere.',
  },
];

export function ProblemSection() {
  return (
    <Section id="problem" className="border-t border-border">
      <SectionHeader
        eyebrow="The Daily Reality"
        title="Your receptionist can't answer every call"
        description="It's not about effort. It's about having one person handle calls, messages, walk-ins, and paperwork — all at the same time."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {problems.map((p) => (
          <Card key={p.title} className="p-7">
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
