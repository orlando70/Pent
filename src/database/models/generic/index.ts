import { Types } from 'mongoose';

export default interface Generic {
  _id: Types.ObjectId;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

