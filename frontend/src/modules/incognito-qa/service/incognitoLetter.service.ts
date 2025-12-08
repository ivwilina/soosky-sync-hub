import { useEffect, useState } from "react";
import {
  getAllIncognitoLetters,
  getAllPersonalIncognitoLetters,
  deleteIncognitoLetter,
  getSelectedIncognitoLetter,
  replyAnIncognitoLetter,
  sendIncognitoLetter,
  changeIncognitoLetterStatus
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
  changeLetterStatus: (letterId: string, status: string) => Promise<void>;
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

  useEffect(() => {
    if (loading) {
      if (userPermission === "admin") {
        console.log(`
      ===========================================
      reload letter list (admin)
      -------------------------------------------
      `);
        getAllLetters();
        setLoading(false);
      } else {
        console.log(`
      ===========================================
      reload letter list (user)
      -------------------------------------------
      `);
        getAllPersonalLetters(userId);
        setLoading(false);
      }
    }
  }, [loading, userPermission, userId]);

  const sendLetter = async (
    userId: string,
    userName: string,
    letterTitle: string,
    letterContent: string
  ) => {
    console.log(`
      ===========================================
      sendLetter
      -------------------------------------------
      `);

    const res = await sendIncognitoLetter(
      userId,
      userName,
      letterTitle,
      letterContent
    );
    if (!("errmsg" in res)) {
      setLoading(true);
    }
  };

  const getLetter = async (letterId: string) => {
    console.log(`
      ===========================================
      getLetter
      -------------------------------------------
      `);
    const res = await getSelectedIncognitoLetter(letterId);
    if (!("errmsg" in res)) {
      const updatedLetter = res;
      setIncognitoLetter(updatedLetter);
      setLoading(true);
    }
  };

  const getAllLetters = async () => {
    console.log(`
      ===========================================
      getAllLetters
      -------------------------------------------
      `);
    const res = await getAllIncognitoLetters();
    if (!("errmsg" in res)) {
      setIncognitoLettersList(res);
      setLoading(false);
    }
  };

  const getAllPersonalLetters = async (userId: string) => {
    console.log(`
      ===========================================
      getAllPersonalLetters
      -------------------------------------------
      `);
    const res = await getAllPersonalIncognitoLetters(userId);
    if (!("errmsg" in res)) {
      setIncognitoLettersList(res);
      setLoading(false);
    }
  };

  const deleteLetter = async (letterId: string[]) => {
    console.log(`
      ===========================================
      deleteLetter
      -------------------------------------------
      `);
    const res = await deleteIncognitoLetter(letterId);
    if (!("errmsg" in res)) {
      setLoading(true);
    }
  };

  const replyLetter = async (
    letterId: string,
    userId: string,
    userName: string,
    replyMsg: string
  ) => {
    console.log(`
      ===========================================
      replyLetter
      -------------------------------------------
      `);
    const res = await replyAnIncognitoLetter(
      letterId,
      userId,
      userName,
      replyMsg
    );
    if (!("errmsg" in res)) {
      setLoading(true);
    }
  };

  const changeLetterStatus = async (
    letterId: string,
    status: string
  ) => {
    console.log(`
      ===========================================
      changeLetterStatus
      -------------------------------------------
      `);
    const res = await changeIncognitoLetterStatus(
      letterId,
      status,
    );
    if (!("errmsg" in res)) {
      setLoading(true);
    }
  };

  return {
    incognitoLettersList,
    incognitoLetter,
    sendLetter,
    getLetter,
    getAllLetters,
    getAllPersonalLetters,
    deleteLetter,
    replyLetter,
    changeLetterStatus
  };
};

export default useIncognitoLetterService;

export type { IncognitoLetter };
