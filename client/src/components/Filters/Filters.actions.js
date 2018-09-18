import axios from 'axios';

export const GET_IMAGES = 'GET_IMAGES';

export const getImages = (breed) => {
    const request = axios.get(`/breeds/${breed}`);
    return {
        type: GET_IMAGES,
        payload: request
    };
}