'use client';

import React, { useState } from 'react';

import { MinusIcon, PlusIcon } from '@/icon/icon';

interface AccordionItem {
  title: string;
  contentL: string;
}

interface AccordionProps {
  data: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col divide-y divide-white/10">
      {data.map((item, i) => (
        <div
          onClick={() => toggleAccordion(i)}
          key={i}
          className={`py-5 md:py-7.5 cursor-pointer group border-b border-white/20 ${activeIndex === i && 'pb-5'}`}
        >
          {/* Header */}
          <button className="w-full flex justify-between items-center text-left gap-4 cursor-pointer">
            <h3
              className={`text-[16px] sm:text-[20px] leading-[109%] font-medium text-white group-hover:text-primary-green-500 k-transition ${activeIndex === i && 'text-primary-green-500!'}`}
            >
              {item.title}
            </h3>
            {activeIndex === i ? <MinusIcon /> : <PlusIcon />}
          </button>

          {/* Content */}
          <div
            className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
              activeIndex === i
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div
              className={`overflow-hidden text-white text-[14px] sm:text-[18px] leading-relaxed transition-all duration-300 ${
                activeIndex === i ? 'mt-5' : 'mt-0'
              }`}
            >
              {item.contentL}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
