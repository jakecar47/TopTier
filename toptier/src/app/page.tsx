"use client";

import React, { useState } from "react";
import Welcome from "@/components/Welcome";
import Content from "@/components/Content";
import Navbar from "@/components/Navbar";
import connectMongoDB from "@/../config/mongodb";
import Card from "@/components/Card";

function Home() {

  // dynamically store a variable representing whether or not the user is logged in
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // function to update the logged in status variable
  function handleLogin() {
    isLoggedIn = !isLoggedIn;
  } // handleLogin

  connectMongoDB(); // connect to database

  return (
    <div>
      <header>
        <Navbar isLoggedIn={isLoggedIn} isAccount={false}/>
      </header>
      {isLoggedIn ? (
        <Card>
          <Content />
        </Card>
        ) : (
        <Card>
          <Welcome />
        </Card>
      )}
    </div>
  );
}

export default Home;

