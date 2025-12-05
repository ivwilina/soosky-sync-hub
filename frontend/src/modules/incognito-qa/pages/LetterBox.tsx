import React, { useState } from "react";
import "../styles/letterBox.css";
import LetterMini from "../../../components/letter/LetterMini";
import LetterView from "../../../components/letter/LetterView";
import LetterCompose from "../../../components/letter/LetterCompose";
import useIncognitoLetterService from "../services/incognitoLetter.service";
import type { IncognitoLetter} from "../services/incognitoLetter.service";
import { useAuth } from "../../../contexts/auth/useAuth";

/*-----------------------------------------------------------------------------------------*/

const LetterBox = () => {
  const { user } = useAuth();
  const {
    incognitoLettersList,
    incognitoLetter,
    sendLetter,
    getLetter,
    getAllLetters,
    getAllPersonalLetters,
    deleteLetter,
    replyLetter,
  } = useIncognitoLetterService(user.userId, user.permission);

  const [selectedLetterId, setSelectedLetterId] = useState<string | null>("");
  const selectedLetter: IncognitoLetter | undefined = incognitoLettersList.find(
    (letter) => letter._id === selectedLetterId
  );

  const handleLetterMiniClick = (_id: string) => {
    setSelectedLetterId(_id);
  };

  let letterView = selectedLetter ? (
    <LetterView
      currentUserId={user.userId}
      currentUserName={user.userName}
      key={selectedLetter._id}
      id={selectedLetter._id}
      author={selectedLetter.author.userId}
      title={selectedLetter.title}
      content={selectedLetter.content}
      createAt={selectedLetter.createdAt}
      reply={selectedLetter.reply}
      postReply={replyLetter}
    />
  ) : (
    <></>
  );

  if (selectedLetterId === "compose") {
    letterView = <LetterCompose />;
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
            <div className="compose-letter-button-wrapper">
              <button
                className="compose-letter-button-container"
                onClick={() => handleLetterMiniClick("compose")}
              >
                new letter
              </button>
            </div>
          </div>
          {letterView}
        </div>
      </div>
    </>
  );
};

export default LetterBox;
