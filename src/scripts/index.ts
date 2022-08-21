import ApartmentRepo from "../database/repositories/ApartmentRepo";
import apartments from './seederData/apartment'

export const seedApartment = async () => {
    console.log('Apartment seeding starting....')

    await Promise.all([
        ...apartments.map(async (apartment) => {
            const $apartment = ApartmentRepo.getApartmentByQuery({
                name: apartment.name,
            });
            if (!$apartment) ApartmentRepo.createApartment(apartment);
        }),
    ]);
    console.log('Apartment seeding completed....');
}

const run = async () => {
    if (require.main === module) {
      try {
        await seedApartment();
      } catch (e) {
        console.log(e);
      } finally {
        process.exit(0);
      }
    }
  };
  
  export default run();