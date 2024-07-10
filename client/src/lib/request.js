const buildOptions = (data) => {
    const options = {
        headers: {}
    };

    const accessToken = localStorage.getItem('accessToken');

    if (data) {
        options.body = JSON.stringify(data);
        options.headers['Content-Type'] = 'application/json';
    }

    if (accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    return options;
};

const request = async (method, url, data) => {
    const response = await fetch(url, {
        method,
        ...buildOptions(data)
    });

    if(response.status === 204){
        return {};
    }

    const result = await response.json();

    // if(!request.ok){
    //     throw result;
    // }

    return result;
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');