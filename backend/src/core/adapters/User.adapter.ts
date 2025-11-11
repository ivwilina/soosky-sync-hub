import { IUser } from "../mongodb/models/User.model";

export default class UserAdapter {
  public async createUser(...params): Promise<any> {}

  public async readUsers(...params): Promise<IUser[] | IUser> {}

  public async deleteUser(...params): Promise<boolean> {}

  public async updateUser(...params): Promise<IUser> {}
}
