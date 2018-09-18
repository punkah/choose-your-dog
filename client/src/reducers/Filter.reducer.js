import { GET_IMAGES } from '../components/Filters/Filters.actions';

export default function(state = [], action) {
    switch (action.type) {
        case GET_IMAGES:
            return action.payload.data;
        default: 
            return state;
    }    
  }