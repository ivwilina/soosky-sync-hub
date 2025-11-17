import React from "react";
import "../styles/letterBox.css";
import LetterMini from "../../../components/letter/LetterMini";
import LetterView from "../../../components/letter/LetterView";

const LetterBox = () => {
  const testTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
  const testTime = "2025-11-17T07:37:00.000Z";
  const testStatus1 = "pending";
  const testStatus2 = "read";
  const testStatus3 = "replied";

  return (
    <>
      <div className="letterbox-wrapper">
        <div className="letterbox-container">
          <div className="letterbox-list-container">
            <div className="letterbox-list">
              <LetterMini
                title={testTitle}
                time={testTime}
                status={testStatus1}
              />
              <LetterMini
                title={testTitle}
                time={testTime}
                status={testStatus2}
              />
              <LetterMini
                title={testTitle}
                time={testTime}
                status={testStatus3}
              />
            </div>
          </div>
          <LetterView />
        </div>
      </div>
    </>
  );
};

export default LetterBox;
