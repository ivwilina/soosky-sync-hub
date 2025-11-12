import AuthAdapter from "../adapters/Auth.adapter";
import UserAdapter from "../adapters/User.adapter";
import { User, IUser } from "../mongodb/models/User.model";
import bcrypt from "bcrypt";


/*-----------------------------------------------------------------------------------------*/

export default class AuthServices {
  private readonly _authAdapter = new AuthAdapter();
  private readonly _userAdapter = new UserAdapter();
  public async login(email: string, password: string): Promise<any> {
    const isValid = await this._authAdapter.checkPassword(email, password);
    if (isValid) {
      const user = await this._userAdapter.getUserByEmail(email);
      const jwtToken = await this._authAdapter.generateToken(user._id, user.permission)
    }
  }
}