"use client";

import React, { useEffect, useState } from "react";
import { ScoreCard } from "./ScoreCard";
import fortnitepic from "@/assets/fortnite.png";
import Link from "next/link";

export interface Score {
  _id: string;
  userIdentification: string;
  game: string;
  winCount: string;
}

function CardGridContentList() {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    async function fetchScores() {
      try {
        const res = await fetch("/api/items/game/Fortnite");
        const data = await res.json();
        if (res.ok) {
          setScores(data.items);
        } else {
          console.error("Failed to fetch scores:", data.message);
        }
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    }

    fetchScores();
  }, []);

  return (
    <section className="p-16 bg-[#0C0F11] max-md:px-5 border-2 border-[#D4AF37]">
      {/* Header section */}
      <div className="flex px-10 space-in-between">
        <header className="max-w-full leading-tight w-[239px]">
          <h1 className="text-5xl font-bold tracking-tight text-[#D4AF37]">
            Fortnite
          </h1>
          <p className="mt-2 text-xl text-[#D4AF37]">
            All-time Fortnite wins
          </p>
        </header>
      </div>

      <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {scores.map((score, index) => (
          <div key={score._id} className={index > 0 ? "mt-6" : ""}>
            <ScoreCard
              imageUrl={fortnitepic.src}
              title={`${score.winCount} wins`}
              description={`User ID: ${score.userIdentification}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardGridContentList;
