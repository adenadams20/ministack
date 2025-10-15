import React, { useEffect, useState } from "react";
import { db } from "../services/firebaseConfig.js";
import { collection, onSnapshot, query, orderBy, doc, updateDoc } from "firebase/firestore";

const QuestionListeFirebase = ({ search }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "questions"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, snapshot => {
      setQuestions(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleVote = async (id, votes) => {
    const docRef = doc(db, "questions", id);
    await updateDoc(docRef, { votes: votes + 1 });
  };

  const filteredQuestions = questions.filter(q => {
    const s = search.toLowerCase();
    return q.title.toLowerCase().includes(s) || q.tags.some(t => t.toLowerCase().includes(s));
  });

  return (
    <div className="space-y-4">
      {filteredQuestions.map(q => (
        <div key={q.id} className="border p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold mb-2">{q.title}</h3>
          <p className="mb-2">{q.content}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {q.tags.map(tag => (
              <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{q.author} | {q.date?.toDate ? q.date.toDate().toLocaleDateString() : ""}</span>
            <span>
              Votes: {q.votes}
              <button onClick={() => handleVote(q.id, q.votes)} className="ml-2 px-2 py-1 bg-blue-500 text-white rounded text-xs">
                +1
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionListeFirebase;
