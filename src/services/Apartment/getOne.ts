import ApartmentRepo from '../../database/repositories/ApartmentRepo';
import { NotFoundError } from '../../errors';


async function getApartment(id: string) {
    const apartment = await ApartmentRepo.getApartmentById(id);
    if (!apartment) {
        throw new NotFoundError('Apartment not found')
    }

    return {
        apartment
    };
}

export default getApartment;