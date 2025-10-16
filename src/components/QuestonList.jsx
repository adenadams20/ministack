import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionList = ({ questions }) => {
  if (!questions || questions.length === 0) {
    return <p className="text-gray-500">Aucune question pour le moment.</p>;
  }

  return (
    <div className="space-y-4">
    
      {questions.map((q) => (
        <QuestionCard key={q.id} question={q} />
      ))}
    </div>
  );
};

export default QuestionList;
