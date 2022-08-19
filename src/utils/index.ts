import * as bcrypt from 'bcrypt';
import crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import config from '../config';
// eslint-disable-next-line import/order
import type { Response } from 'express';

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
    jwt.verify(
      token,
      config.app.secret,
      (err: any, decoded: jwt.JwtPayload | undefined) => {
        if (err) {
          reject(err);
        }
        resolve(decoded as JwtData);
      },
    );
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
