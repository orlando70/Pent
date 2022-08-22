import { IApartment } from '../../database/models/Apartment';
import ApartmentRepo from '../../database/repositories/ApartmentRepo';
import { ServiceError } from '../../errors';


async function getApartments(params: IApartment) {
    const apartment = await ApartmentRepo.createApartment(params);
    if (!apartment) {
        throw new ServiceError('An error occurred while creating a new apartment')
    }

    return {
        apartment
    };
}

export default getApartments;