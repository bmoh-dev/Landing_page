'use client';

import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Section, SectionHeader } from '@/components/layout';

const faqs = [
  {
    question: 'Do I need to change my phone number?',
    answer:
      'No. Avenra works alongside your existing phone number and WhatsApp. Patients who prefer to call still can — Avenra simply gives them another way to reach you.',
  },
  {
    question: 'Does my receptionist need training?',
    answer:
      'No training is needed. When a request comes in, your receptionist receives a Telegram notification with the patient\'s details and buttons to call or message them. That\'s the entire workflow.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most clinics are live within a day. We set up your website, customize it with your clinic name and services, connect your Google Sheet and Telegram, and you\'re ready to receive requests.',
  },
  {
    question: 'Can I request changes?',
    answer:
      'Yes. You can request changes to your website — services, pricing, hours, images, text — at any time. We handle the updates for you, usually within the same day.',
  },
  {
    question: 'Is it suitable for small clinics?',
    answer:
      'Absolutely. Avenra is designed for private clinics with one or two receptionists. If you\'re handling calls, messages, and walk-ins with a small team, Avenra is built for exactly your situation.',
  },
];

export function FAQSection() {
  return (
    <Section id="faq" className="border-t border-border">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything you might want to know before booking a clinic audit."
      />

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-card border border-border bg-card px-5 shadow-sm data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-body font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-body text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
