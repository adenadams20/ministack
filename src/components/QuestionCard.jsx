import React, { useState } from "react";
import { db } from "../services/firebaseConfig.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const CadQuestionFirebase = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Remplis tous les champs");

    await addDoc(collection(db, "questions"), {
      title,
      content,
      tags: tags.split(",").map(t => t.trim()),
      votes: 0,
      author: "Utilisateur",
      date: serverTimestamp(),
    });

    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded shadow">
      <h3 className="text-lg font-semibold mb-3">📝 Poser une question</h3>
      <input
        type="text"
        placeholder="Titre de la question"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
      <textarea
        placeholder="Décris ton problème..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
      <input
        type="text"
        placeholder="Tags (séparés par des virgules)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
        Publier
      </button>
    </form>
  );
};

export default CadQuestionFirebase;
