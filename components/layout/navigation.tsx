'use client';

import * as React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LogoFull } from './logo';

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const defaultItems: NavItem[] = [
  { label: 'Problem', href: '#problem' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
];

function Navigation({
  items = defaultItems,
  ctaLabel = 'Book a Clinic Audit',
  ctaHref = '#book-audit',
  className,
}: NavigationProps) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200 ease-out-soft',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent',
        className
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <LogoFull />

        <div className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-body font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="primary" size="sm" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-button text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-button px-4 py-3 text-body font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="primary" size="default" asChild>
                <a href={ctaHref} onClick={() => setOpen(false)}>
                  {ctaLabel}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export { Navigation };
export type { NavItem, NavigationProps };
