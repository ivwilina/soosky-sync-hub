import shitty from "../../configs/ShittyConfig";
import generateRandomPassword from "../../helpers/PasswordGenerator";
import { IUser, User } from "../mongodb/models/User.model";
import bcrypt from "bcrypt";

/*-----------------------------------------------------------------------------------------*/

export default class UserAdapter {
  private readonly _saltRound = shitty.bcrytp.saltRound;

  public async createUser(email: string, name: string): Promise<Object> {
    const newPassword = await generateRandomPassword(8);
    const newHashedPassword = await bcrypt.hash(newPassword, this._saltRound);
    await User.create({
      email: email,
      name: name,
      password: newHashedPassword,
      createAt: new Date().toISOString(),
    });
    return {
      email: email,
      password: newPassword,
    };
  }

  public async readUsers(userId?: string): Promise<IUser[] | IUser> {
    if (userId) {
      const user = await User.findById(userId);
      if (user) return user;
      else return null;
    } else {
      const user = await User.find({});
      if (user) {
        return user;
      } else return null;
    }
  }

  public async updateUser(userId: string, ...params): Promise<IUser> {
    await User.findByIdAndUpdate(userId, ...params);
    const updatedUser = await User.findById(userId);
    return updatedUser;
  }

  public async deleteUser(userId: string[]): Promise<boolean> {
    await User.findByIdAndDelete(userId);
    const isDeletedUser = await User.findById(userId);
    if (!isDeletedUser) return true;
    else return false;
  }

  public async checkUserExistence(userId: string): Promise<boolean> {
    const user = await User.findById(userId);
    if (user) return true;
    else return false;
  }

  public async checkEmailExistence(email: string): Promise<boolean> {
    const user = await User.find({ email: email });
    if (user) return true;
    else return false;
  }
}
