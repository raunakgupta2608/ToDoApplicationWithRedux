import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/CalenderComponent.css';

function CalenderComponent() {
  const [date, setDate] = useState(new Date());

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