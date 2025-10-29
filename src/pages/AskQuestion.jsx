import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuestions } from "../context/QuestionContext";
import QuestionForm from "../components/QuestionForm";

const AskQuestion = () => {
  const { createQuestion } = useQuestions();
  const navigate = useNavigate();

  const handleSubmit = async (newQuestion) => {
    await createQuestion(newQuestion);
    navigate("./Home.jsx"); // redirige vers la page d’accueil après soumission
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <QuestionForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AskQuestion;
