import { IReview } from '../../database/models/Review'
import UserRepo from "../../database/repositories/UserRepo";
import ReviewRepo from "../../database/repositories/ReviewRepo";
import { IUser } from '../../database/models/User';
import { fileDownload } from '../../utils';


async function createReview(params: IReview, files: any, user: IUser) {
  const existingUser = await UserRepo.getUserById(user.id);
  if (!existingUser) {
    throw new Error('User not found');
  }  
  const imagesUrl = fileDownload([files[0].key, files[1].key])
  const review = await ReviewRepo.createReview({
    ...params,
    userId: user._id,
    photos: imagesUrl
  });
  
  return {
    review
  };
}

export default createReview;