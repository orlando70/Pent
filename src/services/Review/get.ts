import * as _ from 'lodash'
import ReviewRepo from "../../database/repositories/ReviewRepo";


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

    return {
        reviews
    };
}

export default getReview;