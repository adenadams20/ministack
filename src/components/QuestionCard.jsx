// src/components/QuestionCard.jsx
import React from "react";

const QuestionCard = ({ question }) => {
  //  Protection contre les props non définies
  if (!question) {
    return (
      <div className="p-4 border rounded-lg text-gray-500 italic">
        Question non disponible
      </div>
    );
  }

  const { title, author, date, tags, votes } = question;

  return (
    <div className="flex flex-col border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
          {title}
        </h2>
        <span className="text-sm text-gray-500">{votes ?? 0} votes</span>
      </div>

      <p className="text-sm text-gray-600 mb-2">
        Par <span className="font-medium">{author || "Anonyme"}</span> •{" "}
        {date || "Date inconnue"}
      </p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
