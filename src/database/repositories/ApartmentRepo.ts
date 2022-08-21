import { Types } from 'mongoose';
import Apartment, { IApartment } from '../models/Apartment';

export default class ApartmentRepo {
  public static createApartment = async (apartment: Partial<IApartment>) => {
    return Apartment.create(apartment);
  };

  public static getApartmentById = async (id: Partial<IApartment>) => {
    return Apartment.findById(id);
  };
  
  public static getApartmentByQuery = async (condition: Partial<IApartment>) => {
    return Apartment.findOne(condition);
  };

  public static updateApartmentById = async (
    id: string | Types.ObjectId,
    updates: Partial<IApartment>,
  ) => {
    return Apartment.findByIdAndUpdate(id, updates, { new: true });
  };
}
