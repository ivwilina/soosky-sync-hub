import {
  IAuthor,
  IIncognitoLetter,
  IncognitoLetter,
  IReply,
} from "../mongodb/models/IncognitoLetter.model";

export default class IncognitoLetterAdapter {
  public async createIncognitoLetter(
    userId: string,
    userName: string,
    letterTitle: string,
    letterContent: string
  ): Promise<IIncognitoLetter> {
    const newAuthor: IAuthor = {
      userId: userId,
      name: userName,
    };
    const newIncognitoLetter = await IncognitoLetter.create({
      author: newAuthor,
      title: letterTitle,
      content: letterContent,
    });
    return newIncognitoLetter;
  }

  public async readIncognitoLetter(
    letterId?: string
  ): Promise<IIncognitoLetter[] | IIncognitoLetter> {
    if (letterId) {
      const letter = IncognitoLetter.findById(letterId);
      if (letter) return letter;
      else return null;
    } else {
      const letter = IncognitoLetter.find({});
      if (letter) return letter;
      else return null;
    }
  }

  public async getIncognitoLetter(
    userId?: string
  ): Promise<IIncognitoLetter[] | IIncognitoLetter> {
    if (userId) {
      const letter = IncognitoLetter.find({ "author.userId": userId });
      if (letter) return letter;
      else return null;
    } else {
      const letter = IncognitoLetter.find({});
      if (letter) return letter;
      else return null;
    }
  }

  public async updateIncognitoLetter(
    letterId: string,
    ...params
  ): Promise<IIncognitoLetter> {
    await IncognitoLetter.findByIdAndUpdate(letterId, ...params);
    const updatedLetter = await IncognitoLetter.findById(letterId);
    return updatedLetter;
  }

  public async deleteIncognitoLetter(letterId: string[]): Promise<boolean> {
    await IncognitoLetter.findByIdAndDelete(letterId);
    const isDeletedLetter = await IncognitoLetter.findById(letterId);
    if (!isDeletedLetter) return true;
    else return false;
  }

  public async checkLetterExistence(letterId: string): Promise<boolean> {
    const letter = await IncognitoLetter.findById(letterId);
    if (letter) return true;
    else return false;
  }

  public async createLetterReply(
    letterId: string,
    userId: string,
    userName: string,
    replyMessage: string
  ): Promise<IIncognitoLetter> {
    const replyAuthor: IAuthor = {
        userId: userId,
        name: userName,
      };
      const newReply: IReply = {
        author: replyAuthor,
        content: replyMessage,
      };
      const letter = await IncognitoLetter.findById(letterId);
      if (letter.reply) {
        const letterReply: IReply[] = letter.reply;
        letterReply.push(newReply);
        await IncognitoLetter.findByIdAndUpdate(letterId, { reply: newReply });
        const updatedLetter = await IncognitoLetter.findById(letterId);
        return updatedLetter;
      } else {
        await IncognitoLetter.findByIdAndUpdate(letterId, { reply: newReply });
        const updatedLetter = await IncognitoLetter.findById(letterId);
        ;
        return updatedLetter;
      }
  }
}
