'use client';
import { useEffect, useRef, useState } from 'react';

interface InputProps {
  type?: string;
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  label,
  value = '',
  disabled = false,
  className = '',
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(value.length > 0);

  useEffect(() => {
    setHasValue(value.length > 0);
  }, [value]);

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={`
        relative group flex h-[51px] items-center w-full pt-7 pl-3.5 pb-[9px] rounded-lg 
        bg-secondary-blue-600 border border-transparent 
        transition-all duration-300 
        hover:border-primary-green-500
        focus-within:border-primary-green-500
        active:border-primary-green-500
        cursor-text
        ${className}
      `}
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
        ref={inputRef}
        id={name}
        type={type}
        name={name}
        disabled={disabled}
        required
        value={value}
        onChange={(e) => {
          setHasValue(e.target.value.trim().length > 0);
          onChange?.(e);
        }}
        className="
          w-full bg-transparent outline-none 
          text-white text-[14px] sm:text-[16px] 
          placeholder-transparent text-sm leading-[109%] font-semibold
        "
      />
    </div>
  );
};

export default Input;
