import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import AnswerCard from "../components/AnswerCard";
import CommentBox from "../components/CommentBox";
import { getQuestionById } from "../services/questionService";
import { getAnswersByQuestionId, addAnswer } from "../services/answerService";

const QuestionDetail = () => {
  const { id } = useParams(); // id de la question depuis l’URL
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = await getQuestionById(id);
      const a = await getAnswersByQuestionId(id);
      setQuestion(q);
      setAnswers(a);
    };
    fetchData();
  }, [id]);

  const handleAddAnswer = async (newAnswer) => {
    await addAnswer(id, newAnswer);
    const updatedAnswers = await getAnswersByQuestionId(id);
    setAnswers(updatedAnswers);
  };

  if (!question) return <p>Chargement...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <QuestionCard question={question} />
      <CommentBox itemId={id} type="question" />
      <h3 className="text-xl font-semibold mt-6 mb-3">Réponses</h3>
      {answers.map((ans) => (
        <AnswerCard key={ans.id} answer={ans} />
      ))}
      <CommentBox
        itemId={id}
        type="answer"
        onSubmit={handleAddAnswer}
        placeholder="Ajoutez votre réponse..."
      />
    </div>
  );
};

export default QuestionDetail;
