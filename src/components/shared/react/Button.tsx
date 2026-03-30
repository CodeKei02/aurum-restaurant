import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';

type Variant = 'solid' | 'outline';

const VARIANTS: Record<Variant, string> = {
  solid: 'bg-gold text-dark hover:bg-gold-dark',
  outline: 'border border-gold text-gold bg-transparent hover:bg-gold hover:text-dark',
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const Button = ({ href, children, variant = 'solid', className = '', style, onClick }: ButtonProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      style={style}
      className={`font-body text-[12px] font-medium tracking-[2px] no-underline transition-colors duration-200 ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
};
