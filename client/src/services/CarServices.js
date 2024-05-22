import { PATHS } from '../utils/api.js';
import { get, post, put, del } from '../lib/request.js';

export const getAllCars = async () => {
    const result = await get(PATHS.baseUrl+PATHS.cars);
    return Object.values(result);
}

export const getLastThreeCars = async () => {
    const result = await get(PATHS.baseUrl+PATHS.cars+PATHS.lastThreeCars);
    return Object.values(result);
}

export const getSingleCar = async (id) => {
    const result = await get(PATHS.baseUrl+PATHS.cars+'/'+id);
    return result;
}