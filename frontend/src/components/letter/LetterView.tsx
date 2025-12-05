import React, { useState, type ChangeEvent } from "react";
import "./letterView.css";
import LetterReplyView from "./LetterReplyView";
import SendIcon from "../../assets/icons/send.svg";

type Reply = {
  author: {
    userId: string;
    name: string;
  };
  content: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
};
interface LetterViewProps {
  currentUserId: string;
  currentUserName: string;
  id: string;
  author: string;
  title: string;
  content: string;
  createAt: string;
  reply?: Reply[];
  postReply: (
    letterId: string,
    userId: string,
    userName: string,
    replyMsg: string
  ) => void;
}

const LetterView: React.FC<LetterViewProps> = ({
  currentUserId,
  currentUserName,
  id,
  author,
  title,
  content,
  createAt,
  reply,
  postReply,
}) => {
  const letterSendDate = new Date(createAt).toLocaleString([], {
    hour12: false,
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const [replyInput, setReplyInput] = useState("");

  const handlePostReply = async () => {
    await postReply(id, currentUserId, currentUserName, replyInput)
  };

  const handleReplyInput = (e: ChangeEvent<HTMLInputElement>) => {
    setReplyInput(e.target.value);
  };

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
              {reply?.map((r: Reply) => (
                <LetterReplyView
                  key={r._id}
                  currentUser={currentUserId}
                  author={author}
                  content={r.content}
                  createAt={r.createdAt}
                />
              ))}
            </div>
          </div>
          <div className="letterview-reply-compose">
            <input
              type="text"
              id="reply-input-field"
              placeholder="write a reply here"
              onChange={handleReplyInput}
            />
            <button onClick={handlePostReply}>
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
