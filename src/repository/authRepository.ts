import bcrypt from "bcrypt";
import { Service } from "typedi";

import { generarJWT } from "../helpers/jwt";
import { userModel } from "../models/user";
import { UserMap } from "../validates/userMap";

@Service()
export class AuthRepository {
  constructor(private userMap: UserMap) {}

  async findUser(username: string, password: string) {
    const pass = password;
    const user = await userModel.findOne({ username: username });

    if (!user) {
      return 1;
    }

    const validPassword = bcrypt.compareSync(pass, user?.password);

    if (!validPassword) {
      return 2;
    }

    const token = await generarJWT(user.id);
    return token;
  }

  async renewToken(uid: string) {
    const convert = { "_id": uid };
    const token = await generarJWT(uid);

    const user = await userModel.findOne(convert);
    return [token, user];
  }

}
