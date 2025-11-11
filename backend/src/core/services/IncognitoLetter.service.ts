import {
  IncognitoLetter,
  IIncognitoLetter,
  IAuthor,
  IReply,
} from "../mongodb/models/IncognitoLetter.model";
import { ControllerOutput } from "./Controller";

/*-----------------------------------------------------------------------------------------*/

export default class IncognitoLetterServices {
  public async createIncognitoLetter(
    userId: string,
    userName: string,
    letterTitle: string,
    letterContent: string
  ): Promise<any> {
    const output: ControllerOutput<IIncognitoLetter> = {
      returnStatus: false,
      returnMessage: "Failed to create incognito letter",
      data: null,
    };
    try {
      const newAuthor: IAuthor = {
        userId: userId,
        name: userName,
      };
      const newIncognitoLetter = await IncognitoLetter.create({
        author: newAuthor,
        title: letterTitle,
        content: letterContent,
        createdAt: new Date().toISOString(),
      });
      output.returnStatus = true;
      output.returnMessage = "Create incognito successfully";
      output.data = newIncognitoLetter;
      return output;
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }

  public async getIncognitoLetters(userId?: string): Promise<any> {
    const output: ControllerOutput<IIncognitoLetter[]> = {
      returnStatus: false,
      returnMessage: "Cannot find any letter",
      data: null,
    };
    try {
      if (userId) {
        const letters = await IncognitoLetter.find({ userId: userId });
        if (letters) {
          output.returnStatus = true;
          output.returnMessage = `Found ${letters.length} ${
            letters.length > 1 ? "letters" : "letter"
          }`;
          output.data = letters;
          return output;
        }
        return output;
      } else {
        const letters = await IncognitoLetter.find({});
        if (letters) {
          output.returnStatus = true;
          output.returnMessage = `Found ${letters.length} ${
            letters.length > 1 ? "letters" : "letter"
          }`;
          output.data = letters;
          return output;
        }
        return output;
      }
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }

  public async getIncognitoLetter(letterId: string): Promise<any> {
    const output: ControllerOutput<IIncognitoLetter> = {
      returnStatus: false,
      returnMessage: "Cannot find any letter",
      data: null,
    };
    try {
      const letter = await IncognitoLetter.findById(letterId);
      if (letter) {
        output.returnStatus = true;
        output.returnMessage = `Found letter with id: ${letterId}`;
        output.data = letter;
        return output;
      }
      return output;
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }

  public async modifyIncognitoLetterStatus(
    letterId: string,
    status: string
  ): Promise<any> {
    const output: ControllerOutput<IIncognitoLetter> = {
      returnStatus: false,
      returnMessage: "Letter not found",
      data: null,
    };
    try {
      await IncognitoLetter.findByIdAndUpdate(letterId, { status: status });
      const updatedLetter = await IncognitoLetter.findById(letterId);
      output.returnStatus = true;
      output.returnMessage = "Letter status updated successfully";
      output.data = updatedLetter;
      return output;
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }

  public async addReplyWithinAnIncognitoLetter(
    letterId: string,
    userId: string,
    userName: string,
    replyMessage: string
  ): Promise<any> {
    const output: ControllerOutput<IIncognitoLetter> = {
      returnStatus: false,
      returnMessage: "Letter not found",
      data: null,
    };
    try {
      const replyAuthor: IAuthor = {
        userId: userId,
        name: userName,
      };
      const newReply: IReply = {
        author: replyAuthor,
        content: replyMessage,
        createAt: new Date().toISOString(),
      };
      const letter = await IncognitoLetter.findById(letterId);
      if (letter.reply) {
        const letterReply: IReply[] = letter.reply;
        letterReply.push(newReply);
        await IncognitoLetter.findByIdAndUpdate(letterId, { reply: newReply });
        const updatedLetter = await IncognitoLetter.findById(letterId);
        output.returnStatus = true;
        output.returnMessage = "Added new reply successfully";
        output.data = updatedLetter;
        return output;
      } else {
        await IncognitoLetter.findByIdAndUpdate(letterId, { reply: newReply });
        const updatedLetter = await IncognitoLetter.findById(letterId);
        output.returnStatus = true;
        output.returnMessage = "Added new reply successfully";
        output.data = updatedLetter;
        return output;
      }
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }

  public async deleteLetter(letterId: string[]): Promise<any> {
    const output: ControllerOutput<string> = {
      returnStatus: false,
      returnMessage: "Letter not found",
      data: null,
    };
    try {
      await IncognitoLetter.findByIdAndDelete(letterId);
      output.returnStatus = true;
      output.returnMessage = `Deleted ${letterId.length} ${
        letterId.length > 1 ? "letters" : "letter"
      }`;
      return output;
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }
}
