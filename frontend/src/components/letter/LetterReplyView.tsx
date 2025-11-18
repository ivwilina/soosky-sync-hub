import React from "react";
import "./letterReplyView.css"

interface LetterReplyViewProps {
  letterAuthor: string
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
  if (letterAuthor == replyAuthor ) {
    replyStyle = "from-user";
  }else replyStyle = "from-admin"

  return (
    <>
      <div className={"letterreply-wrapper " + replyStyle}>
        <div className="letterreply-container">
          <div className="letter-reply-content">{content}</div>
          <div className="letter-reply-timestamp">{createAt}</div>
        </div>
      </div>
    </>
  );
};

export default LetterReplyView;
