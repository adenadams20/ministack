import React, { useState } from "react";
import { Editor } from "primereact/editor";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useQuestions } from "../context/QuestionContext"; // ✅ Import du contexte

const QuestionForm = () => {
const { createQuestion } = useQuestions(); // ✅ Utilise la bonne fonction du contexte

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
  await createQuestion(newQuestion); // ✅ Ajoute la question dans Firestore
  alert("✅ Question publiée avec succès !");
  setTitle("");
  setDescription("");
  setTags("");
} catch (error) {
  console.error("Erreur lors de la publication :", error);
  alert("❌ Une erreur est survenue lors de la publication de la question.");
}

};

return ( 

  <form
   onSubmit={handleSubmit}
   className="space-y-4 bg-white p-6 shadow-md rounded-lg"
 > <h2 className="text-xl font-semibold mb-2">Poser une question</h2>

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

  //  Éditeur PrimeReact 
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

  // Bouton de soumission 
  <button
    type="submit"
    className={`px-4 py-2 rounded text-white ${
      isFormValid
        ? "bg-blue-600 hover:bg-blue-700"
        : "bg-gray-400 cursor-not-allowed"
    }`}
    disabled={!isFormValid}
  >
    Publier la question
  </button>
</form>


);
};

export default QuestionForm;