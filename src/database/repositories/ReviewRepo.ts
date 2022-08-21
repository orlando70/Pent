import { Types } from 'mongoose';
import Review, { IReview } from '../models/Review';

export default class ReviewRepo {
  public static createReview = async (review: Partial<IReview>) => {
    return Review.create(review);
  };

  public static getReviewById = async (id: string) => {
    return Review.findById(id);
  };

  public static getAllReviews = async () => {
    return Review.find();
  };

  public static SortReviewsByCount = async () => {
    return Review.find().sort({"helpfulCount": -1});
  };

  public static SortReviewsByRecent = async () => {
    return Review.find().sort({"createdAt": -1});
  };

  public static updateReviewById = async (
    id: string | Types.ObjectId,
    updates: Partial<IReview>,
  ) => {
    return Review.findByIdAndUpdate(id, updates, { new: true });
  };
}
