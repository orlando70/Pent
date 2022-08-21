import {Router} from 'express';
import authRouter from './authRoutes'
import reviewRouter from './reviewRoutes'

const router = Router();

router.use('/auth', authRouter)
router.use('/review', reviewRouter)

export default router;