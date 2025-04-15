import React from "react";
import Link from 'next/link'

interface NavButtonsProps {
  isLoggedIn: boolean;
}

function NavButtons(props: NavButtonsProps) {

  return (
    <div>
      {/* if user is NOT logged in */}
      {!props.isLoggedIn && (
        <div className="flex gap-3 items-center max-md:gap-2 max-sm:ml-auto">
          <button className="p-2 text-base rounded-md bg-[#D4AF37] bg-opacity-0 border-black border-opacity-10 min-w-20 text-stone-900 hover:bg-gray-50">
            Sign in
          </button>
          <button className="p-2 text-base rounded-md bg-[#D4AF37] min-w-20 text-black hover:bg-stone-800">
            Register
          </button>
        </div>
      )}
      {/* if user IS logged in */}
      {props.isLoggedIn && (
        <div className="flex gap-3 items-center max-md:gap-2 max-sm:ml-auto">
          <Link href="/">
            <button 
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300 mb-8">
              Logout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavButtons;
