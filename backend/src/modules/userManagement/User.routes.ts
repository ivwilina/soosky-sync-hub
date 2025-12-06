import { Request, Response } from "express";
import SUser from "../../core/services/User.service";

/*-----------------------------------------------------------------------------------------*/

//todo: use token to verify user permission
export default class UserManagement_UserRoutes{
  private readonly _userService = new SUser();
  public readonly routes = [
    ["GET", "/user/:id", this._GET_getUserInformation.bind(this)],
    ["PUT", "/user/:id", this._PUT_updatePersonalInformation.bind(this)],
    ["PUT", "/user/password/:id", this._PUT_changeAccountPassword.bind(this)],
  ];
  private async _GET_getUserInformation(
    req: Request,
    res: Response
  ): Promise<any> {
    const output = await this._userService.getUsers(req.params.id);
    res.status(output.status).json(output.data);
  }

  private async _PUT_updatePersonalInformation(
    req: Request,
    res: Response
  ): Promise<any> {
    const updateInformation = {...req.body};
    const output = await this._userService.modifyUserInfomation(
      req.params.id,
      updateInformation
    );
    res.status(output.status).json(output.data);
  }

  private async _PUT_changeAccountPassword(
    req: Request,
    res: Response
  ): Promise<any> {
    const newPassword = req.body.newPassword;
    const oldPassword = req.body.oldPassword;
    const output = await this._userService.changeAccountPassword(
      req.params.id,
      oldPassword,
      newPassword
    );
    res.status(output.status).json(output.data);
  }
}
