import { User, IUser } from "../mongodb/models/User.model";
import bcrypt from "bcrypt";
import { ControllerOutput } from "./Controller";

/*-----------------------------------------------------------------------------------------*/

export default class AuthServices {
  public async login(email: string, password: string): Promise<any> {
    const output: ControllerOutput<string> = {
      returnStatus: false,
      returnMessage: "Incorrect email or password",
      data: null,
    };
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          output.returnStatus = true;
          output.returnMessage = "Login successfully";
          output.data = user._id.toString();
          return output;
        }
        return output;
      }
      return output;
    } catch (error) {
      output.returnMessage = error.message;
      return output;
    }
  }
}