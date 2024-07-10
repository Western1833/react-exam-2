import { get, post } from "../lib/request.js"
import { PATHS } from "../utils/api.js"

export const getAllLikes = async (carId) => {
    const result = await get(`${PATHS.baseUrl}/data/likes?where=carId%3D%22${carId}%22&count`);
    return result;
};

export const hasLiked = async (carId, userId) => {
    const result = await get(`${PATHS.baseUrl}/data/likes?where=carId%3D%22${carId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
    return result;
};

export const likeCar = async (carId, username) => {
    const result = await post(`${PATHS.baseUrl}/data/likes`, {carId, username});
    return result;
};

export const getLikesData = async (carId) => {
    const result = await get(`${PATHS.baseUrl}/data/likes/?where=carId%3D%22${carId}%22&select=username`);
    return result;
}