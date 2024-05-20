export const PATHS = {
    baseUrl: 'http://localhost:3030',
    home: '/',
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    cars: '/data/cars',
    create: '/data/create',
    details: '/cars',
    myCars: '/data/myCars',
    edit: '/cars/:id/edit',
    lastThreeCars: '?sortBy=_createdOn desc&offset=0&pageSize=3'
}

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;