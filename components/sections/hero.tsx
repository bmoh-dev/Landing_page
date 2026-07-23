import * as React from 'react';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  MessageCircle,
  Phone,
  Send,
  User,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FloatingCard } from '@/components/ui/special-cards';
import { BlobBackground, GridBackground } from '@/components/layout';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
      <BlobBackground />
      <GridBackground className="opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
          {/* Left — copy */}
          <div className="flex flex-col items-start gap-6">
            <Badge variant="soft" className="gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
              For private clinics in Algeria & MENA
            </Badge>

            <h1 className="font-display text-display-lg text-foreground sm:text-display-xl">
              Help your clinic handle appointment requests more easily
            </h1>

            <p className="max-w-xl text-body-lg text-muted-foreground">
              Patients request appointments online, even when your receptionist
              is busy. Every request arrives instantly — organized, with patient
              details — so your team can follow up without the chaos.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" asChild>
                <a href="#book-audit">
                  Book a Clinic Audit
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-small text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary-600" />
                Works with your existing workflow
              </div>
              <div className="flex items-center gap-2 text-small text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary-600" />
                No training needed
              </div>
            </div>
          </div>

          {/* Right — mockup */}
          <div className="relative">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      {/* Main: Clinic website with appointment form */}
      <div className="relative rounded-card border border-border bg-card shadow-floating">
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-neutral-300" />
            <div className="h-3 w-3 rounded-full bg-neutral-300" />
            <div className="h-3 w-3 rounded-full bg-neutral-300" />
          </div>
          <div className="ml-3 flex-1">
            <div className="mx-auto h-6 max-w-xs rounded-button bg-muted/60" />
          </div>
        </div>

        {/* Body: appointment request form */}
        <div className="p-5">
          <div className="mb-4">
            <div className="mb-1 flex items-center gap-2">
              <div className="h-6 w-6 rounded-button bg-primary" />
              <div className="h-3 w-20 rounded-button bg-muted" />
            </div>
            <p className="font-display text-h4 font-semibold text-foreground">
              Request an Appointment
            </p>
            <p className="text-caption text-muted-foreground">
              Dr. Amira Benali — Dermatology
            </p>
          </div>

          <div className="space-y-3">
            {/* Form fields */}
            <div className="space-y-1.5">
              <div className="h-3 w-16 rounded-button bg-muted" />
              <div className="h-10 rounded-input border border-border bg-muted/30" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <div className="h-3 w-12 rounded-button bg-muted" />
                <div className="h-10 rounded-input border border-border bg-muted/30" />
              </div>
              <div className="space-y-1.5">
                <div className="h-3 w-14 rounded-button bg-muted" />
                <div className="h-10 rounded-input border border-border bg-muted/30" />
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-input border border-primary-200 bg-primary-50/50 p-3">
              <Calendar className="h-4 w-4 text-primary-600" />
              <span className="text-small font-medium text-primary-700">
                Wednesday, July 24 — 10:00 AM
              </span>
            </div>
            <div className="h-10 rounded-button bg-primary" />
          </div>
        </div>
      </div>

      {/* Floating card: Telegram notification */}
      <FloatingCard className="absolute -bottom-6 -left-4 w-64 p-4 sm:-left-8">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-button bg-accent-50 text-accent-600">
            <Send className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <p className="text-small font-semibold text-foreground">
              New request received
            </p>
            <p className="text-caption text-muted-foreground">
              Yasmine K. — Wed 10:00 AM
            </p>
            <div className="mt-2 flex gap-1.5">
              <div className="flex items-center gap-1 rounded-badge bg-primary px-2 py-0.5 text-caption font-medium text-primary-foreground">
                <Phone className="h-2.5 w-2.5" />
                Call
              </div>
              <div className="flex items-center gap-1 rounded-badge bg-success px-2 py-0.5 text-caption font-medium text-success-foreground">
                <MessageCircle className="h-2.5 w-2.5" />
                WhatsApp
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Floating card: patient info */}
      <FloatingCard className="absolute -top-4 -right-4 w-52 p-3.5 sm:-right-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-button bg-primary-50 text-primary-700">
            <User className="h-4 w-4" />
          </div>
          <div>
            <p className="text-small font-semibold text-foreground">
              Patient details
            </p>
            <p className="text-caption text-muted-foreground">
              Collected automatically
            </p>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}
