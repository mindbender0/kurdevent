import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="w-[800px] relative">
      <div className="relative">
        <Input
          type="search"
          placeholder="Type Here"
          className="w-full p-6 rounded-full"
        />
        <Button className="absolute right-1 top-1/2 -translate-y-1/2 py-2 px-4 bg-rose-600 rounded-full">
          <Search width={16} height={16} />
        </Button>
      </div>
    </form>
  );
}
