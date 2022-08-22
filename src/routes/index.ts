import {Router} from 'express';
import authRouter from './authRoutes'
import reviewRouter from './reviewRoutes'
import apartmentRouter from './apartmentRoutes'

const router = Router();

router.use('/auth', authRouter)
router.use('/review', reviewRouter)
router.use('/apartment', apartmentRouter)
export default router;