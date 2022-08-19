import { Schema, model, Model } from 'mongoose';

import Generic from './generic';

export interface IReview extends Generic {
  description: string;
  isHelpful: boolean;
  helpfulCount: number;
}

type Overrides = Record<string, any>;

// eslint-disable-next-line @typescript-eslint/ban-types
type ModelType = Model<IReview, {}, Overrides>;

const schema = new Schema<IReview, ModelType>(
  {
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
