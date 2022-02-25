import { IS_ACTIVITIES_CARD_ACTIVE } from "../toDoTypes"

const initialState = {
    isActivitiesCardActive: true
}

const toDoReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_ACTIVITIES_CARD_ACTIVE : return {
            ...state,
            isActivitiesCardActive: !state.isActivitiesCardActive
        }
        default: return state
    }
}

export default toDoReducer;