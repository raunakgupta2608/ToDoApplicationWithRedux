import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar() {
const percentage = "66";
  return (
    <div style={{ width: 250, height: 250, margin:"12% 20%" }}>
        <CircularProgressbar
            value={percentage}
            text={`00:00`}
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