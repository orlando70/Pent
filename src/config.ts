import env from 'dotenv';

env.config({
    path: process.env.ENV_FILE_PATH,
});

export enum AppEnvironmentEnum {
    TEST = 'test',
    LOCAL = 'local',
    DEVELOPMENT = 'development',
}

type Config = {
    env: {
        isDevelopment: boolean;
        isTest: boolean;
    };
    app: {
        env: AppEnvironmentEnum;
        secret: string;
        bcryptRounds: number;
        port: number;
    };
    db: {
        uri: string;
    };
    redis: {
        mode: string; // 'single' | 'cluster';
        host: string;
        port: number;
    };
    aws: {
        awsId: string;
        awsSecret: string;
        awsBucketName: string;
        awsRegion: string;
    };
};

const config: Config = {
    env: {
        isDevelopment: process.env.NODE_ENV === AppEnvironmentEnum.DEVELOPMENT,
        isTest: process.env.NODE_ENV === AppEnvironmentEnum.TEST,
    },
    app: {
        env: process.env.APP_ENV as AppEnvironmentEnum,
        secret: process.env.APP_SECRET!,
        bcryptRounds: 10,
        port: +process.env.PORT! || 5000,
    },
    db: {
        uri: process.env.DB_URI!
    },
    redis: {
        mode: process.env.REDIS_MODE! || 'cluster',
        host: process.env.REDIS_HOST!,
        port: +process.env.REDIS_PORT!,
      
    },
    aws: {
        awsId: process.env.AWS_ID!,
        awsSecret: process.env.AWS_SECRET!,
        awsBucketName: process.env.AWS_BUCKET_NAME!,
        awsRegion: process.env.AWS_REGION!,
    },
};


const validateConfig = () => {
    const missingKeys: string[] = [];
    Object.entries(config).forEach(([baseKey, baseValue]) => {
      Object.entries(baseValue).forEach(([key, value]) => {
        if (value === '' || value === undefined) {
          missingKeys.push(`${baseKey}.${key}`);
        }
      });
    });
    if (missingKeys.length) {
      global.console.error(`The following configuration keys are not set: ${missingKeys.join(', ')}`);
      process.exit(1);
    }
  };
  
  validateConfig();

export default config;