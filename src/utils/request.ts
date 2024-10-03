import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path: any, options?: any) => {
    const response = request.get(path, options);

    return (await response).data;
};

export default request;
