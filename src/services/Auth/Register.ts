import { IUser } from "../../database/models/User";
import UserRepo from "../../database/repositories/UserRepo";
import { bcryptHash, createSession } from "../../utils";
import {TokenFlag} from '../../database/enum'
import { ServiceError } from "../../errors";


async function Register ( params: IUser) {
    const existingUserWithEmail = await UserRepo.getUserByEmail(params.email);
    if (existingUserWithEmail) {
        throw new ServiceError('User already exists');
    }

    const user = await UserRepo.createUser({
        email: params.email,
        username: params.username,
        password: await bcryptHash(params.password),
    });

    const token = await createSession(user, TokenFlag.AUTH);

    return {
        tokenFlag: TokenFlag.AUTH,
        token,
    };
}

export default Register;