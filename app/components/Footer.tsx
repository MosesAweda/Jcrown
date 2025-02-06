import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Instagram',
    url: '#',
    icon: 'https://res.cloudinary.com/dgso4wgqt/image/upload/v1738849961/instagram_mqgruw.svg'
  },
  {
    name: 'X',
    url: '#',
    icon: 'https://res.cloudinary.com/dgso4wgqt/image/upload/v1738851704/x_ocgx8p.svg'
  },
  {
    name: 'Facebook',
    url: '#',
    icon: 'https://res.cloudinary.com/dgso4wgqt/image/upload/v1738851315/facebook_bath2e.svg'
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: 'https://res.cloudinary.com/dgso4wgqt/image/upload/v1738851524/linkedIn_dih0y0.svg'
  }
];

const teamLinks = [
  { name: 'Team Squad', url: '/about#team' },
  { name: 'Talents', url: '/about#talents' },
  { name: 'Sponsors', url: './#sponsors' }
];

const companyLinks = [
  { name: 'About', url: '#' },
  { name: 'Consultancy', url: '/consultancy' },
  { name: 'Contact', url: '/consultancy#contact' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo and Address Section */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738851527/logo_x1lvxg.svg"
                alt="Jcrown Sport Logo"
                width={80}
                height={80}
                className="h-20 me-3"
              />
            </Link>
            <address className="text-xs sm:ml-3 mt-5 whitespace-nowrap dark:text-white not-italic">
              Jcrown Sport<br />
              13, Arise Stadium Road,<br />
              Abeokuta, Ogun,<br />
              Nigeria.
            </address>
          </div>

          {/* Links Grid Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Team Links */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                Meet Our Team
              </h2>
              <ul className="text-gray-500 dark:text-gray-400  text-xs font-medium space-y-4">
                {teamLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                Jcrown Sports
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 text-xs font-medium space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="mb-6 text-md font-semibold text-gray-900 dark:text-white">
                Social
              </h2>
              <ul className="text-gray-500 text-xs dark:text-gray-400 font-medium space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a 
                      href={social.url} 
                      className="hover:underline flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                      <Image
                        src={social.icon}
                        alt={`${social.name} icon`}
                        width={16}
                        height={16}
                        className="inline"
                      />
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
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