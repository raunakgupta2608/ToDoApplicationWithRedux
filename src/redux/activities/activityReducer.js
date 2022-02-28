import { IS_ACTIVITIES_CARD_ACTIVE, SET_ACTIVITY_NAME, TOGGLE_ACTIVITIES_CARD } from "../activities/activityTypes"

const initialState = {
    isActivitiesCardActive: false,
    activityName: ''
}

const activitiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_ACTIVITIES_CARD_ACTIVE : return {
            isActivitiesCardActive: state.isActivitiesCardActive
        }
        case TOGGLE_ACTIVITIES_CARD : return {
            ...state,
            isActivitiesCardActive: !(state.isActivitiesCardActive)
        }
        case SET_ACTIVITY_NAME : return {
            ...state,
            activityName: action.payload
        }
        default: return state
    }
}

export default activitiesReducer;