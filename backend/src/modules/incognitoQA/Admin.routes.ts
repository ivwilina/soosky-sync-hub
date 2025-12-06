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
    [
      "PUT",
      "/incognito-letter/admin/letter/status",
      this._PUT_modifyLetterStatus.bind(this),
    ],
  ];
  private async _GET_getAllLetters(_, res: Response): Promise<any> {
    const output = await this._incognitoLetterService.getIncognitoLetters();
    res.status(output.status).json(output.data);
  }

  private async _DELETE_deleteLetters(
    req: Request,
    res: Response
  ): Promise<any> {
    const output = await this._incognitoLetterService.deleteLetter(
      req.body.letterId
    );
    res.status(output.status).json(output.data);
  }

  private async _PUT_modifyLetterStatus(
    req: Request,
    res: Response
  ): Promise<any> {
    const letterId = req.body.letterId;
    const status = req.body.status;
    const output = await this._incognitoLetterService.modifyIncognitoLetterStatus(
      letterId,
      status
    );
    res.status(output.status).json(output.data);
  }
}
