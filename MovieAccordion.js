import React from 'react';
import { Accordion, Card, Image, Container, Row, Col, Badge } from "react-bootstrap";

const MovieAccordion = props => {
 const { movies } = props;
 const style = {
    color: "red",
    fontSize: 10,
    border: "1px solid green"
    };
 return (
    <div style={{ width: "100%", margin: "0 auto" }}>
     <h3 style={{textAlign: "center", margin: "10px auto auto"}}> Hot 뉴스 TOP5 </h3>
     
     <Accordion style={{width: "100%", margin: "0px auto 40px", cursor: "pointer"}}>
       {
         movies.map(item => {
           return (
             <Card key={item.id}>
               <Accordion.Toggle as={Card.Header} eventKey={item.id}>
<Container>
  <Row className="align-items-center">
    <Col xs={2} md={2} lg={2}>
<Image src={item.news_photo_src} className="thumbnail" thumbnail />
    </Col>
    <Col xs={10} md={10} lg={10}>
      <Badge pill variant="light">{item.sum_count}</Badge>{' '}{item.news_title}
    </Col>
  </Row>
</Container>
               </Accordion.Toggle>
               <Accordion.Collapse eventKey={item.id}>
                 <Card.Body>
                 <Image fluid src={item.news_photo_src} alt={item.news_title} />
                  <Card.Title>{item.news_title}</Card.Title>
      <div>
        <Badge pill variant="primary">댓글수: {item.simplecnt}</Badge>{' '}
        <Badge pill variant="secondary">좋아요: {item.good}</Badge>{' '}
        <Badge pill variant="success">훈훈해요: {item.warm}</Badge>{' '}
        <Badge pill variant="danger">슬퍼요: {item.sad}</Badge>{' '}
        <Badge pill variant="warning">화나요: {item.angry}</Badge>{' '}
        <Badge pill variant="info">후속기사 원해요: {item.want}</Badge>
      </div>
                  <p style={{fontSize: ".8rem", fontStyle: "italic"}}>Release Date: {new Date(item.crt_date).toLocaleDateString()}</p>
                  <Card.Link href={item.news_url}>News Link</Card.Link>
                 </Card.Body>
               </Accordion.Collapse>
             </Card>
           )
         })
       }
     </Accordion>
  </div>
   );
}
 
export default MovieAccordion;