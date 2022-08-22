import { Request, Response } from 'express';
import { AuthenticatedRequest, FileUploadRequest, successResponse } from '.';
import * as ReviewService from '../services/Review/index'

export default class ReviewController {
  public static Create = async (req: FileUploadRequest, res: Response) => {
    if (req.session) {
      const { user } = req.session;
      const {body, files} = req;
      const result = await ReviewService.createReview(body, files, user);
      return res.send(
        successResponse({
          message: 'Review Sent',
          data: result,
        }),
      );
    }
  };

  public static Get = async (req: Request, res: Response) => {
    const sortByCount = req.query.count;
    const sortByRecent = req.query.recent;

    const result = await ReviewService.getReviews(sortByCount, sortByRecent);
    return res.send(
      successResponse({
        message: 'Successfully fetched reviews',
        data: result,
      }),
    );
  };
  public static GetOne = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ReviewService.getOneReview(id);
    return res.send(
      successResponse({
        message: 'Successfully fetched review',
        data: result,
      }),
    );
  };

  public static Update = async (req: Request, res: Response) => {
    const result = await ReviewService.updateReview(req.params.id);
    return res.send(
      successResponse({
        message: 'Review Updated',
        data: result,
      }),
    );
  };

}
