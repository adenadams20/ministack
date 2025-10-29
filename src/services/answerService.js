import { db } from "./firebase"; // ton instance Firestore
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

// Ajouter une réponse dans Firestore
export const addAnswer = async (questionId, newAnswer) => {
  const questionRef = doc(db, "questions", questionId);

  const answerToAdd = {
    ...newAnswer,
    createdAt: new Date().toISOString(),
  };

  await updateDoc(questionRef, {
    answers: arrayUnion(answerToAdd),
  });

  return answerToAdd; // retourne pour mettre à jour le state local
};
