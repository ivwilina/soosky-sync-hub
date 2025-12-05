import { useEffect, useState } from "react";
import {
  getAllIncognitoLetters,
  getAllPersonalIncognitoLetters,
  deleteIncognitoLetter,
  getSelectedIncognitoLetter,
  replyAnIncognitoLetter,
  sendIncognitoLetter,
} from "../../../apis/incognitoLetter.api";

type IncognitoLetter = {
  _id: string;
  author: {
    userId: string;
    name: string;
  };
  status: string;
  title: string;
  content: string;
  reply?: [
    {
      author: {
        userId: string;
        name: string;
      };
      content: string;
      _id: string;
      createdAt: string;
      updatedAt: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
};

// type NewIncognitoLetter = {

// }

// type NewIncognitoLetterReply = {

// }

// type IncognitoLetterList = {

// }

interface IIncognitoLetterService {
  incognitoLettersList: IncognitoLetter[];
  incognitoLetter: IncognitoLetter;
  sendLetter: (
    userId: string,
    userName: string,
    letterTitle: string,
    letterContent: string
  ) => Promise<void>;
  getLetter: (letterId: string) => Promise<void>;
  getAllLetters: () => Promise<void>;
  getAllPersonalLetters: (userId: string) => Promise<void>;
  deleteLetter: (letterId: string[]) => Promise<void>;
  replyLetter: (
    letterId: string,
    userId: string,
    userName: string,
    replyMsg: string
  ) => Promise<void>;
}

const useIncognitoLetterService = (
  userId: string,
  userPermission: string
): IIncognitoLetterService => {
  const [incognitoLettersList, setIncognitoLettersList] = useState<
    IncognitoLetter[]
  >([]);
  const [incognitoLetter, setIncognitoLetter] = useState<IncognitoLetter>(
    {} as IncognitoLetter
  );
  const [loading, setLoading] = useState(true);

  const sendLetter = async (
    userId: string,
    userName: string,
    letterTitle: string,
    letterContent: string
  ) => {
    const res = await sendIncognitoLetter(
      userId,
      userName,
      letterTitle,
      letterContent
    );
    if (res.status === 201) {
      setLoading(true);
    }
  };

  const getLetter = async (letterId: string) => {
    const res = await getSelectedIncognitoLetter(letterId);
    if (res.status === 200) {
      setIncognitoLetter(res.data);
    }
  };

  const getAllLetters = async () => {
    const res = await getAllIncognitoLetters();
    if (res.status === 200) {
      setIncognitoLettersList(res.data);
      setLoading(false);
    }
  };

  const getAllPersonalLetters = async (userId: string) => {
    const res = await getAllPersonalIncognitoLetters(userId);
    if (res.status === 200) {
      setIncognitoLettersList(res.data);
      setLoading(false);
    }
  };

  const deleteLetter = async (letterId: string[]) => {
    const res = await deleteIncognitoLetter(letterId);
    if (res.status === 200) {
      setLoading(true);
    }
  };

  const replyLetter = async (
    letterId: string,
    userId: string,
    userName: string,
    replyMsg: string
  ) => {
    const res = await replyAnIncognitoLetter(
      letterId,
      userId,
      userName,
      replyMsg
    );
    if (res.status === 200) {
      setLoading(true);
      await getAllPersonalIncognitoLetters(userId)
    }
  };

  useEffect(() => {
    if (loading) {
      if (userPermission === "admin") {
        getAllLetters();
      } else {
        getAllPersonalLetters(userId);
      }
    }
  }, [loading, userPermission, userId]);

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

export default useIncognitoLetterService;

export type { IncognitoLetter};
