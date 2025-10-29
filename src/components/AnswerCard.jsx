// src/components/AnswerForm.jsx
import React, { useState } from "react";
import { Editor } from "primereact/editor";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useQuestions } from "../context/QuestionContext";

const AnswerCard = ({ questionId }) => {
  const { addAnswerToQuestion } = useQuestions(); // 🔹 fonction à créer dans ton contexte
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      alert("⚠️ La réponse ne peut pas être vide.");
      return;
    }

    const newAnswer = {
      questionId,
      content,
      createdAt: new Date().toISOString(),
    };

    try {
      setIsSubmitting(true);
      await addAnswerToQuestion(questionId, newAnswer);
      alert("✅ Réponse envoyée avec succès !");
      setContent("");
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("❌ Une erreur est survenue lors de l'envoi de la réponse.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" h-200  mx-auto w-max mt-20 bg-white shadow-md rounded-lg p-6 ">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
        Votre réponse
      </h3>

      <form onSubmit={handleSubmit}>
        <Editor
          value={content}
          onTextChange={(e) => setContent(e.htmlValue || "")}
          style={{ height: "200px" }}
          placeholder="Rédigez votre réponse ici..."
          className="border border-gray-400 rounded"
        />

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            disabled={!content.trim() || isSubmitting}
            className={`px-6 py-2 rounded text-white font-medium ${
              content.trim()
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Envoi..." : "Publier la réponse"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnswerCard;
