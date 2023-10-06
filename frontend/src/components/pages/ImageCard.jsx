import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function ImageCard({ data }) {
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={`${process.env.REACT_APP_API_URL}/Images/${data.image}`} />
          <Card.Body>
            <Button variant="primary">Download</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default ImageCard;
