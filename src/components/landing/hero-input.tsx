'use client';
import React, { useState } from 'react';

import Button from '../shared/button';
import toast from 'react-hot-toast';

interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  suffixIcon?: React.ReactNode;
  onSuffixClick?: () => void;
}

const HeroInput: React.FC<InputProps> = ({
  type = 'email',
  name,
  value,
  placeholder,
  onChange,
  disabled = false,
  required = false,
  className = '',
  suffixIcon,
  onSuffixClick,
}) => {
  const [email, setEmail] = useState(value || '');

  const validateEmail = (mail: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(mail);
  };

const handleButtonClick = () => {
  if (!email.trim()) {
    toast.error('Please enter your email address.');
    return;
  }

  if (!validateEmail(email)) {
    toast.error('Please enter a valid email address.');
    return;
  }

  toast.success('Email submitted successfully!');

  if (onSuffixClick) onSuffixClick();
};

  return (
    <div
      className={`flex items-center w-full px-2 sm:px-3 py-2 rounded-xl border border-white/24
          focus-within:border-primary-green-500 hover:border-primary-green-500
          focus-within:bg-[rgba(255,255,255,0.1)] transition-all duration-300 ${className}`}
    >
      <input
        id={name}
        type={type}
        name={name}
        value={email}
        placeholder={placeholder || 'Enter your email'}
        onChange={(e) => {
          setEmail(e.target.value);
          if (onChange) onChange(e);
        }}
        disabled={disabled}
        required={required}
        className="w-full bg-transparent outline-none text-white text-[14px] sm:text-[16px] placeholder:text-white/60"
      />

      {suffixIcon && <Button onClick={handleButtonClick}>Get started</Button>}
    </div>
  );
};

export default HeroInput;
