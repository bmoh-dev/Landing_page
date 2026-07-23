import * as React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlobBackground, GridBackground } from '@/components/layout';

const WHATSAPP_URL = 'https://wa.me/213000000000';

export function FinalCTASection() {
  return (
    <section
      id="book-audit"
      className="relative overflow-hidden border-t border-border py-24 sm:py-32"
    >
      <GridBackground className="opacity-40" />
      <BlobBackground />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-display text-foreground sm:text-display-lg">
          See how Avenra can simplify appointment requests for your clinic
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-body-lg text-muted-foreground">
          Book a clinic audit. We\'ll review how requests come in today and show
          you exactly what Avenra would change.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="primary" size="xl" asChild>
            <a href="#book-audit">
              Book a Clinic Audit
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Contact us on WhatsApp
            </a>
          </Button>
        </div>

        <p className="mt-6 text-caption text-muted-foreground">
          No commitment. We\'ll show you the product and answer your questions.
        </p>
      </div>
    </section>
  );
}
