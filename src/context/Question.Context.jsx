// src/context/QuestionContext.jsx
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { addQuestion, getQuestions, getQuestionById } from "../services/questionService";

// Création du contexte
const QuestionContext = createContext();

// Hook personnalisé sécurisé
export const useQuestions = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useQuestions doit être utilisé à l'intérieur d'un <QuestionProvider>");
  }
  return context;
};


export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fonction pour récupérer toutes les questions
  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getQuestions();
      // Trier les questions par date (la plus récente en premier)
      const sorted = data.sort((a, b) => {
        if (a.createdAt?.seconds && b.createdAt?.seconds) {
          return b.createdAt.seconds - a.createdAt.seconds;
        }
        return 0;
      });
      setQuestions(sorted);
    } catch (error) {
      console.error("Erreur lors du chargement des questions :", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Charger les questions au montage du composant
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  // Créer une nouvelle question
  const createQuestion = async (newQuestion) => {
    try {
      await addQuestion(newQuestion);
      await fetchQuestions(); // recharger la liste après ajout
    } catch (error) {
      console.error("Erreur lors de la création de la question :", error);
    }
  };

  // Récupérer une question précise par ID
  const getById = async (id) => {
    try {
      return await getQuestionById(id);
    } catch (error) {
      console.error("Erreur lors de la récupération de la question :", error);
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        questions,
        loading,
        fetchQuestions,
        createQuestion,
        getById,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
