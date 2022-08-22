import {Request, Response } from 'express';
import { AuthenticatedRequest, successResponse } from '.';
import * as ApartmentService from '../services/Apartment/index'

export default class AuthController {
  public static GetApartments = async (req: Request, res: Response) => {

    const result = await ApartmentService.getAllApartment();
    return res.send(
        successResponse({
          message: 'Apartments fetched successfully',
          data: result,
        }),
    );
  };

  public static GetOneApartment = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ApartmentService.getOneApartment(id);
    return res.send(
        successResponse({
          message: 'Apartment fetched successfully',
          data: result,
        }),
    );
  };

  public static CreateApartment = async (req: Request, res: Response) => {
    const params = req.body;
    const result = await ApartmentService.createApartment(params);
    return res.send(
        successResponse({
          message: 'Apartment created successfully',
          data: result,
        }),
    );
  };
}
