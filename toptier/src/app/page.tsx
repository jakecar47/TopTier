'use client';
import React, { useState } from 'react';
import Welcome from '@/components/Welcome';
import Content from '@/components/Content';
import Navbar from '@/components/Navbar';

function HomePage() {
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  function handleLogin() {
    isLoggedIn = !isLoggedIn;
  } // handleLogin

  return (
    <div>
      <header>
        <Navbar isLoggedIn={isLoggedIn} />
      </header>
      {isLoggedIn ? <Content /> : <Welcome />}
    </div>
  );
}

export default HomePage;
