import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textareaVariants = cva(
  'flex min-h-[120px] w-full rounded-input border bg-card text-foreground shadow-xs transition-all duration-200 ease-out-soft placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary-400 focus-visible:ring-4 focus-visible:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50 resize-none',
  {
    variants: {
      size: { default: 'px-4 py-3 text-body', sm: 'px-3 py-2 text-small min-h-[80px]', lg: 'px-5 py-4 text-body-lg min-h-[140px]' },
      state: { default: 'border-input', error: 'border-error focus-visible:border-error focus-visible:ring-error/10', success: 'border-success focus-visible:border-success focus-visible:ring-success/10' },
    },
    defaultVariants: { size: 'default', state: 'default' },
  }
);

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, state, ...props }, ref) => (
    <textarea className={cn(textareaVariants({ size, state, className }))} ref={ref} {...props} />
  )
);
Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
