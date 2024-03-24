import Link from 'next/link';
import React from 'react';
import Wrapper from './wrapper';

export default function Footer() {
  return (
    <footer className="bg-rose-600 text-white py-4">
      <Wrapper>
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm font-bold">
            Kurdevent &copy; {new Date().getFullYear()}
          </p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gray-300">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="hover:text-gray-300">
                  Tickets
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </footer>
  );
}
