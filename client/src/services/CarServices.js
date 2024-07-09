import { PATHS } from '../utils/api.js';
import { get, post, put, del } from '../lib/request.js';

export const getAllCars = async () => {
    const result = await get(PATHS.baseUrl+PATHS.cars);
    return result;
}

export const getLastThreeCars = async () => {
    const result = await get(PATHS.baseUrl+PATHS.cars+PATHS.lastThreeCars);
    return result;
}

export const getSingleCar = async (id) => {
    const result = await get(PATHS.baseUrl+PATHS.cars+'/'+id);
    return result;
}

export const createCar = async (carData) => {
    const result = await post(PATHS.baseUrl+PATHS.create, carData);
    return result;
}

export const editCar = async (carId, carData) => {
    const result = await put(`${PATHS.baseUrl}${PATHS.cars}/${carId}`, carData);
    return result;
}