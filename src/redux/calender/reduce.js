// import { IS_CALENDER_CARD_ACTIVE, TOGGLE_CALENDER_CARD, UPDATE_DATE_AND_TIME } from "./calenderTypes";

// const initialState = {
//     isCalenderActive: false,
//     calenderDate: '',
//     calenderTime: '00:00'
// }

// const reduce = (state= initialState, action) => {
//     switch(action.types) {
//         case IS_CALENDER_CARD_ACTIVE : console.log(action); return {
//             isCalenderActive: state.isCalenderActive
//         }
//         case TOGGLE_CALENDER_CARD : console.log(action); return {
//             ...state,
//             isCalenderActive: !(state.isCalenderActive)
//         }
//         case UPDATE_DATE_AND_TIME : return {
//             ...state,
//             calenderDate: action.payload.date,
//             calenderTime: action.payload.time
//         }
//         default: return state
//     }
// }

// export default reduce;
