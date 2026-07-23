'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button text-button font-semibold ring-offset-background transition-all duration-200 ease-out-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground shadow-primary hover:bg-primary-700 hover:shadow-lg',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary-600 hover:shadow-md',
        outline: 'border border-border bg-card text-foreground shadow-sm hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700',
        ghost: 'text-foreground hover:bg-muted hover:text-foreground',
        destructive: 'bg-error text-error-foreground shadow-sm hover:bg-error/90',
        link: 'text-primary-600 underline-offset-4 hover:text-primary-700 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-small',
        default: 'h-11 px-5',
        lg: 'h-12 px-7 text-body',
        xl: 'h-14 px-8 text-body-lg',
        icon: 'h-11 w-11',
        'icon-sm': 'h-9 w-9',
        'icon-lg': 'h-12 w-12',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
          {children}
        </Slot>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
