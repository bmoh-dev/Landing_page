import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const featureCardVariants = cva(
  'group relative flex flex-col gap-4 rounded-card border p-6 transition-all duration-200 ease-out-soft',
  {
    variants: {
      variant: {
        default: 'border-border bg-card shadow-card hover:shadow-card-hover hover:-translate-y-0.5',
        glass: 'glass shadow-lg hover:shadow-xl hover:-translate-y-0.5',
        floating: 'border-border bg-card shadow-floating hover:shadow-floating hover:-translate-y-0.5',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface FeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureCardVariants> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

function FeatureCard({ className, variant, icon, title, description, href, ...props }: FeatureCardProps) {
  return (
    <div className={cn(featureCardVariants({ variant }), className)} {...props}>
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-button bg-primary-50 text-primary-600 transition-colors duration-200 group-hover:bg-primary-100">
          {icon}
        </div>
      )}
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-display text-h4 font-semibold text-foreground">{title}</h3>
          {href && <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:text-primary-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
        </div>
        <p className="text-body text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export { FeatureCard, featureCardVariants };
