import "./letterCompose.css";
import React, { useState, type ChangeEvent } from "react";

interface LetterComposeProps {
  currentUserId: string;
  currentUserName: string;
  postLetter: (
    userId: string,
    userName: string,
    letterTitle: string,
    letterContent: string
  ) => void;
}

const LetterCompose: React.FC<LetterComposeProps> = ({
  currentUserId,
  currentUserName,
  postLetter,
}) => {
  const [letterTitleInput, setLetterTitleInput] = useState<string>("");
  const [letterContentInput, setLetterContentInput] = useState<string>("");

  const handlePostLetter = async () => {
    await postLetter(
      currentUserId,
      currentUserName,
      letterTitleInput,
      letterContentInput
    );
  };

  const handleLetterTitleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLetterTitleInput(e.target.value);
  };

  const handleLetterContentInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLetterContentInput(e.target.value);
  };

  return (
    <>
      <div className="letter-compose-wrapper">
        <form className="letter-compose-container">
          <h1>new letter</h1>
          <span>title</span>
          <textarea
            value={letterTitleInput}
            onChange={handleLetterTitleInput}
            id="letter-title-input-field"
            className="letter-compose-input-title"
            placeholder="letter's title goes here"
          />
          <span>details</span>
          <textarea
            value={letterContentInput}
            onChange={handleLetterContentInput}
            id="letter-content-input-field"
            className="letter-compose-input-details"
            placeholder="letter's details go here"
          />
          <button type="submit" onClick={handlePostLetter}>send</button>
        </form>
      </div>
    </>
  );
};

export default LetterCompose;
