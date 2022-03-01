import { IS_CALENDER_CARD_ACTIVE, TOGGLE_CALENDER_CARD, UPDATE_DATE_AND_TIME } from "./calenderTypes";

const initialState = {
    isCalenderActive: false,
    calender: []
}

const calenderReducer = (state= initialState, action) => {
    switch(action.type) {
        case IS_CALENDER_CARD_ACTIVE : return {
            isCalenderActive: state.isCalenderActive
        }
        case TOGGLE_CALENDER_CARD : return {
            ...state,
            isCalenderActive: !(state.isCalenderActive)
        }
        case UPDATE_DATE_AND_TIME : 
        const obj =  { 
            calenderDate: action.payload.date, 
            calenderTime: action.payload.time, 
            activityName: action.payload.activityName
        };
        return {
            ...state,
            isCalenderActive: !(state.isCalenderActive),
            calender: [
                ...state.calender,
                obj
            ]
        }
        default: return state
    }
}

export default calenderReducer;
