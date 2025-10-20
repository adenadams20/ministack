// src/components/QuestionCard.jsx
import React from "react";

const QuestionCard = ({ question }) => {
  if (!question) {
    return (
      <div className="p-4 border rounded-lg text-gray-500 italic">
        Question non disponible
      </div>
    );
  }

  const { title, description, tags, votes, createdAt } = question;

  return (
    <div className="border-t-1  p-5 bg-white hover:shadow-lg transition duration-300 flex flex-col sm:flex-row gap-4">
      {/* Votes */}
      <div className="flex flex-col items-center justify-start sm:w-20 text-center">
        <span className="text-lg font-semibold text-gray-800">{votes ?? 0}</span>
        <span className="text-sm text-gray-800">votes</span>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 items-center">
        <h2 className="text-lg sm:text-xl font-semibold text-blue-600 hover:underline cursor-pointer mb-2">
          {title}
        </h2>

        {/* ✅ Description avec rendu HTML */}
        {description && (
          <div
            className="text-gray-800 text-sm sm:text-base mb-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-medium px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Date */}
        <small className="text-gray-800">
          Posté le {createdAt?.toDate?.().toLocaleString?.() || "Date inconnue"}
        </small>
      </div>
    </div>
  );
};

export default QuestionCard;
