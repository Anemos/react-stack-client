// Modal state in MovieTable
import React, { useState } from "react";
import { Table, NavLink, Image, Jumbotron, Container, Row, Col } from "react-bootstrap";
import ModalOverview from "./ModalOverview";
 
const MovieTable = props => {
 const [modalShow, setModalShow] = useState(false);
 let keys = ["뉴스제목", "세부정보"];
 const { movies } = props;
 
 return (
   <div style={{ width: "100%", margin: "0 auto" }}>
     <h3 style={{textAlign: "center", margin: "10px auto auto"}}> 헤드라인 뉴스 - { new Date(Date.now()).toLocaleDateString()}</h3>
     <Table
       variant="default"
       style={{ width: "100%", margin: "5px auto" }}
       striped
       bordered
       responsive
       size="sm"
     >
 
       <thead>
         <tr>
           {keys.map(heading => {
             return <th key={heading}>{heading}</th>;
           })}
         </tr>
       </thead>
       <tbody>
         {movies.map(movie => {
           return (
             <tr key={movie.id}>
               <td>
               
 <Container>
  <Row xs={2} md={12} lg={12}>
    <Col xs={2} md={2}>
      <Image src={movie.news_photo_src} thumbnail />
    </Col>
    <Col xs={10} md={10}>
      {movie.news_title}
      <br/>
      {movie.news_url}
    </Col>
  </Row>
</Container>

               </td>
               <td>
                 <NavLink
                   value={movie.id}
                   onClick={() => {
                     setModalShow(movie.id);
                   }}
                 >Details
                 </NavLink>
                 <ModalOverview
                   movie={movie}
                   show={modalShow === movie.id}
                   onHide={() => setModalShow(false)}
                 />
               </td>
             </tr>
           );
         })}
       </tbody>
     </Table>
   </div>
 );
};
 
export default MovieTable;