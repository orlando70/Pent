import { connect } from 'mongoose';
import config from '../config';

// eslint-disable-next-line import/prefer-default-export
export const createMongodbConnection = async () => {
  await connect(config.db.uri)
  .then(() => console.log('connected to mongo db server'));
};
