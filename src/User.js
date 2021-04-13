import {Card,Button} from 'react-bootstrap';
import React from 'react'
import Moreinfo from './Moreinfo';

export default function User({el}) {
    return (
        <div>
            <Card style={{ width: "280px" ,height:"500px",marginTop:"20px",marginBottom:"10px"}}>
  <Card.Img variant="top" style={{width:"260px",height:"260px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA29za2oYfB6YlZLiz_E8tShFpXXE1vliCbkmPfxufNh2O4CvZk1GSnb9zChJ7qVc2LGU&usqp=CAU" />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text style={{display:"flex",flexDirection:"column"}}>
      <span style={{display:"flex",justifyContent:"center"}} ><h6>Username:</h6> {el.username}</span>
      <span style={{display:"flex",justifyContent:"center"}} > <h6>email:</h6>{el.email}</span>
      <span style={{display:"flex",justifyContent:"center"}} > <h6>website:</h6>{el.website}</span>
      <span style={{display:"flex",justifyContent:"center"}} > <h6>phone:</h6>{el.phone}</span> 
    </Card.Text>
    <Moreinfo address={el.address} company={el.company}/>
  </Card.Body>
</Card>
        </div>
    )
}
