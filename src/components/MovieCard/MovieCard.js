import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

function MovieCard({Title,Year,posterURL,description,rate}) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
      <Card.Title>{Title}</Card.Title>

          <Card.Img variant="top" src={posterURL} />
          <Card.Body>
            <Card.Text>
              <h5>Year:</h5> <p>{Year}</p>
              <h5>description:</h5> <p>{description}</p>
              <h5>rate:</h5> <p>{rate}</p>
            </Card.Text>
           
          </Card.Body>
        </Card>

    </>
  )
}

export default MovieCard