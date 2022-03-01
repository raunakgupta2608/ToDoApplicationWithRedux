import { 
    FETCH_SELECTED_ACTIVITY
} from './selectedActivityTypes';

const initialState = { }

const selectedActivityReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SELECTED_ACTIVITY : 
            if(action.payload != undefined)
                return { ...state, ...action.payload }
            else  
                return {};
        default: return state
    }
};

export default selectedActivityReducer;