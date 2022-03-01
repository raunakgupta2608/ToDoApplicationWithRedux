import { 
    IS_ACTIVITIES_CARD_ACTIVE,
    SET_ACTIVITIES_CARD_STATUS,
    SET_ACTIVITY_NAME,
    TOGGLE_ACTIVITIES_CARD
} from './activityTypes';

export const activitiesCardStatus = () => {
    return {
        type: IS_ACTIVITIES_CARD_ACTIVE
    }
}

export const setActivitiesCardStatus = (booleanValue) => {
    return {
        type: SET_ACTIVITIES_CARD_STATUS,
        payload: booleanValue
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
