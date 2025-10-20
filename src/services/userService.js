import { auth } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getAllUsers = async () => {
  const usersCollection = collection(db, "users");
  const snapshot = await getDocs(usersCollection);
  return snapshot.docs.map((doc) => doc.data());
};
