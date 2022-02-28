import { 
    IS_ACTIVITIES_CARD_ACTIVE,
    SET_ACTIVITY_NAME,
    TOGGLE_ACTIVITIES_CARD
} from './activityTypes';

export const activitiesCardStatus = () => {
    return {
        type: IS_ACTIVITIES_CARD_ACTIVE
    }
}

export const toggleActivitiesCard = () => {
    return {
        type: TOGGLE_ACTIVITIES_CARD
    }
}

export const setActivityName = (activity) => {
    return {
        type: SET_ACTIVITY_NAME,
        payload: activity
    }
}
