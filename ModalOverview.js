import React from "react";
import { Modal, Image } from "react-bootstrap";
 
const ModalOverview = props => {
 return (
   <Modal
     {...props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header>
       <Image fluid src={`https://i.imgur.com/TkIrScD.png`} alt={props.movie.news_gubun} />
     </Modal.Header>
     <Modal.Body>
       <Modal.Title id="contained-modal-title-vcenter">
         {props.movie.news_title} <span style={{fontSize: "1rem", fontStyle: "italic"}}>{new Date(props.movie.crt_date).toLocaleDateString()}</span>
       </Modal.Title>
       <p>{props.movie.news_url}</p>
       <p> Popularity: {props.movie.news_gubun} </p>
       <p> Votes: {props.movie.news_rank}</p>
     </Modal.Body>
   </Modal>
 );
};
 
export default ModalOverview;