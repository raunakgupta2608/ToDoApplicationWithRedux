import '../css/HomeCard.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdMoreTime } from "react-icons/md";
import NameHeader from './NameHeader';
import CircularProgressbar from '../components/CircularProgressBar';
import { Card, Button, CardTitle, Input, CardBody, CardFooter } from 'reactstrap';
import { activitiesCardStatus, setActivitiesCardStatus, setActivityName } from '../redux/activities/activityActions'; 
import { calenderCardStatus, toggleCalenderCard } from '../redux/calender/calenderActions';

const HomeCard = (props) => {

  const {activity, calender, selectedActivity} = useSelector(state => state);
  const dispatch = useDispatch();
  const [activityText, setActivityText] = useState('');

  const handleActivityChange = (e) => {
    setActivityText(e.target.value);
  }

  const addActivity = (e) => {
    if(!activityText){
      alert("Please enter a reminder to proceed");
    } else {
      dispatch(setActivitiesCardStatus(false))
      dispatch(setActivityName(activityText));
      dispatch(toggleCalenderCard());
    }
  }

  return (
    <>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="homecard">
        <CardTitle style={{display: 'flex', alignItems: 'center'}}>
          <NameHeader />
        </CardTitle>
        <CardBody style={{ padding: '0' }}>
          <Input type="text" name="todoname" value={activityText} id="todoname" placeholder="Type a task name" onChange={handleActivityChange}/>
          <CircularProgressbar/>
        </CardBody>
        <CardFooter style={{display: 'flex'}}>
          <Button style={{flex: '3 0 auto'}} onClick={addActivity}>Add Time <MdMoreTime/></Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default HomeCard;