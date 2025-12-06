import { ReactNode } from 'react';

interface ButtonProps {
  children: string;
  height?: number;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  suffix?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  onClick,
  suffix,
  className = '',
  type = 'button',
  isDisabled = false,
}: ButtonProps) => {
  const baseClasses =
    'px-3 sm:px-5 py-3 sm:py-[15px] rounded-[10px] flex items-center justify-center cursor-pointer text-[14px] sm:text-[16px] font-medium leading-[109%] transition-all duration-300 transform text-nowrap h-auto h-[47px] disabled:cursor-not-allowed disabled:opacity-50 k-transition';

  const variantClasses =
    variant === 'primary'
      ? 'bg-primary-green-500 text-black hover:bg-primary-green-600 hover:scale-105 hover:-translate-y-[2px] hover:shadow-lg'
      : 'border border-primary-green-500 text-primary-green-500 hover:bg-primary-green-500 hover:scale-105 hover:-translate-y-[2px] hover:shadow-md hover:text-black';

  return (
    <button
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
      {suffix && <span className="ml-1">{suffix}</span>}
    </button>
  );
};

export default Button;
