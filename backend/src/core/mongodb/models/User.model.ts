import { Schema, model , Document} from "mongoose";
import { IJobTitle } from "./JobTitle.model";
import { IJobLevel } from "./JobLevel.model";

/*-----------------------------------------------------------------------------------------*/

enum Permission {
  Admin = "admin",
  Emp = "employee",
}

interface IUser extends Document{
  name: string;
  email: string;
  password: string;
  title?: IJobTitle;
  level?: IJobLevel;
  permission?: Permission;
  createdAt?: string
  updatedAt?: string
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  permission: { type: String, default: Permission.Emp },
  title: { type: Schema.Types.ObjectId, ref: "jobTitles" },
  level: { type: Schema.Types.ObjectId, ref: "jobLevels" },
  }, {timestamps: true});

/*-----------------------------------------------------------------------------------------*/

const User = model<IUser>("users", userSchema);

export { User, IUser };
