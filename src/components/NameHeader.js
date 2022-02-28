import React from 'react';
import { MdGrid4X4, MdList, MdLockClock } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { toggleActivitiesCard } from '../redux/activities/activityActions';
import { toggleCalenderCard } from '../redux/calender/calenderActions';

const NameHeader = () => {

    const {activity, calender} = useSelector(state => state);
    const dispatch = useDispatch();

    const showActivities = () => {
        if(calender.isCalenderActive) {
            dispatch(toggleCalenderCard());
        }
        dispatch(toggleActivitiesCard());
    }
    return (
        <>
            <MdGrid4X4/>
            <div style={{flex: '3 0 auto', padding: '0 0 0 2%'}}>Mike </div>
            {
                activity?.isActivitiesCardActive ?  <MdLockClock onClick={showActivities}/> : <MdList onClick={showActivities}/>
            }    
        </>
    )
}

export default NameHeader;