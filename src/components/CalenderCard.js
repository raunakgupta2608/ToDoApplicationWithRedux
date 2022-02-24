import React, { useState }  from 'react';
import { Card, Button, CardHeader, Input, CardBody, CardFooter } from 'reactstrap';
import '../css/CalenderCard.css';
import CalenderComponent from './CalenderComponent';

const CalenderCard = (props) => {

// const { modalStatus, setModalStatus } = useContext(CalenderContext);
// const toggle = () => setModalStatus(!modalStatus);
  const [time, setTime] = useState('00:00');

  const handleTimeChange = (e) => {
    setTime(e.target.value);
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
          <CalenderComponent/>
        </CardBody>
        <CardFooter className='calenderCardFooter'>
          <Button className='btn btn-success'>Set Date</Button>
          <Button className='btn btn-danger'>X</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CalenderCard;
