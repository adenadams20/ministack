import {
getFirestore,
collection,
addDoc,
getDocs,
doc,
getDoc,
Timestamp
} from "firebase/firestore";
import app from "./firebaseConfig";

const db = getFirestore(app);

// ➕ Ajouter une question
export const addQuestion = async (questionData) => {
try {
const docRef = await addDoc(collection(db, "questions"), {
...questionData,
createdAt: Timestamp.now(),
});

console.log("✅ Question ajoutée avec ID:", docRef.id);

// ✅ Retourne la question complète (pour mise à jour immédiate)
return { id: docRef.id, ...questionData, createdAt: new Date().toISOString() };

} catch (error) {
console.error(" Erreur d'ajout de la question:", error);
throw error;
}
};

// 🔄 Récupérer toutes les questions
export const getQuestions = async () => {
const querySnapshot = await getDocs(collection(db, "questions"));
return querySnapshot.docs.map((doc) => ({
id: doc.id,
...doc.data(),
}));
};

// 🔍 Récupérer une question par ID
export const getQuestionById = async (id) => {
const docRef = doc(db, "questions", id);
const snapshot = await getDoc(docRef);

if (snapshot.exists()) {
return { id: snapshot.id, ...snapshot.data() };
} else {
throw new Error("Question non trouvée");
}
};
