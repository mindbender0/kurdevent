import Wrapper from '@/components/wrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { CalendarSearch, Gauge, Navigation } from 'lucide-react';
import Link from 'next/link';
import EventCard from '@/components/event-card';

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

const featured = [
  {
    id: 1,
    title: 'Visit an ancient village with KurdistanOutdoor',
    body: 'With KurdistanOutdoor, you can visit and know about Kurdistan’s different ancient places. On an upcoming event, KurdistanOutdoor has chosen a nice little village near Akre which many people can participate. Drinks, food, and fun activities will be provided for the participants and there will be special surprises for those who want to attend. You can get your tickets through reserving a ticket on KurdEvent and have your seat saved for you. Through this event, you can network with different people as many people from different nationalities will join the trip. It will be a wonderful experience.',
    date: '18/1/2024',
    ticket: {
      price: '25,000 IQD',
      quantity: 300,
    },
    location: {
      province: 'Kurdistan',
      city: 'Akre',
    },
    category: 'outdoor',
    image: '/static/images/kod.jpg',
  },
  {
    id: 2,
    title: 'Have a Picnic with Fun Activities ',
    body: 'With KurdistanOutdoor, you can visit and know about Kurdistan’s different ancient places. For this event, they are especially holding a nice and beautiful picnic with your friends and families. You get to meet other friends and families and interact with them. Participants will be provided with tables and chairs. The picnic will have fun and festive activities such as making ballons, making kurdish local foods, and many more. With KurdEvent, you can reserve your tickets for you and your family and friends so that you can be sure to have your seat saved with no trouble. This picnic in the nature of Kurdistan will be a fun experience and one to remember. ',
    date: '20/2/2024',
    ticket: {
      price: '10,000 IQD',
      quantity: 250,
    },
    location: {
      province: 'Kurdistan',
      city: 'Dukan',
    },
    category: 'outdoor',
    image: '/static/images/picnic.png',
  },
  {
    id: 3,
    title: 'Enjoy Hardi Salami’s Concert',
    body: 'Hardi Salami, one of Kurdistan’s great new singers, will be performing his exclusive album in Chavi Land’s White Hall. There will be a large number of participants. As Hardi will be performing his greatest songs, everyone will be provided with flashlights to bring a beautiful vibe throughout the concert. KurdEvent has available tickets for you so you can reserve and buy your tickets from the comfort of your device. You can be sure of having your seat reserved and where your seat will be. Join the concert and give us your feedback on the great experience.',
    date: '21/3/2024',
    ticket: {
      price: '15,000 IQD',
      quantity: 3000,
    },
    location: {
      province: 'Kurdistan',
      city: 'Slemani',
    },
    category: 'concert',
    image: '/static/images/hs-concert.jpg',
  },
];

// `app/page.tsx` is the UI for the `/` URL
export default function Home() {
  return (
    <>
      {/* NOTE: Fragment <></> */}
      <Wrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Discover Your Next Adventure with{' '}
            <span className="text-rose-600">KurdEvent</span>.
          </h1>
          <p className="mt-4 text-lg max-w-prose text-muted-foreground">
            We are your gateway to local excitement! From concerts to cultural
            festivals, discover the pulse of your city with lightning-fast
            access and easy navigation. Join us and fuel your passion for local
            fun today!{' '}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/events" className={buttonVariants()}>
              Browse New Events
            </Link>
            <Button variant="ghost">
              <Link href="/tickets">Get your ticket! &rarr;</Link>
            </Button>
          </div>
        </div>

        {/* TODO: List events*/}
      </Wrapper>

      <section className="border-t border-gray-50 bg-gray-50">
        <Wrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gray-100 text-rose-600">
                    {<perk.Icon className="w-1/2 h-1/2" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-1 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      <section className="p-4">
        <Wrapper>
          <div className="container mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Featured Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Render three event cards */}
              {featured.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {event.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            {/* Center the "Discover more" button */}
            <div className="flex justify-center mt-4">
              <Link href="/events" className={buttonVariants()}>
                Discover more
              </Link>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
