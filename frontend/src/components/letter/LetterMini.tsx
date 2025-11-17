import React from "react";
import "./letterMini.css";

/*-----------------------------------------------------------------------------------------*/

interface LetterMiniProps {
  title: string;
  time: string;
  status: string;
}

const LetterMini: React.FC<LetterMiniProps> = ({ title, time, status }) => {
  let letterMiniStatusStyle;
  switch (status) {
    case "pending":
      letterMiniStatusStyle = "lettermini-pending";
      break;
    case "read":
      letterMiniStatusStyle = "lettermini-read";
      break;
    case "replied":
      letterMiniStatusStyle = "lettermini-replied";
      break;
    default:
      letterMiniStatusStyle = "lettermini-pending";
      break;
  }

  const letterMiniDateTime = new Date(time);
  const letterMiniDateOnly = letterMiniDateTime.toLocaleDateString([], {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
  const letterMiniTimeOnly = letterMiniDateTime.toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className="lettermini-wrapper">
        <div className={"lettermini-container " + letterMiniStatusStyle}>
          <h4>{title}</h4>
          <div className="lettermini-details">
            <div className="lettermini-timestamp">
              <span>{letterMiniDateOnly}</span>
              <span>{letterMiniTimeOnly}</span>
            </div>
            <div className="lettermini-status">{status}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetterMini;
