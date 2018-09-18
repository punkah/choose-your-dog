import axios from 'axios';

export const GET_BREEDS = 'GET_BREEDS';

export const getBreeds = () => {
    const request = axios.get('/breeds');
    return {
        type: GET_BREEDS,
        payload: request
    };
}