import { combineReducers } from "redux";
import activitiesReducer from "./activities/activityReducer";
import calenderReducer from './calender/calenderReducer';

const rootReducer = combineReducers({
    activity: activitiesReducer,
    calender: calenderReducer
})

export default rootReducer;