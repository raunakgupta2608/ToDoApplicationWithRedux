import React from 'react'
import { useSelector } from 'react-redux';
import Activities from './Activities';
import CalenderCard from './CalenderCard';

function RenderActivityCalender() {
  const {activity, calender} = useSelector(state => state);
  return (
    <>
        {
          (activity?.isActivitiesCardActive && !calender?.isCalenderActive) &&  
          <Activities/> 
        }
        {
          (calender?.isCalenderActive && !activity?.isActivitiesCardActive) &&  
          <CalenderCard/> 
        }
    </>
  )
}

export default RenderActivityCalender

