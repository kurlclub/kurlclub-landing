import Image from 'next/image';

import HeroInput from '../hero-input';

const Hero = () => {
  return (
    <section className="overflow-hidden container flex flex-col items-center gap-5 sm:gap-8 w-full pt-[120px] sm:pt-[150px] md:pt-[221px] text-center">
      {/* Background Glow */}
      <div
        className="absolute top-[-300px] md:top-[-363px] -left-70  md:-left-60 h-[600px] w-[600px] md:h-[800px] md:w-[800px] rounded-full
  bg-[radial-gradient(circle_at_center,#11141C_0%,#232709_34%,#7B882E_65%,#D3F702_82%,#F1FFA3_97%)]
  blur-[30px] opacity-20 z-0"
      />
      <div
        className="absolute top-[45%] right-0 h-[670px] w-[670px] rounded-full 
  bg-[url('/assets/svg/gradient_2.svg')]
  bg-no-repeat bg-cover bg-center
  blur-[15px] z-0"
      />
      <div className="w-[114px] h-[114px] sm:w-[150px] sm:h-[150px] md:w-fit md:h-fit absolute right-0 top-[7%] sm:top-20 md:right-0 md:top-[55px]">
        <Image
          src="/assets/svg/cloud_icon.svg"
          alt="cloud"
          width={221}
          height={292}
        />
      </div>
      <div className="h-[90px] w-[90px] sm:w-[150px] top-[58%] sm:h-[150px] md:w-fit md:h-fit absolute right-0 sm:top-[35%] md:top-[45%]">
        <Image
          src="/assets/svg/arrow_icon.svg"
          alt="arrow"
          width={382}
          height={682}
        />
      </div>
      <div className="h-[120px] w-[120px] sm:w-[200px] sm:h-[200px] md:w-fit md:h-fit absolute top-[7%] sm:top-[35%] left-0 md:top-[40%]">
        <Image
          src="/assets/png/analystic_icon.png"
          alt="analytics"
          width={326}
          height={509}
        />
      </div>

      <div className="flex flex-col gap-4 sm:gap-8 justify-center sm:justify-start h-[calc(100dvh-320px)] sm:h-auto">
        {/* Heading */}
        <h1 className="relative text-[46px] sm:text-7xl md:text-[110px] leading-[105%] z-10">
          Streamline your
          <span className="block font-semibold italic bg-linear-to-r from-[#D3F702] via-[#D3F702] via-35% to-[#F9FFD4] bg-clip-text text-transparent">
            fitness business
          </span>
          <div className="absolute sm:-bottom-1 md:bottom-0 left-[10%] md:-left-1 h-px w-[51px] sm:w-[93px] bg-linear-to-r from-[#D3F702/0] to-[#D3F702]" />
          <div className="absolute sm:-bottom-1 md:bottom-0 right-[15%] sm:right-[130px] h-px w-[51px] sm:w-[120px] bg-linear-to-r from-[#D3F702/0] to-[#D3F702]" />
          <div className="absolute top-[58%] left-[32%] h-px w-[51px] sm:w-[93px] bg-linear-to-r from-[#D3F702/0] to-[#D3F702]" />
        </h1>
        {/*Subtitle */}
        <p className="text-[13px] sm:text-[20px] md:text-[28px] font-medium leading-[109%] max-w-[500px] sm:max-w-[720px] text-center text-white/90 relative z-10">
          Supercharge your fitness business with the powerful tools and services
          provided by <span className="font-semibold">KurlClub</span>, let’s{' '}
          <span className="italic text-primary-green-500">#kurlit</span>
        </p>

        {/* Email Input */}
        <div className="mt-5 sm:mt-0 relative z-10 w-full flex justify-center">
          <HeroInput
            className="md:min-w-[516px] max-w-[516px] py-2 pl-3 sm:pl-4"
            suffixIcon
            placeholder="Enter your email"
          />
        </div>
      </div>

      {/* Banner Image + Bottom Gradient */}
      <div className="relative w-full top-8 sm:top-[50px] md:mt-[88px]">
        <Image
          src="/assets/png/hero-banner.png"
          alt="hero"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#11141C] via-[#11141C]/50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
