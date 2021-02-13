
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Row, Form ,Modal} from "react-bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function OneFacility(props) {
   const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const [Facility, setFacility] = useState({});
  const [selectFacility, setSelectFacility] = useState(props.selectFacility);

  const { name ,images , location, description , city , price ,type , appointment} = selectFacility;
 
 const onChange = date =>{setDate(date)};
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
  useEffect(() => {

    if (!city) {
      axios.get(`api/facility/facilities/?=${id}`)
      .then(res => {
        console.log( "from one facility" + res.data);
         let facility = res.data.find((ele) => ele._id == id);
         setSelectFacility(Facility);
      })
   }
      
  }, []);

 

     
 
  
let arrayOfImages = ["http://static.holdinn.net/uploadfiles/40/madakhil-camp-115683.jpg","https://www.visitsaudi.com/content/dam/no-dynamic-media-folder/manifest-newarticles-batch2/a-guide-to-al-ula/guide_to_al_ula_horiz_article_4.jpg" ,"https://sahary-al-ola-camp-villa.hotels-saudi-arabia.com/data/Photos/767x460/10098/1009837/1009837849.JPEG"]
  
    
  return (
  
     
     <div className="OneFacility" > 
      <Container className="mt-5 ">
        <Row style={{marginBottom: "500px"}}>
  
        <Col col-md-3>
            
            <Row><img className="smallIMG"  src="https://pbs.twimg.com/media/C066sxKXEAAUV2t.jpg" alt="" srcset="" /></Row>
            <Row><img className="smallIMG"  src="https://pbs.twimg.com/media/C066sxKXEAAUV2t.jpg" alt="" srcset="" /></Row>
            <Row><img className="smallIMG"  src="https://pbs.twimg.com/media/C066sxKXEAAUV2t.jpg" alt="" srcset="" /></Row>
          </Col>

          {/* main image */}
    
          <Col col-md-6>
            <img className="mainIMG" width="100%" src="https://pbs.twimg.com/media/C066sxKXEAAUV2t.jpg" alt="" srcset="" />
          </Col> 


          {/* facility details */}
          <Col col-md-3>
            <h1> name: {name} </h1>
            <p>type: {type} </p>
            <p> descreption: {description} </p>
            <p>City: {city}</p>
            <p>location:<a href="#"> {location}</a></p>
            <p>Price: {price} SR</p>

     
            <button onClick={handleShow}>Book</button>


            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
       
        <Calendar onChange={onChange} value={date}/>
           
           <p>  {date.toString()} </p> 


        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
         </Button>
          
        </Modal.Footer>
      </Modal>

         
          </Col>

          
        </Row>
      </Container>


    </div>
  );
}