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

  const res = await response.json();
  return res;
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
  const res = await response.json();
  return res;
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
  const res = await response.json();
  return res;
};

const getAllIncognitoLetters = async () => {
  const response = await fetch(
    `${ServiceCfg.baseUrl}/incognito-letter/admin/letters`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const res = await response.json();
  return res;
};

const replyAnIncognitoLetter = async (
  letterId: string,
  userId: string,
  userName: string,
  replyMsg: string
) => {
  const params: URLSearchParams = new URLSearchParams({
    id: letterId,
  });
  const response = await fetch(
    `${ServiceCfg.baseUrl}/incognito-letter/letters/${params.get("id")}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        userName: userName,
        replyMsg: replyMsg,
      }),
    }
  );
  const res = await response.json();
  return res;
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
  const res = await response.json();
  return res;
};

const changeIncognitoLetterStatus = async(letterId: string, status: string) => {
  const response = await fetch(
    `${ServiceCfg.baseUrl}/incognito-letter/admin/letter/status`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        letterId: letterId,
        status: status
      }),
    }
  );
  const res = await response.json();
  return res;
}

export {
  sendIncognitoLetter,
  getSelectedIncognitoLetter,
  getAllIncognitoLetters,
  getAllPersonalIncognitoLetters,
  replyAnIncognitoLetter,
  deleteIncognitoLetter,
  changeIncognitoLetterStatus
};
