'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { testimonialData } from '@/mock/testimonial';

import TestimonialCard from '../landing/testimonial-card';

const ThanksCard = () => {
  // auto redirection
  const [counter, setCounter] = useState(5);
  useEffect(() => {
    if (counter <= 0) {
      window.location.href = '/';
      return;
    }

    const timer = setTimeout(() => setCounter(counter - 1), 1000);

    return () => clearTimeout(timer);
  }, [counter]);

  // carousal
  const chunks = [
    testimonialData.slice(0, 3),
    testimonialData.slice(3, 6),
    testimonialData.slice(6, 9),
  ];
  const loop = (arr: typeof testimonialData) => [...arr, ...arr];
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="flex pt-30 sm:pt-0 sm:items-center gap-10 h-screen overflow-hidden w-full container">
        <div className="w-full sm:w-fit items-center sm:items-start flex flex-col sm:my-auto">
          <span className="h-[100px] w-[100px] sm:h-[153px] sm:w-[143px] ">
            <Image
              src="/assets/svg/party_pop.svg"
              alt="Party celebration"
              width={153}
              height={100}
            />
          </span>
          <p className="font-medium text-[25px] sm:text-[42px] md:text-[54px] leading-[100%] max-w-[410px]">
            Thank you for your
            <span className="ml-2 bg-linear-to-r from-[#D3F702] via-[#dcff75] to-[#F9FFD4] bg-clip-text text-transparent">
              enquiry !
            </span>
          </p>
          <span className="leading-[109%] text-[15px] max-w-[424px] mt-4 sm:mt-8 text-center sm:text-justify">
            Our team would get in touch with you in the next 24 hours, in the
            meantime, see what our customers have to say
          </span>
          <span className="mt-3 sm:mt-4 text-gray-400 text-sm">
            Redirecting to home in{' '}
            <span className="text-primary-green-500 font-medium">
              {counter}
            </span>{' '}
            seconds...
          </span>
        </div>
      </div>
      <div
        className="hidden absolute sm:-right-130 md:-right-60 lg:-right-40 xl:-right-20 top-0 sm:grid grid-cols-3 h-screen gap-6 overflow-hidden max-w-[850px]  pointer-events-none select-none touch-none
       before:absolute before:top-0 before:right-0
    before:w-full before:h-1/2
    before:bg-linear-to-b 
    before:from-[#11141C] 
    before:via-[#11141C]/60 
    before:to-[#11141C]/0
    before:content-['']
    before:z-10
    after:absolute after:bottom-0 after:right-0
    after:w-full after:h-1/2
    after:bg-linear-to-t 
    after:from-[#11141C] 
    after:via-[#11141C]/60 
    after:to-[#11141C]/0
    after:content-['']
    after:z-10
      "
      >
        {chunks.map((col, i) => (
          <div
            key={i}
            className={`flex flex-col gap-4 vertical-marquee ${i % 2 === 1 ? 'reverse' : ''}`}
          >
            {loop(col).map((item, idx) => (
              <div key={idx} className="w-full">
                <TestimonialCard data={item} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThanksCard;
