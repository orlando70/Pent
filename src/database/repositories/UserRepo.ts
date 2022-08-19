import { Types } from 'mongoose';
import User, { IUser } from '../models/User';

export default class UserRepo {

  public static getUserById = async (id: Types.ObjectId | string) => {
    return User.findById(id);
  };

  public static getUserDetailsById = UserRepo.getUserById;

  public static getUserByEmail = async (email: string) => {
    return User.findOne({
      email,
    });
  };

  public static getUserByUsername = async (username: string) => {
    return User.findOne({
      username,
    });
  };

  public static createUser = async (user: Partial<IUser>) => {
    return User.create(user);
  };

  public static updateUserById = async (
    id: string | Types.ObjectId,
    updates: Partial<IUser>,
  ) => {
    return User.findByIdAndUpdate(id, updates, { new: true });
  };
}
