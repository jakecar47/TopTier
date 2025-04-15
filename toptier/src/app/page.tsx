"use client";
import React, { useState } from "react";
import Welcome from "@/components/Welcome";
import Content from "@/components/Content";
import Navbar from "@/components/Navbar";

function HomePage() {

  // dynamically store a variable representing whether or not the user is logged in
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  // function to update the logged in status variable
  function handleLogin() {
    isLoggedIn = !isLoggedIn;
  } // handleLogin

  return (
    <div>
      <header>
        <Navbar isLoggedIn={isLoggedIn}/>
      </header>
      {isLoggedIn ? <Content /> : <Welcome />}
    </div>
  );
}

export default HomePage;
