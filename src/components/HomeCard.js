import React, { createContext, useState } from 'react';
import '../css/HomeCard.css';
import { Card, Button, CardTitle, Input, CardBody, CardFooter } from 'reactstrap';
import CircularProgressbar from '../components/CircularProgressBar';
import { MdMoreTime } from "react-icons/md";
import NameHeader from './NameHeader';

import { useSelector } from 'react-redux';

export const CalenderContext = createContext({
  modalStatus: false,
  setModalStatus: (m) => {
    console.log(m);
  }
});

const HomeCard = (props) => {

  const x = useSelector(state => state);
  // console.log(x);
  const [reminderText, setReminderText] = useState('');

  const handleReminderChange = (e) => {
    setReminderText(e.target.value);
  }

  const addTime = (e) => {
    if(!reminderText){
      alert("Please enter a reminder to proceed");
    } else {
      console.log(reminderText)
    }
  }

  return (
    <>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="homecard">
        <CardTitle style={{display: 'flex', alignItems: 'center'}}>
          <NameHeader />
        </CardTitle>
        <CardBody style={{ padding: '0' }}>
          <Input type="text" name="todoname" value={reminderText} id="todoname" placeholder="Enter a Reminder" onChange={handleReminderChange}/>
          <CircularProgressbar/>
        </CardBody>
        <CardFooter style={{display: 'flex'}}>
          <Button style={{flex: '3 0 auto'}} onClick={addTime}>Add Time <MdMoreTime/></Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default HomeCard;