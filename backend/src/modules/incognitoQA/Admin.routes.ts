import { Request, Response } from "express";
import SIncognitoLetter from "../../core/services/IncognitoLetter.service";

/*-----------------------------------------------------------------------------------------*/

export default class IncognitoQA_AdminRoutes {
  private readonly _incognitoLetterService = new SIncognitoLetter();
  public readonly routes = [
    [
      "GET",
      "/incognito-letter/admin/letters",
      this._GET_getAllLetters.bind(this),
    ],
    [
      "GET",
      "/incognito-letter/admin/letters/:id",
      this._GET_getALetter.bind(this),
    ],
    [
      "PUT",
      "/incognito-letter/admin/letters/:id",
      this._PUT_replyALetter.bind(this),
    ],
    [
      "DELETE",
      "/incognito-letter/admin/letters",
      this._DELETE_deleteLetters.bind(this),
    ],
  ];
  private async _GET_getAllLetters(_, res: Response): Promise<any> {
    const output = await this._incognitoLetterService.getIncognitoLetters();
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

  private async _DELETE_deleteLetters(
    req: Request,
    res: Response
  ): Promise<any> {
    const output = await this._incognitoLetterService.deleteLetter(
      req.body.letterId
    );
    res.json(output);
  }
}
