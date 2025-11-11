import { Request, Response } from "express";
import SUser from "../../core/services/User.service";

/*-----------------------------------------------------------------------------------------*/

//todo: use token to verify user permission
export default class UserManagement_AdminRoutes{
  private readonly _userService = new SUser()
  public readonly routes = [
    ["GET", "/user-management/admin/users", this._GET_getAllUsers.bind(this)],
    [
      "GET",
      "/user-management/admin/users/:id",
      this._GET_getUserInformation.bind(this),
    ],
    ["POST", "/user-management/admin/users", this._POST_createUser.bind(this)],
    [
      "PUT",
      "/user-management/admin/users/:id",
      this._PUT_modifyUserInformation.bind(this),
    ],
    [
      "DELETE",
      "/user-management/admin/users/:id",
      this._DELETE_deleteUsers.bind(this),
    ],
  ];

  private async _GET_getAllUsers(req: Request, res: Response): Promise<any> {
    const output = await this._userService.getUsers();
    res.json(output);
  }

  private async _GET_getUserInformation(
    req: Request,
    res: Response
  ): Promise<any> {
    const output = await this._userService.getUsers(req.params.id);
    res.json(output);
  }


  //todo: check email validation
  private async _POST_createUser(req: Request, res: Response): Promise<any> {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const output = await this._userService.createUser(userName, userEmail);
    res.json(output);
  }

  private async _PUT_modifyUserInformation(
    req: Request,
    res: Response
  ): Promise<any> {
    const userId = req.params.id;
    const updateInformation = {...req.body};
    console.log(updateInformation);
    const output = await this._userService.modifyUserInfomation(userId, updateInformation);
    res.json(output)
  }

  private async _DELETE_deleteUsers(
    req: Request,
    res: Response
  ): Promise<any> {
    const userId = req.body.userId;
    const output = await this._userService.deleteUsers(userId);
    res.json(output)
  }
}
