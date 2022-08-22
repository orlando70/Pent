import ReviewRepo from "../../database/repositories/ReviewRepo";
import { NotFoundError } from "../../errors";


async function updateReview(id: string) {
    const review = await ReviewRepo.getReviewById(id);
    if (!review) {
        throw new NotFoundError('Review not found.')
    }
    const updatedReview = await ReviewRepo.updateReviewById(id, {
        helpfulCount: review.helpfulCount += 1,
    })
    return {
        updatedReview
    };
}

export default updateReview;