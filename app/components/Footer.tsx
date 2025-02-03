'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
 

export default function Footer() {
 
  return (
<footer className="bg-gray-100 dark:bg-gray-900 mt-10">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <Link href={"/"} className="flex items-center">
          {/* <img
            src="logo.svg"
            className=" h-20 me-3"
            alt=" Logo"
          /> */}
             <Image  className='rounded-3xl relative h-20  z-10 '  alt="Logo" src={"/svg/logo.svg"} width={100} height={100}  quality={100}/>
        
        </Link>
        <div className="text-xs sm:ml-3 mt-5 whitespace-nowrap dark:text-white">
          Jcrown Sport <br />
        13, Arise Stadium Road,  <br /> Abeokuta,
            Ogun, <br /> Nigeria.
          </div>
      </div>



      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 ] dark:text-white">
            Meet Our Team
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="https://flowbite.com/" className="hover:underline">
                Team Squad
              </a>
            </li>
            <li className="mb-4">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Talents
              </a>
            </li>
            <li className="mb-4">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Sponsors{" "}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900   dark:text-white">
            {" "}
            Jcrown Sports
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline "
              >
                About
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                Consultancy
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900   dark:text-white">
            Social
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                X
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>




    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-center">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      ©2025 Jcrown Sport. All rights reserved.
      </span>
    </div>
  </div>
</footer>

  );
} 