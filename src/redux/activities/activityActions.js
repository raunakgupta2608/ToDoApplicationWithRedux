import { 
    IS_ACTIVITIES_CARD_ACTIVE,
    SET_ACTIVITY_NAME
} from './activityTypes';

export const activitiesCardStatus = () => {
    return {
        type: IS_ACTIVITIES_CARD_ACTIVE
    }
}

export const setActivityName = (activity) => {
    return {
        type: SET_ACTIVITY_NAME,
        payload: activity
    }
}
