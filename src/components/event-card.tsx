// components/EventCard.js

import Image from 'next/legacy/image';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';

export default function EventCard({ event }) {
  const truncatedBody =
    event.body.length > 200 ? event.body.substring(0, 200) + '...' : event.body;
  const capitalizedCategory =
    event.category.charAt(0).toUpperCase() + event.category.slice(1);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
        <p className="text-gray-600 mb-4">{truncatedBody}</p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Location:</span> {event.location.city}
          , {event.location.province}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Category:</span> {capitalizedCategory}
        </p>
      </div>
      <div className="p-4 flex justify-end">
        <Link href={`/events/${event.id}`} className={buttonVariants()}>
          View more details
        </Link>
      </div>
    </div>
    // <div className="bg-white rounded-lg shadow-md overflow-hidden">
    //   <div className="relative h-48">
    //     <Image
    //       src={event.image}
    //       alt={event.title}
    //       layout="fill"
    //       objectFit="cover"
    //       objectPosition="center"
    //     />
    //   </div>
    //   <div className="p-4">
    //     <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
    //     <p className="text-gray-600 mb-4">{truncatedBody}</p>
    //     <p className="text-gray-600 mb-2">
    //       <span className="font-semibold">Location:</span> {event.location.city}
    //       , {event.location.province}
    //     </p>
    //     <p className="text-gray-600 mb-2">
    //       <span className="font-semibold">Category:</span> {capitalizedCategory}
    //     </p>
    //     <div className="flex justify-end">
    //       <Link href={`/events/${event.id}`} className={buttonVariants()}>
    //         View more details
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    // <div className="p-4 border rounded-md shadow-md">
    //   <div>{/* <Image src='/' alt='' /> */}</div>

    //   <div className="border-1 border-red-500">
    //     <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
    //     <p className="text-gray-600">{event.description}</p>
    //   </div>
    // </div>
  );
}

