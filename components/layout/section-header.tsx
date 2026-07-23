import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sectionHeaderVariants = cva('flex flex-col', {
  variants: {
    align: {
      left: 'items-start text-left',
      center: 'items-center text-center mx-auto',
    },
    size: {
      default: 'max-w-2xl',
      wide: 'max-w-3xl',
    },
  },
  defaultVariants: {
    align: 'center',
    size: 'default',
  },
});

export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionHeaderVariants> {
  eyebrow?: string;
  title: string;
  description?: string;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, align, size, eyebrow, title, description, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(sectionHeaderVariants({ align, size }), 'gap-4', className)}
      {...props}
    >
      {eyebrow && (
        <span className="text-label font-semibold uppercase tracking-wider text-primary-600">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-h2 text-foreground sm:text-display">
        {title}
      </h2>
      {description && (
        <p className="text-body-lg text-muted-foreground">{description}</p>
      )}
    </div>
  )
);
SectionHeader.displayName = 'SectionHeader';

export { SectionHeader, sectionHeaderVariants };
