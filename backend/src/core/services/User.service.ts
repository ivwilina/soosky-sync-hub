import { User, IUser } from "../mongodb/models/User.model";
import bcrypt from "bcrypt";
import shitty from "../../configs/ShittyConfig";
import { ControllerOutput } from "./Controller";
import generateRandomPassword from "../../helpers/PasswordGenerator";

/*-----------------------------------------------------------------------------------------*/

export default class UserServices {
  public readonly _saltRound = shitty.bcrytp.saltRound;

  public async getUsers(userId?: string): Promise<any> {
    const output: ControllerOutput<IUser[] | IUser> = {
      returnStatus: false,
      returnMessage: "Cannot find any user",
      data: null,
    };
    try {
      console.log(`input id: ${userId}`);
      if (userId) {
        const user = await User.findById(userId);
        if (user) {
          output.returnStatus = true;
          output.returnMessage = "Found user";
          output.data = user;
          return output;
        }
        return output;
      } else {
        const user = await User.find({});
        if (user) {
          output.returnStatus = true;
          output.returnMessage = `Found ${user.length} ${
            user.length > 1 ? "users" : "user"
          }`;
          output.data = user;
          return output;
        }
        return output;
      }
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }

  public async createUser(userName: string, userEmail: string): Promise<any> {
    const output: ControllerOutput<Object> = {
      returnStatus: false,
      returnMessage: "Cannot find any user",
      data: null,
    };
    try {
      const newPassword = await generateRandomPassword(8);
      const newHashedPassword = await bcrypt.hash(newPassword, this._saltRound);
      await User.create({
        name: userName,
        email: userEmail,
        password: newHashedPassword,
        createAt: new Date().toISOString(),
      });
      output.returnStatus = true;
      output.returnMessage = "Create user successfully";
      output.data = {
        email: userEmail,
        password: newPassword,
      };
      return output;
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }

  public async deleteUsers(userId: string[]): Promise<any> {
    const output: ControllerOutput<any> = {
      returnStatus: false,
      returnMessage: "Cannot find any user",
      data: null,
    };
    try {
      await User.findByIdAndDelete(userId);
      output.returnStatus = true;
      output.returnMessage = `Deleted ${userId.length} ${
        userId.length > 1 ? "users" : "user"
      }`;
      return output;
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }

  public async modifyUserInfomation(
    userId: string,
    ...infomation: any
  ): Promise<any> {
    const output: ControllerOutput<IUser> = {
      returnStatus: false,
      returnMessage: "User not found",
      data: null,
    };
    try {
      await User.findByIdAndUpdate(userId, ...infomation);
      const updatedUser = await User.findById(userId);
      output.returnStatus = true;
      output.returnMessage = "Update user information successfully";
      output.data = updatedUser;
      console.log(updatedUser);
      return output;
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }

  public async changeAccountPassword(
    userId: string,
    oldPassword: string,
    newPassword: string
  ): Promise<any> {
    const output: ControllerOutput<IUser> = {
      returnStatus: false,
      returnMessage: "User not found",
      data: null,
    };
    try {
      const user = await User.findById(userId);
      const passwordMatch = await bcrypt.compare(oldPassword, user.password);
      if (passwordMatch) {
        const newHashedPassword = bcrypt.hash(newPassword, this._saltRound);
        await User.findByIdAndUpdate(userId, newHashedPassword);
        const updatedUser = await User.findById(userId);
        output.returnStatus = true;
        output.returnMessage = "Password changed successfully";
        output.data = updatedUser;
        return output;
      } else {
        output.returnMessage = "Incorrect password";
        return output;
      }
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }
}
