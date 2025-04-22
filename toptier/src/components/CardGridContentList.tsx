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
  const [usernames, setUsernames] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    async function fetchScores() {
      try {
        const res = await fetch("/api/items/game/Fortnite");
        const data = await res.json();
        if (res.ok) {
          setScores(data.items);
          fetchUsernames(data.items);
        } else {
          console.error("Failed to fetch scores:", data.message);
        }
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    }

    async function fetchUsernames(items: Score[]) {
      const newUsernames: { [key: string]: string } = {};

      await Promise.all(
        items.map(async (item) => {
          if (!usernames[item.userIdentification]) {
            try {
              const res = await fetch(`/api/users/${item.userIdentification}`);
              const data = await res.json();
              if (res.ok && data.user.username) {
                newUsernames[item.userIdentification] = data.user.username;
              } else {
                newUsernames[item.userIdentification] = "Unknown User";
              }
            } catch (err) {
              console.error("Error fetching user:", err);
              newUsernames[item.userIdentification] = "Unknown User";
            }
          }
        })
      );

      setUsernames((prev) => ({ ...prev, ...newUsernames }));
    }

    fetchScores();
  }, []);

  return (
    <section className="p-16 bg-[#0C0F11] max-md:px-5 border-2 border-[#D4AF37]">
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
              _id={score._id}
              imageUrl={fortnitepic.src}
              title={`${score.winCount} wins`}
              description={usernames[score.userIdentification] || "Loading..."}
              userIdentification={score.userIdentification}
              game={score.game}
              editable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardGridContentList;
