import * as React from 'react';
import { cn } from '@/lib/utils';

const GlassCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('glass rounded-card shadow-lg transition-all duration-200 ease-out-soft', className)} {...props} />
  )
);
GlassCard.displayName = 'GlassCard';

const FloatingCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('rounded-card border border-border bg-card shadow-floating transition-all duration-200 ease-out-soft hover:shadow-floating hover:-translate-y-0.5', className)} {...props} />
  )
);
FloatingCard.displayName = 'FloatingCard';

export { GlassCard, FloatingCard };
