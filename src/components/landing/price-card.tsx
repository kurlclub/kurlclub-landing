import { TickCircleIcon } from '@/icon/icon';

import Button from '../shared/button';

interface PriceCardProps {
  isPremium?: boolean;
  price: number;
  planeTitle: string;
  features: string[];
}

const PriceCard: React.FC<PriceCardProps> = ({
  isPremium,
  price,
  planeTitle,
  features,
}) => {
  return (
    <div
      className={`relative w-full rounded-3xl p-px transition-all duration-500 transform ${
        isPremium
          ? 'bg-linear-to-b from-primary-green-300 to-secondary-blue-450 hover:brightness-110 hover:scale-[1.02] hover:shadow-[0_0_25px_#D3F70280]'
          : 'bg-white/10 hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_0_20px_#D3F70240]'
      }`}
    >
      <div
        className={`rounded-3xl h-full p-6 flex flex-col gap-4 sm:gap-6 w-full bg-secondary-blue-450`}
      >
        {/* Price */}
        <h6 className="font-medium text-[18px] leading-[120%]">
          <span className="font-semibold text-[32px] text-primary-green-500">
            ₹{price}
          </span>
          <span className="text-white/70 text-[14px]"> /month</span>
        </h6>

        {/* Title + Features */}
        <div className="flex flex-col gap-6 mb-2 sm:mb-3">
          <span className="text-[24px] font-semibold leading-[120%]">
            {planeTitle}
          </span>
          <ul className="flex flex-col gap-3.5 sm:gap-4">
            {features.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[16px] leading-[150%] text-white/80"
              >
                <TickCircleIcon /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <Button
          className={`mt-auto ${
            !isPremium &&
            'bg-secondary-blue-400 text-primary-green-500 hover:bg-secondary-blue-400'
          }`}
        >
          Choose Plan
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
