import React, { createContext, useEffect, useState } from "react";
import { addQuestion, getQuestions, getQuestionById } from "../services/questionService";

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Charger les questions au montage
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const data = await getQuestions();
      setQuestions(data);
    } catch (error) {
      console.error("Erreur de chargement des questions:", error);
    } finally {
      setLoading(false);
    }
  };

  const createQuestion = async (newQuestion) => {
    await addQuestion(newQuestion);
    await fetchQuestions(); // recharge la liste après ajout
  };

  const getById = async (id) => {
    return await getQuestionById(id);
  };

  return (
    <QuestionContext.Provider
      value={{
        questions,
        loading,
        createQuestion,
        getById,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
