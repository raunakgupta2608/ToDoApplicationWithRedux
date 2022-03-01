import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector, useDispatch } from 'react-redux';

function CircularProgressBar() {
    const {activity, calender, selectedActivity} = useSelector(state => state);
    const dispatch = useDispatch();
    const percentage = "0";

    const checkTodaysActivity = () => {
        const todaysDate = new Date().toJSON().slice(0,10).split('-').reverse().join('/');
        if(todaysDate === selectedActivity[0]?.calenderDate) {
            return true;
        }
        else {
            return false;
        }
    }

    const computePrecentage = () => {
        const timeOfActivity = selectedActivity[0].calenderTime.split(':')[0];
        const p = (100*timeOfActivity)/24;
        return p;
    }

  return (
    <div style={{ width: 'fit-content', height: 'fit-content', margin: '5%' }}>
        <CircularProgressbar
            value={checkTodaysActivity() ? computePrecentage() : percentage}
            text={selectedActivity[0] ? `${selectedActivity[0].calenderTime}` : '00.00'}
            strokeWidth = "1"
            styles={buildStyles({

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
                
                // Text size
                textSize: '10px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                pathTransition: 'none',

                // Colors
                // pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                pathColor: `red`,
                textColor: '#d6d6d6',
                trailColor: '#d6d6d6'
                // backgroundColor: '#3e98c7',
            })}
        />
    </div>
    )
}

export default CircularProgressBar