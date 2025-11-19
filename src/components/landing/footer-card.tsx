import { RightArrow } from '@/icon/icon';

import Button from '../shared/button';

const FooterCard = () => {
  return (
    <div className="bg-primary-green-600 w-full py-8 md:py-10 min-h-[198px] flex justify-between gap-3 md:gap-5 bg-[url('/assets/png/footer-cover.png')] bg-no-repeat bg-right bg-contain">
      <div className="container flex-wrap sm:flex-nowrap px-6 sm:px-10 flex items-center justify-between gap-5">
        <div className="flex flex-col gap-3 sm:gap-4 max-w-[482px]">
          <p className="text-primary-blue-500 font-semibold text-[30px] sm:text-[40px] leading-[109%]">
            Make your business fit, like{' '}
            <span className="text-primary-green-900">your clients</span>
          </p>
          <p className="text-secondary-blue-900 text-sm leading-[109%]">
            Sign up today and get a chance to use free for 3 months.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 justify-between sm:h-full item-start sm:items-end">
          <Button
            className="bg-primary-blue-500! text-primary-green-500"
            suffix={<RightArrow />}
          >
            Book a demo
          </Button>
          <span className="italic text-secondary-blue-900 text-[11px] leading-[109%]">
            *T&C applied*
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
