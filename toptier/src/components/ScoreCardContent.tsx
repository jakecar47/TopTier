import React from "react";

interface ScoreCardContentProps {
  title: string;
  description: string;
}

export const ScoreCardContent: React.FC<ScoreCardContentProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex items-center w-full max-md:max-w-full">
      <h2 className="text-2xl font-semibold tracking-tight leading-tight text-stone-900 max-md:max-w-full">
        {title}
      </h2>

    </div>
  );
};
