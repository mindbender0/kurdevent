import Link from 'next/link';
import { Aperture } from 'lucide-react';

// Components
import Wrapper from './wrapper';
import NavItems from './nav-items';
import { buttonVariants } from './ui/button';

const Navbar = () => {
  const user = null;

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
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: 'ghost' })}>
                      Sign in
                    </Link>
                  )}
                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({ variant: 'outline' })}>
                      Create account
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default Navbar;
