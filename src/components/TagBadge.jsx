// src/components/TagBadge.jsx
import React from "react";

const TagBadge = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
    >
      #{label}
    </button>
  );
};

export default TagBadge;
