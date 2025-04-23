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
<<<<<<< HEAD
        <Navbar isLoggedIn={isLoggedIn} isAccount={false}/>
=======
        <Card>
          <Navbar isLoggedIn={isLoggedIn}/>
        </Card>
>>>>>>> 5e68199e177de97c39755eabe1d01e7fac264e86
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

