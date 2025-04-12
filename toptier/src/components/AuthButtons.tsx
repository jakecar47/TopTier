import React from "react";

function AuthButtons() {
  return (
    <div className="flex gap-3 items-center max-md:gap-2 max-sm:ml-auto">
      <button className="p-2 text-base rounded-md bg-[#D4AF37] bg-opacity-0 border-black border-opacity-10 min-w-20 text-stone-900 hover:bg-gray-50">
        Sign in
      </button>
      <button className="p-2 text-base rounded-md bg-[#D4AF37] min-w-20 text-black hover:bg-stone-800">
        Register
      </button>
    </div>
  );
}

export default AuthButtons;
