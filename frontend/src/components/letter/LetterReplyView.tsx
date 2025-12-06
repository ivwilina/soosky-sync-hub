import React from "react";
import "./letterReplyView.css";

interface LetterReplyViewProps {
  currentUser: string;
  author: string;
  content: string;
  createAt: string;
}

const LetterReplyView: React.FC<LetterReplyViewProps> = ({
  currentUser,
  author,
  content,
  createAt,
}) => {
  let replyStyle;
  if (currentUser === author) {
    replyStyle = "from-you";
  } else {
    replyStyle = "";
  }
  const replyDate = new Date(createAt).toLocaleString([], {
    hour12: false,
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className={"letterreply-wrapper " + replyStyle}>
        <div className="letterreply-container">
          <div className="letterreply-content">{content}</div>
        <div className="letterreply-timestamp">{replyDate}</div>
        </div>
      </div>
    </>
  );
};

export default LetterReplyView;
