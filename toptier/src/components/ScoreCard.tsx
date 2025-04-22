import React from "react";
import { ScoreCardContent } from "./ScoreCardContent";

interface ScoreCardProps {
  imageUrl: string;
  title: string;
  description: string;
  isUser?: boolean;
}

const ScoreCard: React.FC<ScoreCardProps> = ({
  imageUrl,
  title,
  description,
  isUser,
}) => {
  return (
    <article className="flex flex-wrap gap-6 items-start p-6 w-full bg-white rounded-lg border border-solid border-zinc-300 min-w-60 max-md:px-5 max-md:max-w-full">
      <img
        src={imageUrl}
        alt={title}
        className="object-contain shrink-0 w-40 aspect-square min-h-40 min-w-40"
      />
      <div className="flex-1 shrink basis-0 min-w-40 max-md:max-w-full">
        <ScoreCardContent title={title} description={description} />
      </div>
      {isUser && (
        <div>
          <button
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300 mr-9 mt-14">
              Edit
          </button>
          <button
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300 mr-9 mt-14">
              Delete
          </button>
        </div>
      )}
    </article>
  );
};

export default ScoreCard;