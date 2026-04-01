import type { ButtonProps, ButtonVariant } from '@/types/button';

const VARIANTS: Record<ButtonVariant, string> = {
  solid: 'bg-gold text-dark hover:bg-gold-dark',
  outline:
    'border border-gold text-gold bg-transparent hover:bg-gold hover:text-dark',
};

export const Button = ({
  href,
  children,
  variant = 'solid',
  className = '',
  style,
  onClick,
}: ButtonProps) => {
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
