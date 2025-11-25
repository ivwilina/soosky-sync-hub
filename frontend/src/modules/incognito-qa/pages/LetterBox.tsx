import React, { useState } from "react";
import "../styles/letterBox.css";
import LetterMini from "../../../components/letter/LetterMini";
import LetterView from "../../../components/letter/LetterView";

/*-----------------------------------------------------------------------------------------*/

const LetterBox = () => {
  const testLetters = [
    {
      id: "qweqweqe",
      author: "user1",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam diam, efficitur at magna ac, bibendum elementum risus. Fusce facilisis eros sapien, ut rutrum lacus interdum et. Etiam ut nisi arcu. Duis eu magna vitae sem lacinia interdum eu vitae ligula. Fusce aliquet et purus placerat vulputate. Sed sit amet felis quis ligula feugiat condimentum. Phasellus imperdiet porta sem, id faucibus augue cursus vel. Nulla tempor finibus nunc, ut blandit est dictum quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Maecenas quis turpis nunc. Morbi porttitor erat ut massa vehicula mollis.",
      createAt: "2025-11-17T07:37:00.000Z",
      status: "replied",
      reply: [
        {
          author: "admin",
          content: "test reply from admin",
          createAt: "2025-11-17T07:37:00.000Z",
        },
        {
          author: "admin",
          content: "test reply from admin",
          createAt: "2025-11-17T07:37:00.000Z",
        },
        {
          author: "admin",
          content: "test reply from admin",
          createAt: "2025-11-17T07:37:00.000Z",
        },
        {
          author: "admin",
          content: "test reply from admin",
          createAt: "2025-11-17T07:37:00.000Z",
        },
        {
          author: "user1",
          content: "test reply 02 from user",
          createAt: "2025-11-17T07:37:00.000Z",
        },
        {
          author: "user1",
          content: "test reply 02 from user",
          createAt: "2025-11-17T07:37:00.000Z",
        },
        {
          author: "user1",
          content: "test reply 02 from user",
          createAt: "2025-11-17T07:37:00.000Z",
        },
        {
          author: "user1",
          content: "test reply 02 from user",
          createAt: "2025-11-17T07:37:00.000Z",
        },
        {
          author: "user1",
          content: "test reply 02 from user",
          createAt: "2025-11-17T07:37:00.000Z",
        },
      ],
    },
    {
      id: "qweqw4132eqe",
      author: "user1",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam diam, efficitur at magna ac, bibendum elementum risus. Fusce facilisis eros sapien, ut rutrum lacus interdum et. Etiam ut nisi arcu. Duis eu magna vitae sem lacinia interdum eu vitae ligula. Fusce aliquet et purus placerat vulputate. Sed sit amet felis quis ligula feugiat condimentum. Phasellus imperdiet porta sem, id faucibus augue cursus vel. Nulla tempor finibus nunc, ut blandit est dictum quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Maecenas quis turpis nunc. Morbi porttitor erat ut massa vehicula mollis.",
      createAt: "2025-11-17T07:37:00.000Z",
      status: "read",
      reply: [],
    },
    {
      id: "qweqweq31",
      author: "user1",
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam diam, efficitur at magna ac, bibendum elementum risus. Fusce facilisis eros sapien, ut rutrum lacus interdum et. Etiam ut nisi arcu. Duis eu magna vitae sem lacinia interdum eu vitae ligula. Fusce aliquet et purus placerat vulputate. Sed sit amet felis quis ligula feugiat condimentum. Phasellus imperdiet porta sem, id faucibus augue cursus vel. Nulla tempor finibus nunc, ut blandit est dictum quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Maecenas quis turpis nunc. Morbi porttitor erat ut massa vehicula mollis.",
      createAt: "2025-11-17T07:37:00.000Z",
      status: "pending",
      reply: [],
    },
  ];

  const [selectedLetterId, setSelectedLetterId] = useState<string | null>();
  const selectedLetter = testLetters.find(
    (letter) => letter.id === selectedLetterId
  );

  const handleLetterMiniClick = (id: string) => {
    setSelectedLetterId(id);
  };

  return (
    <>
      <div className="letterbox-wrapper">
        <div className="letterbox-container">
          <div className="letterbox-list-container">
            <div className="letterbox-list">
              {testLetters.map((letter) => (
                <LetterMini
                  key={letter.id}
                  id={letter.id}
                  title={letter.title}
                  time={letter.createAt}
                  status={letter.status}
                  onClick={handleLetterMiniClick}
                />
              ))}
            </div>
          </div>
          {selectedLetter ? (
            <LetterView
              key={selectedLetter.id}
              id={selectedLetter.id}
              author={selectedLetter.author}
              title={selectedLetter.title}
              content={selectedLetter.content}
              createAt={selectedLetter.createAt}
              reply={selectedLetter.reply}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default LetterBox;
