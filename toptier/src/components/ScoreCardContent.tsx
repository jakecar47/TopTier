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
<<<<<<< HEAD
    <div className="flex items-center w-full max-md:max-w-full">
=======
    <div className="w-full max-md:max-w-full mt-8">
>>>>>>> 5e68199e177de97c39755eabe1d01e7fac264e86
      <h2 className="text-2xl font-semibold tracking-tight leading-tight text-stone-900 max-md:max-w-full">
        {title}
      </h2>

    </div>
  );
};
