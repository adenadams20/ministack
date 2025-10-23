// src/services/answerService.js
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import app from "./firebaseConfig";

const db = getFirestore(app);

// 🔼 / 🔽 Gérer les votes sur une réponse
export const voteAnswer = async (questionId, answerId, userId, direction) => {
  const answerRef = doc(db, "questions", questionId, "answers", answerId);
  const answerSnap = await getDoc(answerRef);

  if (!answerSnap.exists()) return;

  const data = answerSnap.data();
  let { votes, voters } = data;

  // Supprime le vote précédent de l'utilisateur
  voters = voters.filter((v) => v.userId !== userId);

  if (direction === "up") {
    voters.push({ userId, value: 1 });
  } else if (direction === "down") {
    voters.push({ userId, value: -1 });
  }

  // Recalcule le total
  const totalVotes = voters.reduce((sum, v) => sum + v.value, 0);

  await updateDoc(answerRef, { votes: totalVotes, voters });
};
