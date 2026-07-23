import * as React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  fade?: boolean;
}

function GridBackground({ className, fade = true, ...props }: BackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 bg-grid',
        fade && 'mask-radial-faded',
        className
      )}
      {...props}
    />
  );
}

function BlobBackground({ className, ...props }: BackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      {...props}
    >
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-primary-200/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent-200/30 blur-3xl animate-blob animate-delay-200" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-secondary-200/20 blur-3xl animate-blob animate-delay-500" />
    </div>
  );
}

function GradientBackground({ className, ...props }: BackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-50/50 via-background to-background',
        className
      )}
      {...props}
    />
  );
}

function GlowBackground({ className, ...props }: BackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      {...props}
    >
      <div className="absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary-100/40 to-transparent blur-3xl" />
    </div>
  );
}

export { GridBackground, BlobBackground, GradientBackground, GlowBackground };
