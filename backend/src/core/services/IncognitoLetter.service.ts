import IncognitoLetterAdapter from "../adapters/IncognitoLetter.adapter";
import {
  IncognitoLetter,
  IIncognitoLetter,
  IAuthor,
  IReply,
} from "../mongodb/models/IncognitoLetter.model";

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
    return createdLetter;
  }

  public async getIncognitoLetters(userId?: string): Promise<any> {
    const letters = await this._letterAdapter.getIncognitoLetter(userId);
    return letters;
  }

  public async getIncognitoLetter(letterId: string): Promise<any> {
    const letter = await this._letterAdapter.readIncognitoLetter(letterId);
    return letter;
  }

  public async modifyIncognitoLetterStatus(
    letterId: string,
    status: string
  ): Promise<any> {
    const updatedLetter = await this._letterAdapter.updateIncognitoLetter(
      letterId,
      { status: status }
    );
    return updatedLetter;
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
    return updatedLetter
  }

  public async deleteLetter(letterId: string[]): Promise<any> {
    const output = await this._letterAdapter.deleteIncognitoLetter(letterId);
    if (output) return { message: "Delete successfully" };
    else return { errmsg: "Delete failed" };
  }
}
