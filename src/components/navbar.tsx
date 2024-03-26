"use client";

import Link from "next/link";
import { Aperture } from "lucide-react";

// Components
import Wrapper from "./wrapper";
import NavItems from "./nav-items";
import { Button, buttonVariants } from "./ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleLogout = () => {
    signOut();
  };

  // Close the dropdown when clicking outside of it
  useOnClickOutside(
    dropdownRef,
    () => {
      if (isOpen) {
        setIsOpen(false);
      }
    },
    [dropdownRef]
  );

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <Wrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile Nav */}

              {/* The app Icon */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Aperture size={32} className="text-rose-600" />
                </Link>
              </div>

              {/* Nav items section */}
              <NavItems />

              {/* Sign in and Sign Up Nav Section */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {!session ? (
                    <>
                      <Link
                        href="/sign-in"
                        className={buttonVariants({ variant: "ghost" })}>
                        Sign in
                      </Link>

                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />

                      <Link
                        href="/sign-up"
                        className={buttonVariants({ variant: "outline" })}>
                        Create account
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="relative inline-block text-left">
                        <div>
                          <Avatar onClick={() => setIsOpen(!isOpen)}>
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              alt="@shadcn"
                              className="cursor-pointer"
                            />
                            <AvatarFallback>PP</AvatarFallback>
                          </Avatar>
                        </div>

                        {isOpen && (
                          <div
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu">
                            <div className="py-1" role="none">
                              <div className="px-4 py-2 text-sm text-rose-600">
                                <span className="block">
                                  {session.user?.email}
                                </span>
                              </div>
                              <button
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                onClick={handleLogout}
                                role="menuitem">
                                Sign Out
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
    </div>
  );
}
