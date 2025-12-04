import { ServiceCfg } from "../configs/ServiceConfigs";

const sendIncognitoLetter = async (
  userId: string,
  userName: string,
  letterTitle: string,
  letterContent: string
) => {
  const response = await fetch(
    `${ServiceCfg.baseUrl}/incognito-letter/letters`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        userName: userName,
        letterTitle: letterTitle,
        letterContent: letterContent,
      }),
    }
  );

  const data = await response.json();
  return data;
};

const getSelectedIncognitoLetter = async (letterId: string) => {
  const params: URLSearchParams = new URLSearchParams({
    id: letterId,
  });
  const response = await fetch(
    `${ServiceCfg.baseUrl}/incognito-letter/letters/${params.toString()}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();
  return data;
};

const getAllPersonalIncognitoLetters = async (userId: string) => {
  const params: URLSearchParams = new URLSearchParams({
    id: userId,
  });
  const response = await fetch(
    `${ServiceCfg.baseUrl}/incognito-letter/letters/${params.toString()}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();
  return data;
};

const getAllIncognitoLetters = async () => {
  const response = await fetch(
    `${ServiceCfg.baseUrl}/incognito-letter/admin/letters`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();
  return data;
};

const replyAnIncognitoLetter = async (
  letterId: string,
  userId: string,
  userName: string,
  replyMsg: string
) => {
  const response = await fetch(
    `${ServiceCfg.baseUrl}/incognito-letter/admin/letters`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: letterId,
        userId: userId,
        userName: userName,
        replyMsg: replyMsg,
      }),
    }
  );
  const data = await response.json();
  return data;
};

const deleteIncognitoLetter = async (letterId: string[]) => {
  const response = await fetch(
    `${ServiceCfg.baseUrl}/incognito-letter/admin/letters`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        letterId: letterId,
      }),
    }
  );
  const data = await response.json();
  return data;
};

export {
  sendIncognitoLetter,
  getSelectedIncognitoLetter,
  getAllIncognitoLetters,
  getAllPersonalIncognitoLetters,
  replyAnIncognitoLetter,
  deleteIncognitoLetter,
};
