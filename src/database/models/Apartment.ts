import { Schema, model, Model } from 'mongoose';

import Generic from './generic';

export interface IApartment extends Generic {
  name: string;
}

type Overrides = Record<string, any>;

// eslint-disable-next-line @typescript-eslint/ban-types
type ModelType = Model<IApartment, {}, Overrides>;

const schema = new Schema<IApartment, ModelType>(
  {
    name: {
      type: String,
    }
  },
  { timestamps: true },
);

export default model<IApartment, ModelType>('Apartment', schema);
