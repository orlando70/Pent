import { Types } from 'mongoose';
import Review, { IReview } from '../models/Review';

export default class ReviewRepo {
  public static createReview = async (review: Partial<IReview>) => {
    return Review.create(review);
  };

  public static getReviewById = async (id: Partial<IReview>) => {
    return Review.findById(id);
  };

  public static updateReviewById = async (
    id: string | Types.ObjectId,
    updates: Partial<IReview>,
  ) => {
    return Review.findByIdAndUpdate(id, updates, { new: true });
  };
}
