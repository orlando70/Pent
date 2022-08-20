import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../controllers';
import { TokenFlag } from '../database/enum';
import User from '../database/models/User';
import { decodeToken } from '../utils';

export const validateToken = (tokenFlag = TokenFlag.AUTH) => {
  return async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const authorization = req.header('authorization') || '';
    const token = authorization.split(' ')[1];

    try {
      if (!token) {
        return next(
          new Error(
            'you need to be authenticated to access this endpoint',
          ),
        );
      }

      const { userId, flag, counter } = await decodeToken(token);

      if (!userId) {
        return next(new Error('unable to verify token'));
      }

      if (flag !== tokenFlag) {
        return next(
          new Error(`token is not valid for ${tokenFlag}`),
        );
      }

      const user = await User.findById(userId);

      if (!user) {
        return next(new Error('token is invalid'));
      }

      req.session = Object.assign(req.session || {}, {
        type: user.type,
        user,
        token,
      });

      return next();
    } catch (e: any) {
      switch (e.name) {
        case 'TokenExpiredError':
          return next(new Error('token has expired'));
        case 'JsonWebTokenError':
          return next(new Error(e.message));
        case 'NotBeforeError':
          return next(new Error(e.message));
        default:
          return next(e);
      }
    }
  };
};

export default validateToken();
