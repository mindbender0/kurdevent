"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Wrapper from "@/components/wrapper";

async function getEvents() {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/6603e0e9c859604a6a02ff2e/latest`,
    {
      headers: {
        "X-Master-Key":
          "$2a$10$oB80y4ppSBKqkQ0NXCsmu..aHJFZMzeSYQiQWd.Qc6Yae3U8YmGg6",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch the event.");
  }

  return data.record.events;
}

export default function EventDetails({ params }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEvents().then((event) => {
      setEvent(event[params.id - 1]);
      setLoading(false);
    });
  }, [params.id]);

  if (loading) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <div>Error: {error}</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container mx-auto py-8">
        {event ? (
          <>
            <h1 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-rose-600">
              {event.title}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
              {/* Display event details */}
              <div className="flex-1 md:w-3/4">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="responsive"
                  width={500}
                  height={200}
                  className="mb-4 rounded-lg"
                />
                <p>{event.body}</p>
              </div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Wrapper>
  );
}
