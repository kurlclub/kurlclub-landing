import { StartAndGrowCards } from '@/mock/startAndGrow';

import GrowCard from '../grow-card';

const StartAndGrow = () => {
  return (
    <div
      id="about"
      className="pt-9 container sm:pt-[52px] flex flex-col gap-[30px] sm:gap-[47px] w-full"
    >
      <div className="flex flex-col gap-3 sm:gap-5 w-full max-w-[568px] sm:mx-auto items-start sm:items-center">
        <h5 className="uppercase text-[14px] font-semibold text-primary-green-100">
          Start and Grow
        </h5>
        <p className="font-medium text-[28px] sm:text-[40px] md:text-[50px] leading-[100%]">
          Everything <span className="text-primary-green-500">you need</span>
        </p>
        <p className="text-[15px] sm:text-center">
          Enjoy a full fledged dashboard with powerful member and staff
          management tools, integrated attendance device tracking, and WhatsApp
          connectivity
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {StartAndGrowCards.map((item, i) => {
          const Icon = item.icon;
          return (
            <GrowCard
              key={i}
              icon={<Icon />}
              title={item.title}
              description={item.description}
              isRight={(i + 1) % 2 === 1}
              isTop={i === 2 || i === 3}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StartAndGrow;
