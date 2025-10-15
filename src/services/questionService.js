// src/services/questionService.js
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, serverTimestamp } from "firebase/firestore";
import app from "./firebaseConfig";

const db = getFirestore(app);
const questionsRef = collection(db, "questions");

// Ajouter une nouvelle question
export const addQuestion = async (questionData) => {
  try {
    const docRef = await addDoc(questionsRef, {
      ...questionData,
      createdAt: serverTimestamp(),
      votes: 0,
    });
    return { id: docRef.id, ...questionData };
  } catch (error) {
    console.error("Erreur lors de l’ajout de la question:", error);
    throw error;
  }
};

// Récupérer toutes les questions
export const getQuestions = async () => {
  try {
    const querySnapshot = await getDocs(questionsRef);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Erreur lors de la récupération des questions:", error);
    throw error;
  }
};

// Récupérer une question par ID
export const getQuestionById = async (id) => {
  try {
    const docRef = doc(db, "questions", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Question non trouvée");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la question:", error);
    throw error;
  }
};
