import { IS_CALENDER_CARD_ACTIVE, TOGGLE_CALENDER_CARD, UPDATE_DATE_AND_TIME } from "./calenderTypes";

const initialState = {
    isCalenderActive: false,
    calenderDate: '',
    calenderTime: '00:00'
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
        case UPDATE_DATE_AND_TIME : return {
            ...state,
            calenderDate: action.payload.date,
            calenderTime: action.payload.time
        }
        default: return state
    }
}

export default calenderReducer;






// import {  IS_CALENDER_CARD_ACTIVE,  TOGGLE_CALENDER_CARD,  UPDATE_DATE_AND_TIME } from '../calender/calenderTypes';

// const initialState = {
//     isCalenderCardActive: false,
//     calenderDate: '',
//     calenderTime: '00:00'
// }

// const calenderReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case IS_CALENDER_CARD_ACTIVE : return {
//             isCalenderCardActive: state.isCalenderCardActive
//         }
//         case TOGGLE_CALENDER_CARD : return {
//             ...state,
//             isCalenderCardActive: !state.isCalenderCardActive
//         }
//         case UPDATE_DATE_AND_TIME : console.log(action.payload.date, action.payload.time);return {
//             isCalenderCardActive: !state.isCalenderCardActive,
//             calenderDate: action.payload.date,
//             calenderTime: action.payload.time
//         }
//         default: return state
//     }
// }

// export default calenderReducer;