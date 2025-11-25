import React from "react";
import "./letterView.css";
import LetterReplyView from "./LetterReplyView";
import SendIcon from "../../assets/icons/send.svg"

type Reply = {
  author: string;
  content: string;
  createAt: string;
};
interface LetterViewProps {
  id: string;
  author: string;
  title: string;
  content: string;
  createAt: string;
  reply?: Reply[];
}

const LetterView: React.FC<LetterViewProps> = ({
  id,
  author,
  title,
  content,
  createAt,
  reply,
}) => {
  const letterSendDate = new Date(createAt).toLocaleString([], {
    hour12: false,
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className="letterview-wrapper" id={id}>
        <div className="letterview-container">
          <div className="letterview-header">
            <h1>{title}</h1>
            <div className="letterview-header-time">{letterSendDate}</div>
          </div>
          <div className="letterview-content">
            <p>{content}</p>
            <div className="letterview-reply-list">
              {reply?.map((r) => (
                <LetterReplyView
                  key={id + "replyView"}
                  letterAuthor={author}
                  replyAuthor={r.author}
                  content={r.content}
                  createAt={r.createAt}
                />
              ))}
            </div>
          </div>
          <div className="letterview-reply-compose">
            <input type="text" name="" id="reply-input-field" placeholder="write a reply here"/>
            <button>
              <img src={SendIcon} alt="send" />
              send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetterView;
