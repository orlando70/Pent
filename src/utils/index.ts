import * as bcrypt from 'bcrypt';
import crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import config from '../config';
import moment from 'moment'
import redis from '../database/redis'
// eslint-disable-next-line import/order
import type { Response } from 'express';
import { IUser } from '../database/models/User';
import {TokenFlag} from '../database/enum'

type JwtData = jwt.JwtPayload & {
  userId: string;
  counter: string;
  flag: string;
};

type SuccessResponsePayload = {
    message?: string;
    spreadData?: Record<string, any>;
    data?: any;
  };

export function bcryptHash(password: string) {
  return bcrypt.hash(password, config.app.bcryptRounds);
}

export function bcryptCompare(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function generateRandomCode(length: number) {
    return crypto
      .randomBytes(length * 3)
      .toString('base64')
      .split('+')
      .join('')
      .split('/')
      .join('')
      .split('=')
      .join('')
      .substr(0, length);
  }

export async function generateJWTToken(
  payload: Record<string, any>,
  secret: string = config.app.secret,
  expiresIn?: string,
): Promise<string> {
  const jwtPayload = {
    ...payload,
    counter: generateRandomCode(36),
  };
  const options = { expiresIn: expiresIn || '720h' };

  return new Promise((resolve, reject) => {
    jwt.sign(
      jwtPayload,
      secret,
      options,
      (err: any, token: string | undefined) => {
        if (err) {
          reject(err);
        }
        resolve(token as string);
      },
    );
  });
}

export async function decodeToken(token: string): Promise<JwtData> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.app.secret, (err: any, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded as JwtData);
    });
  });
}

export function success(res: Response, payload: SuccessResponsePayload) {
  const { message, data, spreadData } = payload;
  return res.json({
    status: 'success',
    message,
    data,
    ...(spreadData || {}),
  });
}


export const createSession = async (
  user: IUser,
  tokenFlag = TokenFlag.AUTH,
) => {
  const token = await generateJWTToken({
    userId: user.id || user._id.toString(),
    flag: tokenFlag,
  });
  const decodedToken = await decodeToken(token);

  const sessionKeyPrefix = `sessions:${user.id}`;
  const sessionKey = `${sessionKeyPrefix}:${decodedToken.counter}`;
  const expires = moment().diff(moment(decodedToken.exp), 'seconds');

  await redis.setex(sessionKey, expires, token);
  await redis.sadd(sessionKeyPrefix, sessionKey);
  await redis.expire(sessionKeyPrefix, expires);

  return token;
};

export const deleteSessions = async (userId: Types.ObjectId | string) => {
  const sessionKeyPrefix = `sessions:${userId.toString()}`;
  const sessions = await redis.smembers(sessionKeyPrefix);

  await Promise.all(sessions.map((session) => redis.del(session)));
  await redis.del(sessionKeyPrefix);
};