import { Schema, model, Model, Types } from 'mongoose';
import ApartmentModel from './Apartment'
import UserModel from './User'

import Generic from './generic';

export interface IReview extends Generic {
  apartmentId: Types.ObjectId;
  userId: Types.ObjectId;
  description: string;
  isHelpful: boolean;
  helpfulCount: number;
}

type Overrides = Record<string, any>;

// eslint-disable-next-line @typescript-eslint/ban-types
type ModelType = Model<IReview, {}, Overrides>;

const schema = new Schema<IReview, ModelType>(
  {
    apartmentId: {
    type: Schema.Types.ObjectId,
    ref: ApartmentModel,
  },
    userId: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
  },
    description: {
      type: String,
    },
    isHelpful: {
      type: Boolean,
      default: false,
    },
    helpfulCount: {
      type: Number,
    }
  },
  { timestamps: true },
);

export default model<IReview, ModelType>('Review', schema);
