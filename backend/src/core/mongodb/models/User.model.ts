import { Schema, model , Document} from "mongoose";

/*-----------------------------------------------------------------------------------------*/

enum Permission {
  Admin = "admin",
  Emp = "employee",
}

interface IUser extends Document{
  name: string;
  email: string;
  password: string;
  permission?: Permission;
  createAt: string
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  permission: { type: String, default: Permission.Emp },
  createAt: {type: String, required: true}
});

/*-----------------------------------------------------------------------------------------*/

const User = model<IUser>("users", userSchema);

export { User, IUser };
