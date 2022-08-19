import 'express-async-errors'
import { createMongodbConnection } from './database/connection';
import { monitorRedisConnection } from './database/redis';
import config from './config';
// import routes from './routes';

export default async () => {
    if (!config.env.isTest) await monitorRedisConnection();
    await createMongodbConnection();

    const app = (await import('./app')).default;
    // app.use(routes);
};
