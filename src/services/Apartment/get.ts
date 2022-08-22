import ApartmentRepo from '../../database/repositories/ApartmentRepo';
import { NotFoundError } from '../../errors';


async function getApartments() {
    const apartments = await ApartmentRepo.getAllApartment();
    if (!apartments) {
        throw new NotFoundError('Apartment not found')
    }

    return {
        apartments
    };
}

export default getApartments;