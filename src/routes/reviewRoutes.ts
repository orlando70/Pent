import {Router} from 'express';
import ReviewController from '../controllers/Review'
import { TokenFlag } from '../database/enum';
import { validateToken } from '../middlewares/auth';
import { fileStorage } from '../utils';

const router = Router();

const photos = fileStorage(['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG']).array('files', 2);

router.post('/', validateToken(TokenFlag.AUTH), photos, ReviewController.Create);
router.patch('/:id', ReviewController.Update);
router.get('/', ReviewController.Get)
router.get('/:id', ReviewController.GetOne)

export default router;