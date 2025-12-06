import React, { useState } from "react";
import "../styles/letterBox.css";
import LetterMini from "../../../components/letter/LetterMini";
import LetterView from "../../../components/letter/LetterView";
import LetterCompose from "../../../components/letter/LetterCompose";
import useIncognitoLetterService from "../services/incognitoLetter.service";
import type { IncognitoLetter } from "../services/incognitoLetter.service";
import { useAuth } from "../../../contexts/auth/useAuth";

/*-----------------------------------------------------------------------------------------*/

const LetterBox = () => {
  // handle page rendering & event
  const { user } = useAuth();
  const { incognitoLettersList, sendLetter, replyLetter, changeLetterStatus } =
    useIncognitoLetterService(user.userId, user.permission);

  const [selectedLetterId, setSelectedLetterId] = useState<string | null>("");
  const selectedLetter: IncognitoLetter | undefined = incognitoLettersList.find(
    (letter) => letter._id === selectedLetterId
  );

  const handleLetterMiniClick = async (_id: string) => {
    setSelectedLetterId(_id);
    const tempSelectedLetter = incognitoLettersList.find(
      (letter) => letter._id === selectedLetterId
    );
    if (
      tempSelectedLetter?.status === "pending" &&
      user.permission === "admin"
    ) {
      await changeLetterStatus(_id, "read");
    }
  };

  // handle reply a letter
  const handlePostReply = async (
    letterId: string,
    userId: string,
    userName: string,
    replyMsg: string
  ) => {
    if (user.permission === "admin") {
      await changeLetterStatus(letterId, "replied");
      await replyLetter(letterId, userId, userName, replyMsg);
    } else {
      await replyLetter(letterId, userId, userName, replyMsg);
    }
  };

  // handle which letter will be displayed
  let letterView = selectedLetter ? (
    <LetterView
      currentUserId={user.userId}
      currentUserName={user.userName}
      key={selectedLetter._id}
      id={selectedLetter._id}
      title={selectedLetter.title}
      content={selectedLetter.content}
      createAt={selectedLetter.createdAt}
      reply={selectedLetter.reply}
      postReply={handlePostReply}
    />
  ) : (
    <div className="letterview-placeholder"></div>
  );

  if (selectedLetterId === "compose") {
    letterView = (
      <LetterCompose
        currentUserId={user.userId}
        currentUserName={user.userName}
        postLetter={sendLetter}
      />
    );
  }

  return (
    <>
      <div className="letterbox-wrapper">
        <div className="letterbox-container">
          <div className="letterbox-list-container">
            <div className="letterbox-list">
              {incognitoLettersList.map((letter) => (
                <LetterMini
                  key={letter._id}
                  id={letter._id}
                  title={letter.title}
                  time={letter.createdAt}
                  status={letter.status}
                  onClick={handleLetterMiniClick}
                />
              ))}
            </div>
            {!(user.permission === "admin") ? (
              <div className="compose-letter-button-wrapper">
                <button
                  className="compose-letter-button-container"
                  onClick={() => handleLetterMiniClick("compose")}
                >
                  new letter
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          {letterView}
        </div>
      </div>
    </>
  );
};

export default LetterBox;
