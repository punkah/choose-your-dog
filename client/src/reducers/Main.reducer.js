import { GET_BREEDS } from '../components/Main/Main.actions';

export default function(state = [], action) {
    switch (action.type) {
        case GET_BREEDS:
            return Object.keys(action.payload.data);
        default: 
            return state;
    }    
  }