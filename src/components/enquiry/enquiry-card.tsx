'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import { BackIcon } from '@/icon/icon';

interface EnquiryCardProps {
  onSubmitClick: () => void;
}

const EnquiryCard: React.FC<EnquiryCardProps> = ({ onSubmitClick }) => {
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      phone: '',
    },
  });

  useEffect(() => {
    const emailFromURL = searchParams.get('email');
    if (emailFromURL) {
      setValue('email', emailFromURL);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: any) => {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      reset();
      onSubmitClick?.();
    }
  };

  return (
    <div className="w-full flex h-dvh md:h-screen items-center container flex-col gap-10 sm:gap-20 md:flex-row md:gap-8 lg:gap-10 xl:gap-20 sm:justify-center overflow-hidden py-7 md:py-0 max-w-[600px]! md:max-w-[1200px]!">
      {/* Background glow */}
      <div
        className="absolute top-[-300px] md:top-[-363px] -left-70 md:-left-60 h-[600px] w-[600px] md:h-[800px] md:w-[800px]
        rounded-full bg-[radial-gradient(circle_at_center,#11141C_0%,#232709_34%,#7B882E_65%,#D3F702_82%,#F1FFA3_97%)]
        blur-[30px] opacity-20 z-0"
      />
      <div
        className="
     sm:h-full flex flex-col gap-6 sm:gap-8 justify-center z-50
  "
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <button className="cursor-pointer w-6 h-6 text-white/60 hover:text-primary-green-500 k-transition">
              {' '}
              <BackIcon />
            </button>
          </Link>
          <span className="h-4 w-[116px]">
            <Image
              src="/assets/svg/logo.svg"
              alt="Kurl Club logo"
              width={116}
              height={16}
            />
          </span>
        </div>
        <p className="mt-1 font-medium text-[28px] sm:text-[42px] md:text-[54px] leading-[100%] md:max-w-[503px]">
          What is the point of being on this Earth if you are going to be like
          <span className="ml-2 bg-linear-to-r from-[#D3F702] via-[#dcff75] to-[#F9FFD4] bg-clip-text text-transparent">
            everyone else?
          </span>
        </p>
        <p className="text-[14px] sm:text-[18px] leading-[109%]">
          -Arnold Shwarzenegger
        </p>
        <span className="md:absolute bottom-[84px] text-[16px] sm:text-[28px] font-medium text-white/30 leading-[34px]">
          Choose Kurl, be different
        </span>
      </div>
      {/* divider */}
      <div
        className="hidden md:block border-r
    [border-image:linear-gradient(to_bottom,#11141C,rgba(255,255,255,0.1),#11141C)_1] h-full w-px"
      ></div>

      {/* Foreground content */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 flex flex-col gap-5 w-full md:max-w-[450px]"
      >
        <div className="flex flex-col gap-3 sm:gap-5">
          <Input
            value={watch('name')}
            label="Name"
            {...register('name', { required: true })}
          />
          <Input
            value={watch('businessName')}
            label="Business Name"
            {...register('businessName', { required: true })}
          />
          <Input
            label="Email"
            type="email"
            value={watch('email')}
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          <Input
            value={watch('phone')}
            label="Phone"
            {...register('phone', { required: true })}
          />
        </div>
        <Button isDisabled={isSubmitting} type="submit" className="w-full mt-3">
          {isSubmitting ? 'Booking...' : 'Book a demo'}
        </Button>
      </form>
    </div>
  );
};

export default EnquiryCard;
