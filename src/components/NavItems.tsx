'use client';

import { PRODUCT_CATEGORIES } from '@/config';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import { useEffect, useRef, useState } from 'react';
import NavItem from './NavItem';

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const isAnyOpen = activeIndex !== null;

  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setActiveIndex(null));

  return (
    <div className='flex gap-4 h-full' ref={ref}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = activeIndex === index;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
