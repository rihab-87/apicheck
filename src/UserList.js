import React from 'react';
import User from './User';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
const UserList = ({data}) => {
    return (
        <Container>
            <Row>
             {data && data.map((el)=> <Col lg="4"><User el= {el}/></Col>) }
             </Row>
        </Container>
    );
}

export default UserList;
