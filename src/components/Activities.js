import React from 'react';
import { ListGroup, ListGroupItem, CardBody, CardTitle, Card, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import NameHeader from './NameHeader';
import '../css/Activities.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectedActivity } from './../redux/selectedActivity/selectedActivityAction';

const Activities = () => {
    const {activity, calender} = useSelector(state => state);
    const dispatch = useDispatch();

    const setSelectedActivity = (e) => {        
        const task = calender.calender.filter(el => {
            return el.activityName === e.target.name;
        })
        dispatch(selectedActivity(task))
    }

    return (
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle style={{display: 'flex', alignItems: 'center'}}>
            <NameHeader />
        </CardTitle>
        <CardBody className='activitiesCardBody'>
            <ListGroup flush>
                <ListGroupItem>
                    <ListGroupItemHeading style={{display: 'flex', alignItems: 'center'}}>
                        <span>Today's Activity</span>
                        <span><hr/></span>
                    </ListGroupItemHeading>
                    {
                        calender.calender.map((ele, index) => {
                            if(ele.calenderDate == new Date().toJSON().slice(0,10).split('-').reverse().join('/')) {
                                return (
                                <ListGroupItem tag="a" href="#" key={index} onClick={setSelectedActivity}
                                    name={ele.activityName}>
                                { ele.activityName }
                                </ListGroupItem>
                                )
                            }
                        })
                    }
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading style={{display: 'flex', alignItems: 'center'}}>
                        <span>Tasks</span>
                        <span><hr/></span>
                    </ListGroupItemHeading>
                    {
                        calender.calender.map((ele, index) => {
                            if(ele.calenderDate !== new Date().toJSON().slice(0,10).split('-').reverse().join('/')) {
                                return (
                                <ListGroupItem tag="a" href="#" key={index} onClick={setSelectedActivity}
                                    name={ele.activityName}>
                                { ele.activityName }
                                </ListGroupItem>
                                )
                            }
                        })
                    }
                </ListGroupItem>
            </ListGroup>
        </CardBody>
      </Card>
    )
}

export default Activities;