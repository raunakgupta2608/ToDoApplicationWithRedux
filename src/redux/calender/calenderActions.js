import { 
    IS_CALENDER_CARD_ACTIVE,
    TOGGLE_CALENDER_CARD,
    UPDATE_DATE_AND_TIME
} from './calenderTypes';

export const calenderCardStatus = () => {
    return {
        type: IS_CALENDER_CARD_ACTIVE
    }
}

export const toggleCalenderCard = () => {
    return {
        type: TOGGLE_CALENDER_CARD
    }
}

export const updateDateAndTime = (dateAndTime) => {
    return {
        type: UPDATE_DATE_AND_TIME,
        payload: dateAndTime
    }
}
