// src/components/VoteButtons.jsx
import React, { useState } from "react";
import upIcon from "../assets//upvote-svgrepo-com (1).svg"
import downIcon from "../assets//vote-up-svgrepo-com.svg";

const VoteButtons = ({ itemId, votes, onVote, type }) => {
  const [userVote, setUserVote] = useState(null); // "up" | "down" | null

  const handleVote = (direction) => {
    // Si l'utilisateur clique deux fois sur le même bouton, annule le vote
    const newVote = userVote === direction ? null : direction;
    setUserVote(newVote);
    onVote(itemId, newVote, type); // Appelle le service Firestore
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleVote("up")}
        className={`p-1 rounded hover:bg-gray-100 transition ${
          userVote === "up" ? "text-blue-500" : "text-gray-600"
        }`}
      >
        <img src={upIcon} alt="Upvote" className="w-5 h-5" />
      </button>

      <span className="text-sm font-medium text-gray-800">{votes}</span>

      <button
        onClick={() => handleVote("down")}
        className={`p-1 rounded hover:bg-gray-100 transition ${
          userVote === "down" ? "text-red-500" : "text-gray-600"
        }`}
      >
        <img src={downIcon} alt="Downvote" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default VoteButtons;
