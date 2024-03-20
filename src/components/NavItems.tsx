'use client';

import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { buttonVariants } from './ui/button';

const NavItems = () => {
  // const pathname = usePathname();

  // Define navigation links for home, events, and about pages
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Tickets', href: '/tickets' },
  ];

  return (
    <div className='flex items-center'>
      <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-8 ml-8'>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={buttonVariants({ variant: 'ghost' })}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavItems;
