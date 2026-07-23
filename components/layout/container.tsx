import * as React from 'react';
import { cn } from '@/lib/utils';

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    size?: 'narrow' | 'default' | 'wide' | 'ultra';
  }
>(({ className, size = 'default', ...props }, ref) => {
  const sizes = {
    narrow: 'max-w-3xl',
    default: 'max-w-7xl',
    wide: 'max-w-8xl',
    ultra: 'max-w-10xl',
  };
  return (
    <div
      ref={ref}
      className={cn('mx-auto w-full px-5 sm:px-6 lg:px-8', sizes[size], className)}
      {...props}
    />
  );
});
Container.displayName = 'Container';

export { Container };
