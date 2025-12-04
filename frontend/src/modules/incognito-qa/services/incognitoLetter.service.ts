import { useState } from "react";
import {
  getAllIncognitoLetters,
  getAllPersonalIncognitoLetters,
  deleteIncognitoLetter,
  getSelectedIncognitoLetter,
  replyAnIncognitoLetter,
  sendIncognitoLetter,
} from "../../../apis/incognitoLetter.api";

// type IncognitoLetter = {

// }

// type NewIncognitoLetter = {

// }

// type NewIncognitoLetterReply = {

// }

// type IncognitoLetterList = {

// }

interface IIncognitoLetterService {
  incognitoLettersList: object;
  incognitoLetter: object;
  sendLetter: () => void;
  getLetter: () => void;
  getAllLetter: () => void;
  getAllPersonalLetters: () => void;
  deleteLetter: () => void;
  replyLetter: () => void;
}

const incognitoLetterService: IIncognitoLetterService = () => {
  const [incognitoLettersList, setIncognitoLettersList] = useState([]);
  const [incognitoLetter, setIncognitoLetter] = useState({});
  const [loading, setLoading] = useState(false);

  const sendLetter = async () => {};

  const getLetter = async () => {};

  const getAllLetters = async () => {};

  const getAllPersonalLetters = async () => {};

  const deleteLetter = async () => {};

  const replyLetter = async () => {};

  return {
    incognitoLettersList,
    incognitoLetter,
    sendLetter,
    getLetter,
    getAllLetters,
    getAllPersonalLetters,
    deleteLetter,
    replyLetter,
  };
};
