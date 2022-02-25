import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/CalenderComponent.css';

function CalenderComponent(props) {
  const {date, setDate} = props;

  const handleDateChange = (newDate) => {
    setDate(newDate);
  }
  return (
    <>
      <Calendar onChange={handleDateChange} value={date} 
        minDate={new Date()}
      />
    </>
  );
}

export default CalenderComponent;