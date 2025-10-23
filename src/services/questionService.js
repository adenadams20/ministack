// src/services/questionService.js
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, increment } from "firebase/firestore";
import app from "./firebaseConfig";

const db = getFirestore(app);

// ➕ Ajouter une question
export const addQuestion = async (data) => {
  const docRef = await addDoc(collection(db, "questions"), {
    ...data,
    votes: 0,
    voters: [], // liste des utilisateurs ayant voté
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
};

// 🔍 Récupérer toutes les questions
export const getQuestions = async () => {
  const snapshot = await getDocs(collection(db, "questions"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// 🔼 / 🔽 Gérer les votes
export const voteQuestion = async (questionId, userId, direction) => {
  const questionRef = doc(db, "questions", questionId);
  const questionSnap = await getDoc(questionRef);

  if (!questionSnap.exists()) return;

  const data = questionSnap.data();
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

  await updateDoc(questionRef, { votes: totalVotes, voters });
};
