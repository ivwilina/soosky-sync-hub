import React, { use, useState } from "react";
import "../styles/letterBox.css";
import LetterMini from "../../../components/letter/LetterMini";
import LetterView from "../../../components/letter/LetterView";
import LetterCompose from "../../../components/letter/LetterCompose";
import useIncognitoLetterService from "../services/incognitoLetter.service";
import { useAuth } from "../../../contexts/auth/useAuth";

/*-----------------------------------------------------------------------------------------*/

const LetterBox = () => {
  const testLetters = [
    {
      id: "qweqweqe",
      author: "user1",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam diam, efficitur at magna ac, bibendum elementum risus. Fusce facilisis eros sapien, ut rutrum lacus interdum et. Etiam ut nisi arcu. Duis eu magna vitae sem lacinia interdum eu vitae ligula. Fusce aliquet et purus placerat vulputate. Sed sit amet felis quis ligula feugiat condimentum. Phasellus imperdiet porta sem, id faucibus augue cursus vel. Nulla tempor finibus nunc, ut blandit est dictum quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Maecenas quis turpis nunc. Morbi porttitor erat ut massa vehicula mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam diam, efficitur at magna ac, bibendum elementum risus. Fusce facilisis eros sapien, ut rutrum lacus interdum et. Etiam ut nisi arcu. Duis eu magna vitae sem lacinia interdum eu vitae ligula. Fusce aliquet et purus placerat vulputate. Sed sit amet felis quis ligula feugiat condimentum. Phasellus imperdiet porta sem, id faucibus augue cursus vel. Nulla tempor finibus nunc, ut blandit est dictum quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Maecenas quis turpis nunc. Morbi porttitor erat ut massa vehicula mollisLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam diam, efficitur at magna ac, bibendum elementum risus. Fusce facilisis eros sapien, ut rutrum lacus interdum et. Etiam ut nisi arcu. Duis eu magna vitae sem lacinia interdum eu vitae ligula. Fusce aliquet et purus placerat vulputate. Sed sit amet felis quis ligula feugiat condimentum. Phasellus imperdiet porta sem, id faucibus augue cursus vel. Nulla tempor finibus nunc, ut blandit est dictum quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Maecenas quis turpis nunc. Morbi porttitor erat ut massa vehicula mollisLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam diam, efficitur at magna ac, bibendum elementum risus. Fusce facilisis eros sapien, ut rutrum lacus interdum et. Etiam ut nisi arcu. Duis eu magna vitae sem lacinia interdum eu vitae ligula. Fusce aliquet et purus placerat vulputate. Sed sit amet felis quis ligula feugiat condimentum. Phasellus imperdiet porta sem, id faucibus augue cursus vel. Nulla tempor finibus nunc, ut blandit est dictum quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Maecenas quis turpis nunc. Morbi porttitor erat ut massa vehicula mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam diam, efficitur at magna ac, bibendum elementum risus. Fusce facilisis eros sapien, ut rutrum lacus interdum et. Etiam ut nisi arcu. Duis eu magna vitae sem lacinia interdum eu vitae ligula. Fusce aliquet et purus placerat vulputate. Sed sit amet felis quis ligula feugiat condimentum. Phasellus imperdiet porta sem, id faucibus augue cursus vel. Nulla tempor finibus nunc, ut blandit est dictum quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Maecenas quis turpis nunc. Morbi porttitor erat ut massa vehicula mollisLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam diam, efficitur at magna ac, bibendum elementum risus. Fusce facilisis eros sapien, ut rutrum lacus interdum et. Etiam ut nisi arcu. Duis eu magna vitae sem lacinia interdum eu vitae ligula. Fusce aliquet et purus placerat vulputate. Sed sit amet felis quis ligula feugiat condimentum. Phasellus imperdiet porta sem, id faucibus augue cursus vel. Nulla tempor finibus nunc, ut blandit est dictum quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Maecenas quis turpis nunc. Morbi porttitor erat ut massa vehicula mollis",
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

  const [selectedLetterId, setSelectedLetterId] = useState<string | null>();
  const selectedLetter = testLetters.find(
    (letter) => letter.id === selectedLetterId
  );

  const handleLetterMiniClick = (id: string) => {
    setSelectedLetterId(id);
  };

  let letterView = selectedLetter ? (
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
