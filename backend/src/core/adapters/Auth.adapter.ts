import bcrypt from "bcrypt";
import { IUser, User } from "../mongodb/models/User.model";
import shitty from "../../configs/ShittyConfig";
import jwt from "jsonwebtoken";

interface IJWTPayload {
  userId: string;
  permission: string;
}

export default class AuthAdapter {
  private readonly _JWTSecret = shitty.secure.jwtKey;

  public async generateToken(
    userId: string,
    permission: string
  ): Promise<string> {
    const payload: IJWTPayload = {
      userId: userId,
      permission: permission,
    };
    const expireTime = "48h";
    const jwtToken = jwt.sign(payload, this._JWTSecret, {
      expiresIn: expireTime,
    });
    return jwtToken;
  }

  public async isPasswordMatch(
    email: string,
    password: string
  ): Promise<boolean> {
    const user: IUser = await User.findOne({ email: email });
    if (user) {
      const isMatch: boolean = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return true;
      } else return false;
    } else return false;
  }
}
