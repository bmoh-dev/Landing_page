import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { CheckCircle2, AlertCircle, Info, XCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const notificationVariants = cva(
  'relative flex w-full items-start gap-3 rounded-card border p-4 shadow-sm transition-all duration-200',
  {
    variants: {
      variant: {
        info: 'border-accent-200 bg-accent-50 text-accent-900',
        success: 'border-success/20 bg-success/5 text-success',
        warning: 'border-warning/20 bg-warning/5 text-warning',
        error: 'border-error/20 bg-error/5 text-error',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

const iconMap = {
  info: Info,
  success: CheckCircle2,
  warning: AlertCircle,
  error: XCircle,
} as const;

export interface NotificationCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  title: string;
  description?: string;
  onClose?: () => void;
}

function NotificationCard({
  className,
  variant = 'info',
  title,
  description,
  onClose,
  ...props
}: NotificationCardProps) {
  const Icon = iconMap[variant!];
  return (
    <div
      role="alert"
      className={cn(notificationVariants({ variant }), className)}
      {...props}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <div className="flex-1 space-y-0.5">
        <p className="text-small font-semibold text-foreground">{title}</p>
        {description && (
          <p className="text-small text-muted-foreground">{description}</p>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="shrink-0 rounded-button p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export { NotificationCard, notificationVariants };
