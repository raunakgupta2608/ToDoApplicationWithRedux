import '../css/CalenderCard.css';
import React, { useState }  from 'react';
import { Card, Button, CardHeader, Input, CardBody, CardFooter } from 'reactstrap';
import CalenderComponent from './CalenderComponent';
import { useSelector, useDispatch } from 'react-redux';
import { updateDateAndTime, toggleCalenderCard } from './../redux/calender/calenderActions';
import store from '../redux/store'

const CalenderCard = () => {

  const dispatch = useDispatch();
  const [time, setTime] = useState('00:00');
  const [date, setDate] = useState(new Date());
  const {activity} = useSelector(state => state);

  // store.subscribe(() => {
  //   console.log(store.getState());
  // })
  
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const closeCalenderCard = () => {
    dispatch(toggleCalenderCard());
  }

  const handleDateAndTime = () => {
    const obj = {
      date: date.toJSON().slice(0,10).split('-').reverse().join('/'),
      time: time,
      activityName: activity.activityName
    }
    dispatch(updateDateAndTime(obj));
  }

  return (
    <>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="calenderCard">
        <CardHeader>
          <div>
          <Input type="time" name="time" value={time} id="time"  onChange={handleTimeChange}/>
          </div>
        </CardHeader>
        <CardBody>
          <CalenderComponent setDate={setDate} date={date}/>
        </CardBody>
        <CardFooter className='calenderCardFooter'>
          <Button className='btn btn-success' onClick={handleDateAndTime}>Set Date</Button>
          <Button className='btn btn-danger' onClick={closeCalenderCard}>X</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CalenderCard;
