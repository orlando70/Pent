import { Schema, model, Model } from 'mongoose';

import Generic from './generic';

export interface IUser extends Generic {
  email: string;
  username: string;
  password: string;
}

type Overrides = Record<string, any>;

// eslint-disable-next-line @typescript-eslint/ban-types
type ModelType = Model<IUser, {}, Overrides>;

const schema = new Schema<IUser, ModelType>(
  {
    email: {
      type: String,
      sparse: true,
      unique: true,
    },
    username: {
      type: String,
      unique: true
    },
    password: {
      type: String
    }
  },
  { timestamps: true },
);

export default model<IUser, ModelType>('User', schema);
