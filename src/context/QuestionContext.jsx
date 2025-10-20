import React, { createContext, useContext, useEffect, useState } from "react";
import { addQuestion, getQuestions } from "../services/questionService";

// ✅ Création du contexte
const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
const [questions, setQuestions] = useState([]);
const [loading, setLoading] = useState(true);

// 🔹 Charger toutes les questions au démarrage
useEffect(() => {
fetchQuestions();
}, []);

// 🔹 Récupération de toutes les questions depuis Firestore
const fetchQuestions = async () => {
setLoading(true);
try {
const data = await getQuestions();
setQuestions(data);
} catch (error) {
console.error(" Erreur de chargement des questions :", error);
} finally {
setLoading(false);
}
};

// 🔹 Création d'une nouvelle question (ajout instantané dans le state)
const createQuestion = async (newQuestion) => {
try {
const addedQuestion = await addQuestion(newQuestion);
// ✅ Met à jour la liste locale immédiatement
setQuestions((prev) => [addedQuestion, ...prev]);
} catch (error) {
console.error(" Erreur lors de l'ajout de la question :", error);
}
};

return (
<QuestionContext.Provider value={{ questions, loading, createQuestion }}>
{children}
</QuestionContext.Provider>
);
};

// ✅ Hook personnalisé pour utiliser le contexte
export const useQuestions = () => useContext(QuestionContext);
