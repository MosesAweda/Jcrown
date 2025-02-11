'use client';
import Image from 'next/image';
 
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getLinkClassName = (path: string) => {
    const baseClasses = "block py-2 px-3 rounded ";
    const activeClasses = "bg-green-800 text-white";
    const inactiveClasses = "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={closeMenu}
        >
          <img  className='rounded-3xl relative h-20  z-10 '  alt="Logo" src={"https://res.cloudinary.com/dgso4wgqt/image/upload/v1738851527/logo_x1lvxg.svg"}  />
          {/* <img src="/logo.svg" className="h-20" alt="Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div 
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`} 
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={getLinkClassName('/')}
                aria-current={isActive('/') ? 'page' : undefined}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={getLinkClassName('/services')}
                aria-current={isActive('/services') ? 'page' : undefined}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/consultancy"
                className={getLinkClassName('/consultancy')}
                aria-current={isActive('/consultancy') ? 'page' : undefined}
                onClick={closeMenu}
              >
                Consultancy
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={getLinkClassName('/about')}
                aria-current={isActive('/about') ? 'page' : undefined}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 