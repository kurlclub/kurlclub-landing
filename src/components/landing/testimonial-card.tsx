import Image from 'next/image';

interface TestimonialCardProps {
  data: {
    star_count: number;
    content: string;
    client_name: string;
    client_from: string;
    client_logo?: string;
    client_avatar?: string | null;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  return (
    <div
      className="
    sm:min-h-[150px] p-5 sm:p-6 rounded-2xl cursor-pointer border border-white/10 
   backdrop-blur-md 
    transition-all duration-300 ease-out
     hover:bg-white/5 hover:backdrop-blur-md 
hover:-translate-y-1
hover:shadow-[0_4px_12px_rgba(255,255,255,0.08)] h-full
  "
    >
      <div className="flex flex-col justify-between gap-10 h-full">
        <p className="text-[14px] sm:text-[.95rem] text-wrap">
          {data.content}.
        </p>
        <div className="flex items-center gap-3">
          {data.client_avatar ? (
            <Image
              alt="Avatar"
              className=" w-5 h-5 sm:h-8 sm:w-8 rounded-full border-2 object-cover"
              src={data.client_avatar}
              width={32}
              height={32}
            />
          ) : (
            <span
              className="
                w-5 h-5 sm:h-8 sm:w-8 rounded-full bg-secondary-blue-400 
                flex items-center justify-center 
                text-[10px] sm:text-[14px] font-normal text-white
              "
            >
              {data.client_name[0].toUpperCase()}
            </span>
          )}
          <span className="text-[12px] sm:text-[14px] text-white/70 font-medium lowercase">
            @{data.client_name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
