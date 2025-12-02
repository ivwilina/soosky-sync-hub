import IncognitoLetterAdapter from "../adapters/IncognitoLetter.adapter";

/*-----------------------------------------------------------------------------------------*/

export default class IncognitoLetterServices {
  private readonly _letterAdapter = new IncognitoLetterAdapter();

  public async createIncognitoLetter(
    userId: string,
    userName: string,
    letterTitle: string,
    letterContent: string
  ): Promise<any> {
    const createdLetter = this._letterAdapter.createIncognitoLetter(
      userId,
      userName,
      letterTitle,
      letterContent
    );
    return { status: 201, data: createdLetter };
  }

  public async getIncognitoLetters(userId?: string): Promise<any> {
    const letters = await this._letterAdapter.getIncognitoLetter(userId);
    if (letters === null) return { status: 204, data: [] };
    return { status: 200, data: letters };
  }

  public async getIncognitoLetter(letterId: string): Promise<any> {
    const letter = await this._letterAdapter.readIncognitoLetter(letterId);
    if (letter === null) return { status: 404, data: null };
    return { status: 200, data: letter };
  }

  public async modifyIncognitoLetterStatus(
    letterId: string,
    status: string
  ): Promise<any> {
    const updatedLetter = await this._letterAdapter.updateIncognitoLetter(
      letterId,
      { status: status }
    );
    return {status: 200 , data: updatedLetter};
  }

  public async addReplyWithinAnIncognitoLetter(
    letterId: string,
    userId: string,
    userName: string,
    replyMessage: string
  ): Promise<any> {
    const updatedLetter = this._letterAdapter.createLetterReply(
      letterId,
      userId,
      userName,
      replyMessage
    );
    return {status: 201, data: updatedLetter};
  }

  public async deleteLetter(letterId: string[]): Promise<any> {
    const output = await this._letterAdapter.deleteIncognitoLetter(letterId);
    if (output) return {status: 200, data: "Delete successfully" };
    else return {status: 400, errmsg: "Delete failed" };
  }
}
