"use client";

import React from "react";
import Logo from "./Logo";
import NavButtons from "./NavButtons";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SearchField from "@/components/SearchField";

interface NavbarProps {
  isLoggedIn: boolean;
  isAccount: boolean;
}

function Navbar(props: NavbarProps) {
  const router = useRouter();
  return (
    <nav className="h-[10vh] items-center w-full bg-[#0C0F11] border-b-2 border-solid border-[#D4AF37]">
      <div className="flex justify-between items-center p-6 mx-auto my-0 max-w-[1200px] max-md:p-5 max-sm:p-4">
        <div className="flex items-center">
          {!props.isLoggedIn && (
            <Link href="/" className="flex items-center">
              <div className="flex-none">
                <Logo />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-center ml-4">
                <span className="text-[#D4AF37]">TopTier</span>
              </h1>
            </Link>
          )}

          {props.isLoggedIn && (
            <Link href="/auth-view" className="flex items-center">
              <div className="flex-none">
                <Logo />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-center ml-4">
                <span className="text-[#D4AF37]">TopTier</span>
              </h1>
            </Link>
          )}
        </div>

        {(props.isLoggedIn && !props.isAccount) && (
          <div className="flex-1 flex justify-center px-4">
            <SearchField />
          </div>
        )}

        {/* Right: NavButtons */}
        <div className="flex-none">
          <NavButtons isLoggedIn={props.isLoggedIn} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
