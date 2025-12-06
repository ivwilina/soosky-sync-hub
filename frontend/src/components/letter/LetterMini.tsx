import React from "react";
import "./letterMini.css";

/*-----------------------------------------------------------------------------------------*/

interface LetterMiniProps {
  id: string;
  title: string;
  time: string;
  status: string;
  onClick: (id: string) => void;
}

const LetterMini: React.FC<LetterMiniProps> = ({
  id,
  title,
  time,
  status,
  onClick,
}) => {
  const handleLetterMiniClick = () => {
    onClick(id);
  }
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
      <div className="lettermini-wrapper" id={id} onClick={handleLetterMiniClick}>
        <div className={"lettermini-container " + letterMiniStatusStyle}>
          <h4>{title}</h4>
          <div className="lettermini-details">
            <div className="lettermini-timestamp">
              <span>{letterMiniTimeOnly}</span>
              <span>{letterMiniDateOnly}</span>
            </div>
            <div className="lettermini-status"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetterMini;
