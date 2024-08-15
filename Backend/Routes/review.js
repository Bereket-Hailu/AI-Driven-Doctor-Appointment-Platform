import express from 'express'
import { createReview, getAllReviews } from '../controllers/reviewController'
import { authenticate, restrict } from '../auth/verifyToken'

const router = express.Router({mergeParams: true});

    router.route('/').get(getAllReviews).post(authenticate, restrict(['patient']), createReview)

    export default router;
