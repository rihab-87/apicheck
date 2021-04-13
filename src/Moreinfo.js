import React,{useState} from 'react';
import {Modal,Button} from 'react-bootstrap';
const Moreinfo = ({address,company}) => {
    
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    <Button variant="primary" onClick={handleShow}>
     MORE INFO
    </Button>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>MORE INFORMATIONS</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{display:"flex",flexDirection:"column"}}>
      <span> <h5>address:</h5> CITY:{address.city },GEO:lAT:{address.geo.lat},LNG:{address.geo.lng},STREET:{address.street },SUITE:{address.suite},ZIPCODE:{address.zipcode}</span>  
      
      
      
       <span> <h5>company:</h5> {company.name},BS:{company.bs},CATCHPHRASE:{company.catchPhrase}</span>



      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>


    );
}

export default Moreinfo;
