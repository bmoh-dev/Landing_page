import * as React from 'react';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FloatingCard } from '@/components/ui/special-cards';
import { BlobBackground, GridBackground } from '@/components/layout';
import { cn } from '@/lib/utils';

const WHATSAPP_URL = 'https://wa.me/213000000000';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
      {/* Backgrounds */}
      <BlobBackground />
      <GridBackground className="opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div className="flex flex-col items-start gap-6">
            <Badge variant="soft" className="gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Built for private clinics in Algeria
            </Badge>

            <h1 className="font-display text-display-lg text-foreground sm:text-display-xl">
              Receive appointment requests{' '}
              <span className="text-gradient-primary">without the chaos</span>
            </h1>

            <p className="max-w-xl text-body-lg text-muted-foreground">
              Clinora gives your clinic a modern website where patients request
              appointments anytime. Every request lands in your spreadsheet and
              pings your team on Telegram — so nothing slips through.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" asChild>
                <a href="#book-demo">
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Contact us on WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-small text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary-600" />
                Patient data stays private
              </div>
              <div className="flex items-center gap-2 text-small text-muted-foreground">
                <Clock className="h-4 w-4 text-primary-600" />
                Set up in under a day
              </div>
              <div className="flex items-center gap-2 text-small text-muted-foreground">
                <Users className="h-4 w-4 text-primary-600" />
                Built for clinics, not hospitals
              </div>
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="relative">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative">
      {/* Main dashboard card */}
      <div className="relative rounded-card border border-border bg-card shadow-floating">
        {/* Browser chrome */}
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

        {/* Dashboard body */}
        <div className="p-5">
          {/* Header row */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="font-display text-h4 font-semibold text-foreground">
                Today's Requests
              </p>
              <p className="text-caption text-muted-foreground">
                Tuesday, July 23
              </p>
            </div>
            <Badge variant="soft">
              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-primary-600" />
              3 new
            </Badge>
          </div>

          {/* Stats row */}
          <div className="mb-5 grid grid-cols-3 gap-3">
            {[
              { label: 'Requests', value: '12', icon: Calendar },
              { label: 'Confirmed', value: '8', icon: CheckCircle2 },
              { label: 'Pending', value: '4', icon: Clock },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-button border border-border bg-muted/30 p-3"
              >
                <stat.icon className="mb-2 h-4 w-4 text-primary-600" />
                <p className="font-display text-h3 font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-caption text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Request list */}
          <div className="space-y-2.5">
            {[
              { name: 'Yasmine K.', time: '10:00 AM', status: 'Confirmed' },
              { name: 'Mohamed B.', time: '2:30 PM', status: 'Pending' },
              { name: 'Lina H.', time: '4:00 PM', status: 'Pending' },
            ].map((req, i) => (
              <div
                key={req.name}
                className={cn(
                  'flex items-center justify-between rounded-button border border-border bg-card p-3 transition-colors',
                  i === 0 && 'border-success/30 bg-success/5'
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-button bg-primary-50 text-small font-semibold text-primary-700">
                    {req.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-small font-medium text-foreground">
                      {req.name}
                    </p>
                    <p className="text-caption text-muted-foreground">{req.time}</p>
                  </div>
                </div>
                <Badge variant={i === 0 ? 'success' : 'outline'}>
                  {req.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating card — Telegram notification */}
      <FloatingCard
        className="absolute -bottom-6 -left-4 w-64 p-4 sm:-left-8"
        // subtle entrance
      >
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-button bg-accent-50 text-accent-600">
            <MessageCircle className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <p className="text-small font-semibold text-foreground">
              New request received
            </p>
            <p className="text-caption text-muted-foreground">
              Yasmine K. — 10:00 AM tomorrow
            </p>
          </div>
        </div>
      </FloatingCard>

      {/* Floating card — call button */}
      <FloatingCard className="absolute -top-4 -right-4 w-48 p-3.5 sm:-right-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-button bg-primary text-primary-foreground">
            <Phone className="h-4 w-4" />
          </div>
          <div>
            <p className="text-small font-semibold text-foreground">Quick call</p>
            <p className="text-caption text-muted-foreground">One tap to confirm</p>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}
