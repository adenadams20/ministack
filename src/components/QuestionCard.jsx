// src/components/QuestionCard.jsx
import React, { useState, useEffect } from "react";

const QuestionCard = ({ question }) => {
  if (!question) {
    return (
      <div className="p-4 border rounded-lg text-gray-500 italic">
        Question non disponible
      </div>
    );
  }

  const { title, description, tags, votes: initialVotes, createdAt } = question;

  // ✅ Hooks directement ici (pas dans une autre fonction)
  const [votes, setVotes] = useState(initialVotes || 0);
  const [votes2, setVotes2] = useState(initialVotes || 0);

  // Charger le vote enregistré au démarrage
  useEffect(() => {
    const savedVotes = localStorage.getItem("votes");
    if (savedVotes) {
      setVotes(parseInt(savedVotes, 10));
    }
  }, []);

  // Sauvegarder à chaque changement
  useEffect(() => {
    localStorage.setItem("votes, votes2", votes , votes2);
  }, [votes]);

  const handleUpVote = () => setVotes(votes + 1);
  const handleUpVote2 = () => setVotes2(votes2 + 1);

  return (
    <div className="border-t-1 p-4 bg-white hover:shadow-lg transition duration-300 flex flex-col sm:flex-row gap-4">
      {/* Votes */}
      <div className="flex flex-col items-center justify-start sm:w-20 text-center">
        <button
          onClick={handleUpVote}
          className="bg-green-500 text-white px-3  rounded-lg hover:bg-green-600 transition"
        >
          👍 Vote +
        </button>

        <span className="text-lg font-semibold text-gray-800 mt-2 mb-2">
          {votes}
        </span>

        <button
          onClick={handleUpVote2}
          className="bg-red-500 text-white px-3  rounded-lg hover:bg-red-600 transition"
        >
          👎 Vote -
        </button>
         <span className="text-lg font-semibold text-gray-800 mt-2 mb-2">
          {votes2}
        </span>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 items-center">
        <h2 className="text-lg sm:text-xl font-semibold text-blue-600 hover:underline cursor-pointer mb-2">
          {title}
        </h2>

        {description && (
          <div
            className="text-gray-800 text-sm sm:text-base mb-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        )}

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

        <small className="text-gray-800">
          Posté le {createdAt?.toDate?.().toLocaleString?.() || "Date inconnue"}
        </small>
      </div>
    </div>
  );
};

export default QuestionCard;
