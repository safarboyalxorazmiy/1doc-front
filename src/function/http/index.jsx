import axios from 'axios';

const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URL  || import.meta.env.VITE_API_URL_RESERVE
});

const $authHost = axios.create({
    baseURL: import.meta.env.VITE_API_URL  || import.meta.env.VITE_API_URL_RESERVE
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
};
