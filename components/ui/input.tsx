import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full rounded-input border bg-card text-foreground shadow-xs transition-all duration-200 ease-out-soft placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary-400 focus-visible:ring-4 focus-visible:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: { default: 'h-12 px-4 text-body', sm: 'h-10 px-3 text-small', lg: 'h-14 px-5 text-body-lg' },
      state: { default: 'border-input', error: 'border-error focus-visible:border-error focus-visible:ring-error/10', success: 'border-success focus-visible:border-success focus-visible:ring-success/10' },
    },
    defaultVariants: { size: 'default', state: 'default' },
  }
);

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, state, type, ...props }, ref) => (
    <input type={type} className={cn(inputVariants({ size, state, className }))} ref={ref} {...props} />
  )
);
Input.displayName = 'Input';

export { Input, inputVariants };
