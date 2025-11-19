'use client';
import { testimonialData } from '@/mock/testimonial';

import TestimonialCard from '../testimonial-card';

const Testimonials = () => {
  const rows = [
    testimonialData.slice(0, 3),
    testimonialData.slice(3, 6),
    testimonialData.slice(6, 9),
  ];
  const getLoopedRow = (data: typeof testimonialData) => [...data, ...data];

  return (
    <section
      id="testimonial"
      className="pt-10 relative w-full sm:pt-15 md:pt-20 flex flex-col gap-[25px] md:gap-[47px] overflow-hidden container"
    >
      <div className="flex z-20 flex-col gap-3 md:gap-5 w-full mx-auto sm:items-center">
        <h5 className="uppercase text-[14px] font-semibold text-primary-green-100">
          Testimonials
        </h5>
        <p className="font-medium text-[28px] sm:text-[40px] md:text-[50px] leading-[100%]">
          Loved by the <span className="text-primary-green-500">best</span>
        </p>
      </div>

      {/* Auto-scroll carousel rows */}
      <div
        className="flex flex-col gap-4 md:gap-5

     before:content-['']
    before:absolute
    before:top-0
    before:left-0
    before:h-full
      before:w-[10%]
    before:bg-linear-to-r
    before:from-[#11141C]
    before:via-[#11141C]
    before:to-transparent
    before:z-10

    after:content-['']
    after:absolute
    after:top-0
    after:right-0
    after:h-full
    after:w-[10%]
    after:bg-linear-to-l
    after:from-[#11141C]
    after:via-[#11141C]
    after:to-transparent
    after:z-10
      "
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`carousel-row group flex w-max gap-3 md:gap-4 ${
              rowIndex % 2 === 1 ? 'reverse' : ''
            }`}
          >
            {getLoopedRow(row).map((item, i) => (
              <div
                key={i}
                className="max-w-[250px] sm:max-w-[350px] md:max-w-[380px] w-full shrink-0"
              >
                <TestimonialCard data={item} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
