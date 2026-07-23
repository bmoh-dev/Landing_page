import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-badge border px-3 py-1 text-caption font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground',
        accent:
          'border-transparent bg-accent text-accent-foreground',
        success:
          'border-transparent bg-success text-success-foreground',
        warning:
          'border-transparent bg-warning text-warning-foreground',
        error:
          'border-transparent bg-error text-error-foreground',
        outline:
          'border-border bg-card text-foreground',
        soft:
          'border-transparent bg-primary-50 text-primary-700',
        'soft-accent':
          'border-transparent bg-accent-50 text-accent-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
