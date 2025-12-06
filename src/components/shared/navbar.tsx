'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

import { CloseIcon, Hamburger } from '@/icon/icon';
import { navLinks } from '@/mock/layout';

import Button from './button';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  const links = useMemo(() => navLinks, []);

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100)
        setVisible(false);
      else setVisible(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .map((link) => document.querySelector(link.href))
        .filter((el): el is HTMLElement => el instanceof HTMLElement);

      const scrollPosition = window.scrollY + 150;

      let foundActive = false;

      for (const section of sections) {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveLink(`#${section.id}`);
          foundActive = true;
          break;
        }
      }

      if (!foundActive) {
        setActiveLink('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 md:top-8 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-7xl px-[95px] p-4 sm:py-6 h-auto md:h-[90px] md:rounded-[112px] flex items-center justify-between gap-4 z-50 
      border-b md:border border-white/20
      backdrop-blur-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-500 container
      ${visible ? 'md:translate-y-0 opacity-100 md:top-8' : 'md:-translate-y-[120%] opacity-0'}
      `}
    >
      <Link href="/" className="w-[120px] sm:w-[150px] md:w-auto">
        <img src="assets/svg/logo.svg" alt="logo" className="h-6" />
      </Link>

      <div className="flex items-center gap-5">
        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`md:relative fixed top-0 right-0 h-dvh md:h-auto p-10 sm:p-20 md:p-0 w-full sm:w-[500PX] md:w-auto bg-secondary-blue-700 md:bg-transparent flex flex-col md:flex-row gap-6 pt-10 sm:pt-15 md:pt-0 z-40
            transform transition-transform duration-500 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          `}
        >
          <span className="block pb-4 text-white/70 border-white/70 md:hidden border-b w-full">
            Navigation
          </span>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden absolute top-6 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-primary-green-500/70"
          >
            <CloseIcon />
          </button>

          <ul className="mt-5 md:mt-0 flex flex-col md:flex-row gap-1 md:gap-5 md:p-0">
            {links.map((link) => (
              <li key={link.id} onClick={() => setOpen(false)}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`p-2 text-[20px] sm:text-[32px] md:text-[16px] font-medium transition-all duration-300
                    ${
                      activeLink === link.href
                        ? 'text-[#D4FF00] decoration-[#D4FF00]'
                        : 'text-white md:text-white/80 hover:text-[#D4FF00]'
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-4 items-center md:hidden">
            <Link
              href="https://app.kurlclub.com/auth/login"
              target="_blank"
              className="w-full"
            >
              <Button variant="primary" className="w-full">
                Login
              </Button>
            </Link>
            <Link href="/enquiry" className="w-full">
              <Button variant="secondary" className="w-full">
                Book a demo
              </Button>
            </Link>
          </div>
        </div>

        <Link href="https://app.kurlclub.com/auth/login" target="_blank">
          <Button variant="primary" className="hidden md:block">
            Login
          </Button>
        </Link>
        <Link href="/enquiry">
          <Button variant="secondary" className="hidden md:block">
            Book a demo
          </Button>
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="md:hidden mr-1 w-6 h-6"
        >
          <Hamburger />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
