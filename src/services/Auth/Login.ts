import { IUser } from "../../database/models/User";
import UserRepo from "../../database/repositories/UserRepo";
import { bcryptCompare, createSession } from "../../utils";
import {TokenFlag} from '../../database/enum'


async function Login ( params: IUser) {
    const user = await UserRepo.getUserByEmail(params.email);

    if (!user) {
      throw new Error('Invalid Login Credentials');
    }

    const passwordsMatch = await bcryptCompare(params.password, user.password);

    if (!passwordsMatch) {
      throw new Error('Invalid Login Credentials');
    }

    const tokenFlag = TokenFlag.AUTH
    const token = await createSession(user, tokenFlag);

    return {
      token,
      tokenFlag,
    };
}

export default Login;