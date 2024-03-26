"use client";

import Wrapper from "@/components/wrapper";
import React, { useEffect } from "react";
import events from "@/_data/events";
import router, { usePathname } from "next/navigation";

export default function Event() {
  const pathname = usePathname();

  // Find the event by ID
  // const event = events.find((event) => event.id === parseInt(id));

  // if (!event) {
  //   return <div>Event not found!</div>;
  // }

  return (
    <Wrapper>
      <div>Details Page</div>
      {/* <h1>{event.title}</h1>
      <p>{event.body}</p>
      <p>Date: {event.date}</p>
      <p>Ticket Price: {event.ticket.price}</p>
      <p>Tickets Available: {event.ticket.quantity}</p>
      <p>
        Location: {event.location.city}, {event.location.province}
      </p>
      <p>Category: {event.category}</p>
      <img src={event.image} alt={event.title} style={{ maxWidth: "100%" }} /> */}
    </Wrapper>
  );
}
