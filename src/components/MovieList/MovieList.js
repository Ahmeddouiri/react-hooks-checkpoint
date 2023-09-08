import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';

function MovieList() {
    const  movielistes=[
        {Title:"Iron Man",Year:"2008",rate:"3",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"},
        {Title:"Iron Man 3",Year:"2013",rate:"5",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"},
        {Title:"Spider-Man",Year:"2002",rate:"4",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"},
        {Title:"Iron Man 2",Year:"2010",rate:"4",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},
        {Title:"Spider-Man: No Way Home",Year:"2021",rate:"5",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"},
        {Title:"Man of Steel",Year:"2013",rate:"6",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg"},
        {Title:"Ant-Man",Year:"2015",rate:"7",description:"movie",posterURL:"https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg"},
        {Title:"Spider-Man: Homecoming",Year:"2017",rate:"5",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"},
        {Title:"Spider-Man 2",Year:"2004",rate:"4",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
        {Title:"The Amazing Spider-Man",Year:"2012",rate:"2",description:"movie",
        posterURL:'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg'},
    ];
 
    const [listofmovie, setListofmovie] = useState(movielistes);
    const [movietitle, setMovietitle] = useState("");
    const [movierate, setMovierate] = useState("");

    const [inputTile, setInputTile] = useState("");
    const [inputYear, setInputYear] = useState("");
    const [inputrate, setInputrate] = useState("");
    const [inputdescription, setInputdescription] = useState("");
    const [inputposterURL, setInputposterURL] = useState("");
    const addmovie = (Movie) => {
      setListofmovie([...listofmovie, Movie]);
    };
    const add = () =>{ addmovie({
      title : inputTile,
      Year : inputYear,
      rate : inputrate,
      description : inputdescription,
      posterURL : inputposterURL,
      
  })
  const AddToMovie = (listofmovie) => {
    setListofmovie([...listofmovie, addmovie]);
  };
}

 
        return (
    <>

    <Row className="justify-content-md-center">
          <Col md={{ span: 6, offset: 3 }}>
            <Form className="align-self-center  w-50 p-3 mt-5  ">
              <Card.Body>
                <Card.Title>Add Movie</Card.Title>
                <Form.Control onChange={(e) =>{ setInputTile(e.target.value)}} placeholder="Tile"/>
                <Form.Control onChange={(e) =>{ setInputYear(e.target.value)}} placeholder="Year "/>
                <Form.Control onChange={(e) =>{ setInputrate(e.target.value)}} placeholder="rate"/>
                <Form.Control onChange={(e) =>{ setInputdescription(e.target.value)}} placeholder="description"/>
                <Form.Control onChange={(e) =>{ setInputposterURL(e.target.value)}} placeholder="posterURL"/>
    <Button onClick={ () => add()} >Add</Button>
    </Card.Body>
    </Form>
    </Col>
    </Row>

<Row className="justify-content-md-center">
          <Col md={{ span: 6, offset: 3 }}>
            <Form className="align-self-center  w-50 p-3 mt-5  ">
              <Card.Body>
                <Card.Title>Search Fiter</Card.Title>
                <Form.Group className="mb-3">
                  <Form.Label>Search with Title</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      setMovietitle(e.target.value)
                    }
                    placeholder="Title"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Search By Rate </Form.Label>
                  <Form.Control
                    onChange={(event) =>
                      setMovierate(event.target.value )
                    }
                    placeholder="Rate"
                  />
                </Form.Group>

              </Card.Body>
            </Form>
          </Col>
        </Row>

            <Container>
            <Card.Body>
              <Card.Title className="mb-3 align-self-start" ><h2>Results</h2></Card.Title>
              <Row md={4}>
              {/* .toLowerCase() */}
                {listofmovie.filter(
                  (moviel) =>
                    moviel.Title
                      
                      .includes(movietitle) &&
                    moviel.rate
                
                      .includes(movierate)
                ).map((movie,key) => (
                    <MovieCard
                        key={key}
                        Title={movie.Title}
                        Year={movie.Year}
                        rate={movie.rate}
                        description={movie.description}
                        posterURL={movie.posterURL}
                       />
                   
                  ))}
              </Row>
            </Card.Body>
          </Container>
                    
           </>     
        )
                    }

export default MovieList