import {Router} from 'express';
import ApartmentController from '../controllers/Apartment'

const router = Router();

router.post('/', ApartmentController.CreateApartment)
router.get('/', ApartmentController.GetApartments);
router.get('/:id', ApartmentController.GetOneApartment);

export default router;