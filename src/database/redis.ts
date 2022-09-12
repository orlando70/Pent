import Redis from 'ioredis';
import config from '../config';

const redis = config.redis.mode === 'cluster'
  ? new Redis.Cluster(
    [
      {
        port: config.redis.port,
        host: config.redis.host,
      },
    ],
    {
      redisOptions: {
      },
    },
  )
  : new Redis({
    port: config.redis.port || 6380,
    host: config.redis.host,
    password: config.redis.password,
    username: config.redis.username
  });

export default redis;

export const monitorRedisConnection = async () => {
  return new Promise((resolve, reject) => {
    redis.on('connect', () => {
      console.log('connected to redis server');
      resolve(true);
    });
    redis.on('error', (error: any) => {
      console.log('error connecting to redis', {
        error,
      });
      reject(error);
    });
  });
};
