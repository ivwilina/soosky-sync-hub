import { Request, Response } from "express";
import AuthServices from "../../core/services/Auth.service";

export default class AuthRoutes {
  private readonly _authService = new AuthServices();

  public readonly routes = [["POST", "/auth/login", this._POST_login.bind(this)]];

  private async _POST_login(req: Request, res: Response): Promise<any> {
    const email = req.body.email;
    const password = req.body.password;
    const output = await this._authService.login(email, password);
    res.json(output);
  }
}
