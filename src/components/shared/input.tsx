'use client';
import { forwardRef, useEffect, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      name,
      label,
      value,
      onChange,
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
    const [hasValue, setHasValue] = useState(Boolean(value));

    useEffect(() => {
      setHasValue(Boolean(value));
    }, [value]);

    return (
      <div
        className={`
          relative group flex h-[51px] items-center w-full pt-7 pl-3.5 pb-[9px] rounded-lg 
          bg-secondary-blue-600 border border-transparent 
          transition-all duration-300 
          hover:border-primary-green-500
          focus-within:border-primary-green-500
          cursor-text
          ${className || ''}
        `}
        onClick={() => {
          (ref as any)?.current?.focus?.();
        }}
      >
        <label
          htmlFor={name}
          className={`
            absolute left-3.5 text-primary-blue-100 text-sm leading-[109%]
            pointer-events-none transition-all duration-300
            ${hasValue ? 'top-[9px] translate-y-0' : 'top-1/2 -translate-y-1/2'}
            group-focus-within:top-[9px]
            group-focus-within:translate-y-0
          `}
        >
          {label}
          <span className="text-alert-red-600">*</span>
        </label>
        <input
          ref={ref}
          {...rest}
          id={name}
          name={name}
          type={type}
          disabled={disabled}
          onChange={(e) => {
            setHasValue(e.target.value.length > 0);
            onChange?.(e);
          }}
          className="w-full bg-transparent outline-none text-white text-[14px] sm:text-[16px] placeholder-transparent leading-[109%] font-semibold"
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
