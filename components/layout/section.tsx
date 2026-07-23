import * as React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    containerSize?: 'narrow' | 'default' | 'wide' | 'ultra';
    containerClassName?: string;
  }
>(({ className, containerSize = 'default', containerClassName, children, ...props }, ref) => (
  <section
    ref={ref}
    className={cn('relative py-16 sm:py-20 lg:py-28', className)}
    {...props}
  >
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  </section>
));
Section.displayName = 'Section';

export { Section };
