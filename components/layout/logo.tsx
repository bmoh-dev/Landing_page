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
      <rect width="32" height="32" rx="8" fill="url(#cf-logo-grad)" />
      <path
        d="M11 9.5C11 8.67 11.67 8 12.5 8H15C15.83 8 16.5 8.67 16.5 9.5V22.5C16.5 23.33 15.83 24 15 24H12.5C11.67 24 11 23.33 11 22.5V9.5Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M19 14.5C19 13.67 19.67 13 20.5 13C21.33 13 22 13.67 22 14.5V22.5C22 23.33 21.33 24 20.5 24C19.67 24 19 23.33 19 22.5V14.5Z"
        fill="white"
        fillOpacity="0.8"
      />
      <circle cx="20.5" cy="10" r="2" fill="white" fillOpacity="0.9" />
      <defs>
        <linearGradient
          id="cf-logo-grad"
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
      aria-label="Clinora home"
      {...props}
    >
      <Logo size={iconSize} />
      <span>Clinora</span>
    </a>
  );
}

export { Logo, LogoFull };
