"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div>
      <header>
        <Navbar isLoggedIn={isLoggedIn} isAccount={false}/>
      </header>
      <Content />
    </div>
  );
}