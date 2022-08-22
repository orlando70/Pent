import * as _ from 'lodash'
import ReviewRepo from "../../database/repositories/ReviewRepo";
import { NotFoundError } from '../../errors';


async function getReview<T>(count?: T, recent?: T) {
    let reviews: unknown;
    if (count) {
        reviews = await ReviewRepo.SortReviewsByCount();
    }
    else if (recent) {
        reviews = await ReviewRepo.SortReviewsByRecent();
    }
    else {
        reviews = await ReviewRepo.getAllReviews();
    }

    if (!reviews) {
        throw new NotFoundError('No reviews were found')
    }

    return {
        reviews
    };
}

export default getReview;