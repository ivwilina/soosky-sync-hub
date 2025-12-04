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
      "DELETE",
      "/incognito-letter/admin/letters",
      this._DELETE_deleteLetters.bind(this),
    ],
  ];
  private async _GET_getAllLetters(_, res: Response): Promise<any> {
    const output = await this._incognitoLetterService.getIncognitoLetters();
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
