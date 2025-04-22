"use client";

import React from "react";
import Logo from "./Logo";
import NavButtons from "./NavButtons";

interface NavbarProps {
  isLoggedIn: boolean;
}

function Navbar(props: NavbarProps) {
  
  const user = "Colson";
  function retrieveUsername() {
    
  }

  return (
    <nav className="w-full bg-[#0C0F11]">
      <div className="flex items-center justify-between p-6 mx-auto my-0 max-w-[1200px] max-md:p-5 max-sm:p-4">
        {/* Left: Logo */}
        <div className="flex-none">
          <Logo />
        </div>

        {/* Center: Welcome message */}
        {props.isLoggedIn && (
          <div className="flex-1 flex justify-center">
            <p className="text-2xl md:text-2xl font-bold text-center text-white">
              Welcome, {user}
            </p>
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
