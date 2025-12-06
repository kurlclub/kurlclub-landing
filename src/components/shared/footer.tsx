import Image from 'next/image';
import Link from 'next/link';

import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from '@/icon/icon';

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Bottom left gradient */}
      <div className="absolute bottom-[-125%] left-[-500px] w-[600px] h-[600px] rounded-full blur-[100px] opacity-80 pointer-events-none bg-[linear-gradient(135deg,#11141C_0%,#232709_34%,#7B882E_65%,#D3F702_82%,#F1FFA3_97%)]" />

      {/* Bottom right gradient */}
      <div className="absolute bottom-[-80%] right-[-10%] w-[320px] h-80 rounded-full blur-[120px] opacity-80 pointer-events-none bg-[linear-gradient(-135deg,#11141C_0%,#232709_34%,#7B882E_65%,#D3F702_82%,#F1FFA3_97%)]" />

      {/* Actual Footer Content */}
      <footer className="relative container grid sm:grid-cols-2 items-start w-full py-10 sm:py-[50px] md:pt-[78px] md:pb-8 gap-7 sm:gap-x-10 md:gap-x-5 sm:gap-y-12 md:gap-y-[42px]">
        {/* Left section */}
        <div className="flex flex-col gap-[26px] max-w-[287px]">
          <Image
            src="/assets/svg/logo.svg"
            alt="Kurl Club logo"
            width={150}
            height={40}
            className="w-[150px] h-auto"
          />
          <p className="text-[16px] leading-[109%]">
            The human body is the ultimate machine, preserve it, cherish it!
          </p>

          <div className="flex items-center gap-5">
            {[
              {
                Icon: InstagramIcon,
                href: 'https://www.instagram.com/kurlclub/',
              },
              { Icon: XIcon, href: 'https://x.com/KurlClub' },
              {
                Icon: FacebookIcon,
                href: 'https://www.facebook.com/share/16giTNY2wg/',
              },
              { Icon: YoutubeIcon, href: 'https://www.youtube.com/@kurlclub' },
            ].map(({ Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="flex gap-20 md:gap-[188px] sm:justify-end items-start">
          <div className="flex flex-col gap-5 sm:gap-6">
            {[
              { label: 'about', href: '#about' },
              { label: 'features', href: '#features' },
              { label: 'blogs', href: '#' },
              { label: 'Testimonials', href: '#testimonial' },
            ].map(({ label, href }, i) => (
              <Link
                key={i}
                href={href}
                className="capitalize text-[15px] leading-[109%] cursor-pointer hover:text-primary-green-500 transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-5 sm:gap-6">
            {[
              { label: 'FAQ', href: '#faq' },
              { label: 'Careers', href: '#' },
              { label: 'Legal policy', href: '#' },
              { label: 'Get a demo', href: '/enquiry' },
            ].map(({ label, href }, i) => (
              <Link
                key={i}
                href={href}
                className="text-[15px] leading-[109%] cursor-pointer hover:text-primary-green-500 transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <span className="text-[16px] leading-[109%] flex items-center gap-1.5 mt-6 sm:mt-0">
          <Image
            src="/assets/svg/ind_flag.svg"
            alt="ind"
            height={28}
            width={28}
          />
          Product of India
        </span>
        <span className="text-[16px] leading-[109%] text-secondary-blue-100 sm:text-end">
          © kurltech systems Pvt Ltd {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
};

export default Footer;
