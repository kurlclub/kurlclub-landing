import { ReactNode } from 'react';

interface growCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  isRight?: boolean;
  isTop?: boolean;
}

const GrowCard: React.FC<growCardProps> = ({
  icon,
  title,
  description,
  isRight,
  isTop,
}) => {
  const GradientClass = isTop
    ? isRight
      ? 'bg-linear-to-tr from-[#282B32] to-[#282B32]/10'
      : 'bg-linear-to-tl from-[#282B32] to-[#282B32]/10'
    : isRight
      ? 'bg-linear-to-br from-[#282B32] to-[#282B32]/10'
      : 'bg-linear-to-bl from-[#282B32] to-[#282B32]/10';
  return (
    <div
      className={`
    p-3 sm:p-5 md:p-6 
    rounded-xl sm:rounded-2xl 
    flex flex-col gap-3 sm:gap-4 md:gap-[18px]
    border border-white/5
    transition-all duration-500 cursor-default
    ${GradientClass}

    /* Hover effect disabled on mobile */
    hover:shadow-[0_0_20px_rgba(212,247,2,0.1)]
    hover:scale-[1.02] 
    active:scale-100
  `}
    >
      <span
        className="
      w-8 h-8 
      sm:w-12 sm:h-12 
      md:w-14 md:h-14 
      flex items-center justify-center 
      rounded-lg bg-secondary-blue-400
       [&>svg]:w-4 [&>svg]:h-4   
    sm:[&>svg]:w-6 sm:[&>svg]:h-6 
    md:[&>svg]:w-7 md:[&>svg]:h-7 
    "
      >
        {icon}
      </span>

      <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3.5 text-white">
        <h6
          className="
        font-medium
        text-[16px] sm:text-[20px] md:text-[24px]
        leading-tight md:leading-[109%]
    "
        >
          {title}
        </h6>

        <p
          className="
        font-light 
        text-[13px] sm:text-[14px] md:text-[16px]
        text-white/70 leading-relaxed
    "
        >
          {description.includes('.') ? (
            <>
              <span className="font-semibold mr-1 text-white">
                {description.split('.')[0]}.
              </span>
              {description.split('.').slice(1).join('.')}
            </>
          ) : (
            description
          )}
        </p>
      </div>
    </div>
  );
};

export default GrowCard;
