import { AccordionData } from '@/mock/faq';

import Accordion from '../accordion';

const Faq = () => {
  return (
    <div
      id="faq"
      className="md:mt-20 container pt-10 sm:pt-[77px] pb-[50px] md:pb-[100px] flex flex-col gap-6 sm:gap-[25px] md:gap-12"
    >
      <div className="flex flex-col gap-3 md:gap-5 w-full mx-auto sm:items-center">
        <h5 className="uppercase text-[14px] font-semibold text-primary-green-100">
          faq&apos;s
        </h5>
        <p className="font-medium text-[28px] sm:text-[40px] md:text-[50px] leading-[100%]">
          Frequently asked{' '}
          <span className="text-primary-green-500">questions</span>
        </p>
      </div>
      <Accordion data={AccordionData} />
    </div>
  );
};

export default Faq;
