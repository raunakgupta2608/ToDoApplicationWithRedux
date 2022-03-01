import { combineReducers } from "redux";
import activitiesReducer from "./activities/activityReducer";
import calenderReducer from './calender/calenderReducer';
import selectedActivityReducer from "./selectedActivity/selectedActivityReducer";

const rootReducer = combineReducers({
    activity: activitiesReducer,
    calender: calenderReducer,
    selectedActivity: selectedActivityReducer
})

export default rootReducer;