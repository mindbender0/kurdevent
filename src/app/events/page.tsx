"use client";

import { useEffect, useState } from "react";

// Components
import EventCard from "@/components/event-card";
import Wrapper from "@/components/wrapper";

const events = [
  {
    id: 1,
    title: "Visit an ancient village with KurdistanOutdoor",
    body: "With KurdistanOutdoor, you can visit and know about Kurdistan’s different ancient places. On an upcoming event, KurdistanOutdoor has chosen a nice little village near Akre which many people can participate. Drinks, food, and fun activities will be provided for the participants and there will be special surprises for those who want to attend. You can get your tickets through reserving a ticket on KurdEvent and have your seat saved for you. Through this event, you can network with different people as many people from different nationalities will join the trip. It will be a wonderful experience.",
    date: "18/1/2024",
    ticket: {
      price: "25,000 IQD",
      quantity: 300,
    },
    location: {
      province: "Kurdistan",
      city: "Akre",
    },
    category: "outdoor",
    image: "/static/images/kod.jpg",
  },
  {
    id: 2,
    title: "Have a Picnic with Fun Activities ",
    body: "With KurdistanOutdoor, you can visit and know about Kurdistan’s different ancient places. For this event, they are especially holding a nice and beautiful picnic with your friends and families. You get to meet other friends and families and interact with them. Participants will be provided with tables and chairs. The picnic will have fun and festive activities such as making ballons, making kurdish local foods, and many more. With KurdEvent, you can reserve your tickets for you and your family and friends so that you can be sure to have your seat saved with no trouble. This picnic in the nature of Kurdistan will be a fun experience and one to remember. ",
    date: "20/2/2024",
    ticket: {
      price: "10,000 IQD",
      quantity: 250,
    },
    location: {
      province: "Kurdistan",
      city: "Dukan",
    },
    category: "outdoor",
    image: "/static/images/picnic.png",
  },
  {
    id: 3,
    title: "Enjoy Hardi Salami’s Concert",
    body: "Hardi Salami, one of Kurdistan’s great new singers, will be performing his exclusive album in Chavi Land’s White Hall. There will be a large number of participants. As Hardi will be performing his greatest songs, everyone will be provided with flashlights to bring a beautiful vibe throughout the concert. KurdEvent has available tickets for you so you can reserve and buy your tickets from the comfort of your device. You can be sure of having your seat reserved and where your seat will be. Join the concert and give us your feedback on the great experience.",
    date: "21/3/2024",
    ticket: {
      price: "15,000 IQD",
      quantity: 3000,
    },
    location: {
      province: "Kurdistan",
      city: "Slemani",
    },
    category: "concert",
    image: "/static/images/hs-concert.jpg",
  },
  {
    id: 4,
    title: "Visit Ahmad Awa with KurdistanOutdoor",
    body: "With KurdistanOutdoor, you can visit and have fun at one of the most beautiful natures of Kurdistan, Ahmad Awa. By joining this event, you get to do hiking and meet new people on the trip as well as enjoy Kurdish food. The waterfall of Ahmad Awa will take your breath away. Make sure to bring warm clothes as it is winter. KurdistanOutdoor will have guides throughout the trip for everyone and drinks will be provided. Many people of different nationalities and backgrounds will be on this trip. So, if you want to connect and know new people, this is your chance! Buy your tickets now. Your seat for the trip is one click away.",
    date: "15/12/2024",
    ticket: {
      price: "10,000 IQD",
      quantity: 150,
    },
    location: {
      province: "Kurdistan",
      city: "Ahmed Awa",
    },
    category: "outdoor",
    image: "/static/images/aa-picnic.jpg",
  },
];

export default function Events() {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   fetch('/api/events')
  //     .then((response) => response.json())
  //     .then((data) => setEvents(data))
  //     .catch((error) => console.error('Error fetching events:', error));
  // }, []);

  return (
    <main>
      <Wrapper>
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-rose-600">
            Upcoming Events
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div> */}
        </div>
      </Wrapper>
    </main>
  );
}
