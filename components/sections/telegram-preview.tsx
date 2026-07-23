import * as React from 'react';
import { Send, Phone, MessageCircle, ExternalLink, Check } from 'lucide-react';
import { Section, SectionHeader } from '@/components/layout';
import { FloatingCard } from '@/components/ui/special-cards';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function TelegramPreviewSection() {
  return (
    <Section id="telegram-preview" className="border-t border-border">
      <SectionHeader
        eyebrow="Telegram Notifications"
        title="The moment a patient requests, your team knows"
        description="No refreshing a dashboard. No checking email. A clean notification arrives on Telegram with everything you need to act."
      />

      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-md">
          {/* Telegram-style message card */}
          <FloatingCard className="overflow-hidden p-0">
            {/* Telegram header */}
            <div className="flex items-center gap-3 border-b border-border bg-muted/40 px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-accent-foreground">
                <Send className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-small font-semibold text-foreground">
                  Clinora Bot
                </p>
                <p className="text-caption text-muted-foreground">
                  just now
                </p>
              </div>
              <Badge variant="soft-accent">bot</Badge>
            </div>

            {/* Message body */}
            <div className="p-5">
              <p className="mb-4 text-small font-semibold text-foreground">
                New appointment request
              </p>

              <div className="space-y-3">
                <DetailRow label="Patient Name" value="Yasmine Khelifi" />
                <DetailRow label="Phone Number" value="+213 7 70 12 34 56" />
                <DetailRow label="Preferred Date" value="Wednesday, July 24" />
                <DetailRow label="Preferred Time" value="10:00 AM" />
              </div>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <Button variant="primary" size="sm" className="flex-1">
                  <Phone className="h-3.5 w-3.5" />
                  Call
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open Sheet
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-2 border-t border-border bg-muted/30 px-5 py-3">
              <Check className="h-3.5 w-3.5 text-success" />
              <span className="text-caption text-muted-foreground">
                Delivered to your team instantly
              </span>
            </div>
          </FloatingCard>
        </div>
      </div>
    </Section>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-caption text-muted-foreground">{label}</span>
      <span className="text-small font-medium text-foreground">{value}</span>
    </div>
  );
}
