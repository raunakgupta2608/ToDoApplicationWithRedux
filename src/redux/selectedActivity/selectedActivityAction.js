import { 
    FETCH_SELECTED_ACTIVITY
} from './selectedActivityTypes';

export const selectedActivity = (activity) => {
    return {
        type: FETCH_SELECTED_ACTIVITY,
        payload: activity
    }
}

