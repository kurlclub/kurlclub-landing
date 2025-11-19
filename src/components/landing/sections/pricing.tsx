import { pricingData } from '@/mock/pricing';

import PriceCard from '../price-card';

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="pt-10 container sm:pt-15 sm::pt-20 flex flex-col gap-[25px] md:gap-[47px] w-full"
    >
      <div className="flex flex-col gap-3 md:gap-5 w-full mx-auto sm:items-center">
        <h5 className="uppercase text-[14px] font-semibold text-primary-green-100">
          Pricing
        </h5>
        <p className="font-medium text-[28px] sm:text-[40px] md:text-[50px] leading-[100%]">
          Plans that{' '}
          <span className="text-primary-green-500">grow with you</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 md:gap-7.5 ">
        {pricingData.map((plan, i) => (
          <PriceCard
            key={i}
            isPremium={plan.isPremium}
            price={plan.price}
            planeTitle={plan.plan_title}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
