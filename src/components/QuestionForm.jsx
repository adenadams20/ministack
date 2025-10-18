import React, { useState } from "react";
import { Editor } from "primereact/editor";
import "primereact/resources/themes/saga-blue/theme.css"; // thème (modifiable)
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const QuestionForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // éditeur
  const [tags, setTags] = useState("");

  // ✅ Vérifie si le bouton peut être activé
  const isFormValid = title.trim() !== "" && description.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      title,
      description,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
    };

    // Envoie de la question (callback parent)
    if (onSubmit) {
      onSubmit(newQuestion);
    }

    // Réinitialisation des champs
    setTitle("");
    setDescription("");
    setTags("");

    alert("Question publiée avec succès !");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 shadow-md rounded-lg"
    >
      <h2 className="text-xl font-semibold mb-2">Poser une question</h2>

      {/* Champ Titre */}
      <div>
        <label className="block font-medium mb-1">Titre</label>
        <input
          type="text"
          placeholder="Entrez un titre clair..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>

      {/* Éditeur PrimeReact */}
      <div>
        <label className="block font-medium mb-1">Description</label>
        <Editor
          value={description}
          onTextChange={(e) => setDescription(e.htmlValue || "")}
          style={{ height: "300px" }}
          placeholder="Décrivez votre problème ou votre question en détail..."
        />
      </div>

      {/* Champ Tags */}
      <div>
        <label className="block font-medium mb-1">
          Tags (séparés par des virgules)
        </label>
        <input
          type="text"
          placeholder="ex: javascript, react, firebase"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      {/* Bouton de soumission */}
      <button
        type="submit"
        className={`px-4 py-2 rounded text-white ${
          isFormValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!isFormValid}
      >
        Publier la question
      </button>
    </form>
  );
};

export default QuestionForm;
