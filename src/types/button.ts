import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';

export type ButtonVariant = 'solid' | 'outline';

export interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
