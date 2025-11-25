import { User, IUser } from "../mongodb/models/User.model";
import bcrypt from "bcrypt";
import shitty from "../../configs/ShittyConfig";
import UserAdapter from "../adapters/User.adapter";
import AuthAdapter from "../adapters/Auth.adapter";

/*-----------------------------------------------------------------------------------------*/

export default class UserServices {
  private readonly _userAdapter = new UserAdapter();
  private readonly _authAdapter = new AuthAdapter();
  private readonly _saltRound = shitty.bcrytp.saltRound;

  public async getUsers(userId?: string): Promise<any> {
    const users = await this._userAdapter.readUsers(userId);
    return users;
  }

  public async createUser(userName: string, userEmail: string): Promise<any> {
    const isEmailExist = await this._userAdapter.checkEmailExistence(userEmail);
    if (!isEmailExist) {
      const createdUser = await this._userAdapter.createUser(
        userEmail,
        userName
      );
      return createdUser;
    } else return { message: "Email existed" };
  }

  public async deleteUsers(userId: string[]): Promise<any> {
    const output = await this._userAdapter.deleteUser(userId);
    if (output) return { message: "Delete successfully" };
    else return { message: "Delete failed" };
  }

  public async modifyUserInfomation(
    userId: string,
    ...infomation: any
  ): Promise<any> {
    const updatedUser = await this._userAdapter.updateUser(
      userId,
      ...infomation
    );
    return updatedUser;
  }

  public async changeAccountPassword(
    userId: string,
    oldPassword: string,
    newPassword: string
  ): Promise<any> {
    const passwordMatch = await this._authAdapter.checkPassword(
      userId,
      oldPassword
    );
    if (passwordMatch) {
      const newHashedPassword = bcrypt.hash(newPassword, this._saltRound);
      const updatedUser = await this._userAdapter.updateUser(userId, {password: newHashedPassword});
      return updatedUser;
    }
  }
}
