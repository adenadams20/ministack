import React, { useState } from "react";
import { Editor } from "primereact/editor";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useQuestions } from "../context/QuestionContext";

const QuestionForm = () => {
const { createQuestion } = useQuestions();

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [tags, setTags] = useState("");

const isFormValid = title.trim() !== "" && description.trim() !== "";

const handleSubmit = async (e) => {
e.preventDefault();
const newQuestion = {
title,
description,
tags: tags
.split(",")
.map((tag) => tag.trim())
.filter((tag) => tag !== ""),
createdAt: new Date().toISOString(),
};


try {
  await createQuestion(newQuestion);
  alert("✅ Question publiée avec succès !");
  setTitle("");
  setDescription("");
  setTags("");
} catch (error) {
  console.error("Erreur lors de la publication :", error);
  alert("❌ Une erreur est survenue lors de la publication de la question.");
}

};

return ( <div className="flex justify-center py-10 px-4 bg-sky-900"> <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8"> <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
Poser une question </h2>

    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Champ Titre */}
      <div>
        <label className="block font-medium mb-1 text-gray-800">
          Titre de la question
        </label>
        <input
          type="text"
          placeholder="Exemple : Comment utiliser useState en React ?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <p className="text-sm text-gray-800 mt-1">
          Soyez précis et imaginez que vous posez cette question à une autre
          personne.
        </p>
      </div>

      {/* Éditeur PrimeReact */}
      <div>
        <label className="block font-medium mb-1 text-gray-800">
          Description
        </label>
        <Editor
          value={description}
          onTextChange={(e) => setDescription(e.htmlValue || "")}
          style={{ height: "300px" }}
          placeholder="Décrivez votre problème en détail..."
          className="border border-gray-500 rounded"
        />
        <p className="text-sm text-gray-800 mt-1">
          Incluez ce que vous avez essayé, les erreurs reçues, et tout
          contexte utile.
        </p>
      </div>

      {/* Champ Tags */}
      <div>
        <label className="block font-medium mb-1 text-gray-800">
          Tags (séparés par des virgules)
        </label>
        <input
          type="text"
          placeholder="ex : javascript, react, firebase"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500 mt-1">
          Ajoutez jusqu’à 5 tags pour décrire les technologies concernées.
        </p>
      </div>

      {/* Bouton de soumission */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!isFormValid}
          className={`px-6 py-2 rounded text-white font-medium ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Publier la question
        </button>
      </div>
    </form>
  </div>
</div>

);
};

export default QuestionForm;
