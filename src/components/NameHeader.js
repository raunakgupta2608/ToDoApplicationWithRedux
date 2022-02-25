import React from 'react';
import { MdGrid4X4, MdList, MdLockClock } from "react-icons/md";
import { useSelector } from 'react-redux';

const NameHeader = () => {

    const {activity, calender} = useSelector(state => state);
    return (
        <>
            <MdGrid4X4/>
            <div style={{flex: '3 0 auto', padding: '0 0 0 2%'}}>Mike </div>
            {
                activity?.isActivitiesCardActive ?  <MdLockClock/> : <MdList/>
            }    
        </>
    )
}

export default NameHeader;