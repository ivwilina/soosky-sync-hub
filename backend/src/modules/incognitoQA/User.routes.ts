import { Request, Response } from "express";
import SIncognitoLetter from "../../core/services/IncognitoLetter.service";

/*-----------------------------------------------------------------------------------------*/

export default class IncognitoQA_UserRoutes {
  private readonly _incognitoLetterService = new SIncognitoLetter();
  public readonly routes = [
    ["GET", "/incognito-letter/letters/:id", this._GET_getAllLetters.bind(this)],
    ["GET", "/incognito-letter/letters/:id", this._GET_getALetter.bind(this)],
    ["PUT", "/incognito-letter/letters/:id", this._PUT_replyALetter.bind(this)],
    ["POST", "/incognito-letter/letters", this._POST_sendLetter.bind(this)],
  ];
  private async _GET_getAllLetters(req: Request, res: Response): Promise<any> {
    const output = await this._incognitoLetterService.getIncognitoLetters(
      req.params.id
    );
    res.json(output);
  }

  private async _GET_getALetter(req: Request, res: Response): Promise<any> {
    const output = await this._incognitoLetterService.getIncognitoLetter(
      req.params.id
    );
    res.json(output);
  }

  private async _PUT_replyALetter(req: Request, res: Response): Promise<any> {
    const letterId = req.params.id;
    const userId = req.body.userId;
    const userName = req.body.userName;
    const replyMsg = req.body.replyMsg;
    const output =
      await this._incognitoLetterService.addReplyWithinAnIncognitoLetter(
        letterId,
        userId,
        userName,
        replyMsg
      );
    res.json(output);
  }

  private async _POST_sendLetter(req: Request, res: Response): Promise<any> {
    const userId = req.body.userId;
    const userName = req.body.userName;
    const letterTitle = req.body.letterTitle;
    const letterContent = req.body.letterContent;
    const output = await this._incognitoLetterService.createIncognitoLetter(
      userId,
      userName,
      letterTitle,
      letterContent
    );
    res.json(output);
  }
}
