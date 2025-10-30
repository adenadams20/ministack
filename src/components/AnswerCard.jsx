import React from "react";
import VoteButtons from "./VoteButtons";
import CommentBox from "./CommentBox";

const AnswerCard = ({ answer }) => {
  return (
    <div className="border rounded-md p-4 mb-4 bg-white shadow-sm">
      <div className="flex items-start">
        <VoteButtons itemId={answer.id} votes={answer.votes} type="answer" />
        <div className="ml-4 flex-1">
          <p className="text-gray-800">{answer.content}</p>
          <p className="text-sm text-gray-500 mt-2">
            — {answer.authorName || "Anonyme"}, le{" "}
            {new Date(answer.createdAt).toLocaleDateString()}
          </p>
          <CommentBox itemId={answer.id} type="answer" />
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
