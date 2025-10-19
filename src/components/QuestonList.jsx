// src/components/QuestionList.jsx
import React from "react";
import { useQuestions } from "../context/QuestionContext";
import QuestionCard from "./QuestionCard";

const QuestionList = () => {
  const { questions, loading } = useQuestions();

  if (loading) return <p>Chargement des questions...</p>;

  return (
    <div className="flex flex-wrap  flex-col bg-white">
      {questions.map((q, i) => (
        <QuestionCard key={i} question={q} />
      ))}
    </div>
  );
};

export default QuestionList;
