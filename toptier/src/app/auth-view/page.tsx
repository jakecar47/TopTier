"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import Card from "@/components/Card";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div>
        <header>
          <Card>
            <Navbar isLoggedIn={true} isAccount={true}/>
          </Card>
        </header>
        <Card>
            <Content />
        </Card>
      </div>
    );
} // auth-view Home component
