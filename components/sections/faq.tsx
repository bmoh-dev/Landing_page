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
    question: 'How long does it take to set up Clinora for my clinic?',
    answer:
      'Most clinics are up and running within a day. We handle the setup, connect your Google Sheet and Telegram, and customize the website with your clinic name, services, and branding.',
  },
  {
    question: 'Do I need any technical knowledge to use it?',
    answer:
      'Not at all. Your secretary doesn\'t need to learn any software. Patients visit the website, fill a form, and your team gets a notification. That\'s it.',
  },
  {
    question: 'How do Telegram notifications work?',
    answer:
      'When a patient submits an appointment request, Clinora sends a message to a Telegram chat of your choice — your secretary, your doctor, or a team group. The message includes the patient\'s name, phone number, and preferred time, with quick action buttons.',
  },
  {
    question: 'Can patients still contact us on WhatsApp?',
    answer:
      'Yes. The website includes a WhatsApp button so patients can message you directly. Clinora doesn\'t replace WhatsApp — it reduces the volume of messages by answering common questions on the website.',
  },
  {
    question: 'What happens to the appointment requests?',
    answer:
      'Every request is saved automatically to a Google Sheet that you own and can share with your team. You can sort, filter, and track requests without any extra effort.',
  },
  {
    question: 'Is Clinora available in Arabic and French?',
    answer:
      'Yes. The website can be displayed in Arabic, French, or both. We understand that your patients may prefer different languages, and the intake form adapts accordingly.',
  },
  {
    question: 'Does this work for any type of clinic?',
    answer:
      'Clinora is designed for private clinics — dental, dermatology, pediatrics, gynecology, ophthalmology, orthopedics, and general practice. The form and services are customized to your specialty.',
  },
  {
    question: 'How much does Clinora cost?',
    answer:
      'Pricing depends on your clinic\'s needs. We offer a simple monthly subscription with no hidden fees. Book a demo and we\'ll walk you through the options that fit your clinic.',
  },
];

export function FAQSection() {
  return (
    <Section id="faq" className="border-t border-border">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything you might want to know before booking a demo."
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
