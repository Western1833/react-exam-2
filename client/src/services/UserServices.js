import { get, post } from "../lib/request.js"
import { PATHS } from "../utils/api.js"

export const login = async (email, password) => {
    const result = await post(PATHS.baseUrl+PATHS.login, {
        email,
        password
    });

    return result;
}