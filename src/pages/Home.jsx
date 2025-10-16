// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import QuestionList from "../components/QuestonList";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Liste des questions</h1>
        <button
          onClick={() => navigate("./AskQuestion.jsx")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Poser une question
        </button>
      </div>
      <QuestionList />
    </div>
  );
};

export default Home;
