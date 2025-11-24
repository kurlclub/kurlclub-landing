import Image from 'next/image';
import React, { ReactNode } from 'react';

interface FeatureCardProps {
  title: ReactNode;
  description: string;
  image: string;
  position?: 'left' | 'right';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  position = 'left',
}) => {
  return (
    <div
      className={`flex items-start sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 w-full justify-between ${position === 'right' ? 'flex-col sm:flex-row-reverse' : ''}`}
    >
      <div className="flex flex-col gap-3 sm:max-w-[400px] md:max-w-[501px] w-full ">
        <h5 className="uppercase text-[14px] font-semibold text-primary-green-100">
          Features
        </h5>
        <h3 className="font-medium text-[28px] sm:text-[40px] md:text-[50px] leading-[100%]">
          {title}
        </h3>
        <p className="text-[15px]">{description}</p>
      </div>
      <div className="w-full h-full max-w-[600px] sm:max-w-[482px] sm:max-h-[482px]">
        <Image
          src={image}
          alt="Feature"
          width={482}
          height={482}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
