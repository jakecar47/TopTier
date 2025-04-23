"use client";

import React, { useEffect, useState } from "react";
import { ScoreCard } from "./ScoreCard";
import fortnitepic from "@/assets/fortnite.png";
import warzonepic from "@/assets/warzone.png";
import wordlepic from "@/assets/wordle.png";

export interface Score {
  _id: string;
  userIdentification: string;
  game: string;
  winCount: string;
}

interface CardGridContentListProps {
  selectedGame: string;
}

const CardGridContentList: React.FC<CardGridContentListProps> = ({ selectedGame }) => {
  const [scores, setScores] = useState<Score[]>([]);
  const [usernames, setUsernames] = useState<{ [key: string]: string }>({});
  const [wordleAnswer, setWordleAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  async function fetchWordleAnswer() {
    const url = 'https://wordle-answers-solutions.p.rapidapi.com/today';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8ec9cbcb0fmshc80ed629d02f5a1p12ebbcjsnd9cbd80b9e33',
        'x-rapidapi-host': 'wordle-answers-solutions.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setWordleAnswer(result.answer); 
    } catch (error) {
      console.error("Error fetching Wordle answer:", error);
    }
  }

  async function fetchScores() {
    try {
      const res = await fetch(`/api/items/game/${selectedGame}`);
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
            newUsernames[item.userIdentification] =
              res.ok && data.user?.username ? data.user.username : "Unknown User";
          } catch {
            newUsernames[item.userIdentification] = "Unknown User";
          }
        }
      })
    );

    setUsernames((prev) => ({ ...prev, ...newUsernames }));
  }

  useEffect(() => {
    fetchScores();
    if (selectedGame === "Wordle") {
      fetchWordleAnswer();
    }
  }, [selectedGame]);

  const gameImage = {
    Fortnite: fortnitepic.src,
    Warzone: warzonepic.src,
    Wordle: wordlepic.src,
  }[selectedGame] || fortnitepic.src;

  return (
    <section className="p-16 bg-[#0C0F11] max-md:px-5 border-2 border-[#D4AF37] rounded-lg">
      <div className="flex items-center justify-center px-10 space-in-between">
        <header className="max-w-full leading-tight w-[239px]">
          <h1 className="text-5xl font-bold tracking-tight text-[#D4AF37]">{selectedGame}</h1>
          <p className="mt-2 text-xl text-[#D4AF37]">All-time {selectedGame} wins</p>
        </header>
      </div>

      {/* Wordle Answer Reveal */}
      {selectedGame === "Wordle" && wordleAnswer && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full shadow hover:bg-yellow-300 transition duration-300"
          >
            {showAnswer ? "Hide Today's Word" : "Today's Word: Click to Reveal"}
          </button>
          {showAnswer && (
            <p className="mt-2 text-xl text-white">
              <strong>Today's Word:</strong> {wordleAnswer.toUpperCase()}
            </p>
          )}
        </div>
      )}

      {/* Score Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
        {scores.map((score) => (
          <div key={score._id}>
            <ScoreCard
              _id={score._id}
              imageUrl={gameImage}
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
};

export default CardGridContentList;
