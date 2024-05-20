import { PATHS } from '../utils/api.js';
import { request } from '../lib/request.js';

export const getAllCars = async () => {
    const result = await request('GET', PATHS.baseUrl+PATHS.cars);
    return Object.values(result);
}

export const getLastThreeCars = async () => {
    const result = await request('GET', PATHS.baseUrl+PATHS.cars+PATHS.lastThreeCars);
    return Object.values(result);
}