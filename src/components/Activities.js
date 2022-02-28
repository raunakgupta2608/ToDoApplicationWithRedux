import React, { useEffect } from 'react';
import { ListGroup, ListGroupItem, CardBody, CardTitle, Card, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import NameHeader from './NameHeader';
import '../css/Activities.css';
import { useSelector, useDispatch } from 'react-redux';

const Activities = () => {
    const {activity, calender} = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(activity, calender);

    useEffect(() => {
        console.log(calender);
    }, [calender]);

    return (
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle style={{display: 'flex', alignItems: 'center'}}>
            <NameHeader />
        </CardTitle>
        <CardBody className='activitiesCardBody'>
            <ListGroup flush>
                {/* <ListGroupItem>
                    <ListGroupItemHeading style={{display: 'flex', alignItems: 'center'}}>
                        <span>Today's Activity</span>
                        <span><hr/></span>
                    </ListGroupItemHeading>
                    <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                </ListGroupItem> */}
                <ListGroupItem>
                    <ListGroupItemHeading style={{display: 'flex', alignItems: 'center'}}>
                        <span>Tasks</span>
                        <span><hr/></span>
                    </ListGroupItemHeading>
                    <ListGroupItem tag="a" href="#">{ activity.activityName }</ListGroupItem>
                </ListGroupItem>
            </ListGroup>
        </CardBody>
      </Card>
    )
}

export default Activities;