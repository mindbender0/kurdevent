"use client";

import { useEffect, useState } from "react";

// Components
import EventCard from "@/components/event-card";
import Wrapper from "@/components/wrapper";
import { ArrowDownWideNarrow, ArrowUpNarrowWide, Search } from "lucide-react";
import events from "@/_data/events";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

async function getEvents() {
  const res = await fetch(
    "https://4000-monospace-kurdevent-1710360340399.cluster-mwrgkbggpvbq6tvtviraw2knqg.cloudworkstations.dev/events"
  );

  return res.json();
}

export default async function Events() {
  const [activeSearch, setActiveSearch] = useState(events);
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = 

  const handleSearch = (e: any) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === "") {
      setActiveSearch(events);
      return;
    }
    setActiveSearch(
      events.filter((event) => event.title.toLowerCase().includes(searchValue))
    );
  };

  const handleCategory = (e: any) => {
    const categoryValue = e.target.value.toLowerCase();
    setSelectedCategory(categoryValue);
    if (categoryValue === "all") {
      setActiveSearch(events);
    } else {
      setActiveSearch(
        events.filter((event) =>
          event.category.toLowerCase().includes(categoryValue)
        )
      );
    }
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));

    setActiveSearch((prevItems) => {
      return prevItems.sort((a: any, b: any) => {
        if (sortOrder === "asc") {
          // Ascending order
          return a - b;
        } else {
          // Descending order
          return b - a;
        }
      });
    });
  };

  const uniqueCategories = Array.from(
    new Set(
      events.map(
        (event) => event.category[0].toUpperCase() + event.category.slice(1)
      )
    )
  );

  return (
    <main>
      <Wrapper>
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-rose-600">
            Upcoming Events
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="relative flex-1 md:w-3/4">
              <Input
                type="search"
                placeholder="Type Here"
                className="w-full p-6 rounded-full flex-1 focus:outline-none focus:ring focus:ring-indigo-200"
                onChange={handleSearch}
              />
              {/* <Button className="absolute right-1 top-1/2 -translate-y-1/2 py-2 px-4 bg-rose-600 rounded-full">
                <Search width={16} height={16} />
              </Button> */}
            </div>

            <Select>
              <SelectTrigger
                value={selectedCategory}
                className="md:ml-2 mt-2 md:mt-0 w-full md:w-auto p-2"
                onChange={handleCategory}>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {uniqueCategories.map((category, index) => (
                    <SelectItem key={index} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger
                className="md:ml-2 mt-2 md:mt-0 w-full md:w-auto p-2"
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort by</SelectLabel>
                  <SelectItem value="name">Title</SelectItem>
                  <SelectItem value="date created">Date Created</SelectItem>
                  <SelectItem value="date modified">Date Modified</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button
              onClick={toggleSortOrder}
              className="ml-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200">
              {sortOrder === "asc" ? (
                <ArrowUpNarrowWide />
              ) : (
                <ArrowDownWideNarrow />
              )}
            </Button>
          </div>

          {activeSearch.length > 0 && sortBy === "title" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {activeSearch.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </Wrapper>
    </main>
  );
}
