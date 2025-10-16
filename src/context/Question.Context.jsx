import { createContext, useState, useContext } from "react";

// 1️⃣ Création du contexte
const QuestionContext = createContext();

// 2️⃣ Fournisseur de contexte
export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "Comment utiliser useEffect en React ?",
      author: "Sadio",
      date: "15 octobre 2025",
      tags: ["react", "hooks", "javascript"],
      votes: 8,
    },
    {
      id: 2,
      title: "Quelle différence entre var, let et const ?",
      author: "Alex",
      date: "14 octobre 2025",
      tags: ["javascript", "variables"],
      votes: 5,
    },
  ]);

  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

// 3️⃣ Hook personnalisé pour utiliser le contexte facilement
export const useQuestions = () => useContext(QuestionContext);
