import * as _ from 'lodash'
import ReviewRepo from "../../database/repositories/ReviewRepo";
import { NotFoundError } from '../../errors';


async function getOneReview(id: string) {
    const review = await ReviewRepo.getReviewById(id);

    if (!review) {
        throw new NotFoundError('No reviews were found')
    }

    return {
        review
    };
}

export default getOneReview;