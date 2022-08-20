import {Request, Response } from 'express';
import { AuthenticatedRequest, successResponse } from '.';
import * as AuthService from '../services/Auth/index'

export default class AuthController {
  public static Register = async (req: Request, res: Response) => {

    const result = await AuthService.Register(req.body);
    return res.send(
        successResponse({
          message: '',
          data: result,
        }),
    );
  };

//   public static Login = async (req: AuthenticatedRequest, res: Response) => {
//     const { files } = req;

//     const result = await AuthService.Login({ accountId: req.session.user, files });
//     return res.send(
//         successResponse({
//           message: '',
//           data: result,
//         }),
//     );
//   };

  

//   public static delete = async (req: AuthenticatedRequest, res: Response) => {
//     const result = await AuthService.delete({
//       accountId: req.session.accountId,
//     });
//     return res.send(
//       snakeCaseKeys(
//         successResponse({
//           message: '',
//           data: result,
//         }),
//       ),
//     );
//   };
}
