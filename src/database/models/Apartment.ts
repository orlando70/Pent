import { Schema, model, Model } from 'mongoose';

import Generic from './generic';

export interface IApartment extends Generic {
  name: string;
  description: string;
  price: number;
}

type Overrides = Record<string, any>;

// eslint-disable-next-line @typescript-eslint/ban-types
type ModelType = Model<IApartment, {}, Overrides>;

const schema = new Schema<IApartment, ModelType>(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    }
  },
  { timestamps: true },
);

export default model<IApartment, ModelType>('Apartment', schema);
