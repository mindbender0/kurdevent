import Wrapper from '@/components/Wrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { CalendarSearch, Gauge, Navigation } from 'lucide-react';
import Link from 'next/link';

const perks = [
  {
    name: 'Local Events',
    Icon: CalendarSearch,
    description: 'Discover local events and activities in Kurdistan.',
  },
  {
    name: 'Fast Access',
    Icon: Gauge,
    description: 'Find and book tickets to events in just a few clicks.',
  },
  {
    name: 'Easy Navigation',
    Icon: Navigation,
    description: 'Easily find your way to your next adventure.',
  },
];

// `app/page.tsx` is the UI for the `/` URL
export default function Home() {
  return (
    <>
      {/* NOTE: Fragment <></> */}
      <Wrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Discover Your Next Adventure with{' '}
            <span className='text-rose-600'>KurdEvent</span>.
          </h1>
          <p className='mt-4 text-lg max-w-prose text-muted-foreground'>
            We are your gateway to local excitement! From concerts to cultural
            festivals, discover the pulse of your city with lightning-fast
            access and easy navigation. Join us and fuel your passion for local
            fun today!{' '}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-4'>
            <Link href='/events' className={buttonVariants()}>
              Browse New Events
            </Link>
            <Button variant='ghost'>Get your ticket! &rarr;</Button>
          </div>
        </div>

        {/* TODO: List events*/}
      </Wrapper>

      <section className='border-t border-gray-50 bg-gray-50'>
        <Wrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
              >
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-gray-100 text-rose-600'>
                    {<perk.Icon className='w-1/2 h-1/2' />}
                  </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-1 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
