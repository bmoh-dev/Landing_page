import * as React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

function Logo({ size = 32, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      aria-hidden="true"
      {...props}
    >
      <rect width="32" height="32" rx="8" fill="url(#av-logo-grad)" />
      <path
        d="M9 22L13 10H16L20 22H17.5L16.75 19.5H12.25L11.5 22H9ZM12.75 17.5H16.25L14.5 12L12.75 17.5Z"
        fill="white"
      />
      <circle cx="23" cy="11" r="2.5" fill="white" fillOpacity="0.8" />
      <defs>
        <linearGradient
          id="av-logo-grad"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F766E" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface LogoFullProps extends React.HTMLAttributes<HTMLAnchorElement> {
  iconSize?: number;
  href?: string;
}

function LogoFull({
  iconSize = 32,
  href = '/',
  className,
  ...props
}: LogoFullProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-2.5 font-display text-h4 font-bold tracking-tight text-foreground',
        className
      )}
      aria-label="Avenra home"
      {...props}
    >
      <Logo size={iconSize} />
      <span>Avenra</span>
    </a>
  );
}

export { Logo, LogoFull };
