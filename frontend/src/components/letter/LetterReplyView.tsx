import React from "react";
import "./letterReplyView.css";

interface LetterReplyViewProps {
  letterAuthor: string;
  replyAuthor: string;
  content: string;
  createAt: string;
}

const LetterReplyView: React.FC<LetterReplyViewProps> = ({
  letterAuthor,
  replyAuthor,
  content,
  createAt,
}) => {
  let replyStyle;
  let author;
  if (letterAuthor == replyAuthor) {
    replyStyle = "from-user";
    author = "user";
  } else {
    replyStyle = "from-admin";
    author = "admin";
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
          <div className="letterreply-author">{author}</div>
          <div className="letterreply-content">{content}</div>
        <div className="letterreply-timestamp">{replyDate}</div>
        </div>
      </div>
    </>
  );
};

export default LetterReplyView;
