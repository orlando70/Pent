import { Request } from 'express';
import { IUser } from '../database/models/User';

interface Session {
    token: string;
    user: IUser;
}

export interface AuthenticatedRequest extends Request {
    session: Session
  }

// export interface FileUploadRequest extends AuthenticatedRequest {
//   file: Express.MulterS3.File;
// }

export function successResponse(result: { message?: string; data: any; pageData?: any }) {
  return {
    status: 'success',
    message: result.message || 'the request was successful',
    ...result,
  };
}
