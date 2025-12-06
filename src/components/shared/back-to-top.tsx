'use client';

import { useEffect, useState } from 'react';

import { TopArrow } from '@/icon/icon';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed right-4 bottom-6 z-50 cursor-pointer
        w-11 h-11 rounded-full flex items-center justify-center
        bg-primary-green-500 text-black
        hover:scale-105 active:scale-95 
        transition-all duration-300
        shadow-lg shadow-primary-green-500/30
        ${
          visible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }
      `}
    >
      <TopArrow />
    </button>
  );
};

export default BackToTop;
