import React from 'react'
import MovieCard from '../MovieCard/MovieCard';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function MovieList() {
    const  movielistes=[
        {Title:"Iron Man",Year:"2008",rate:"6/10",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"},
        {Title:"Iron Man 3",Year:"2013",rate:"7/10",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"},
        {Title:"Spider-Man",Year:"2002",rate:"6/10",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"},
        {Title:"Iron Man 2",Year:"2010",rate:"6.5/10",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},
        {Title:"Spider-Man: No Way Home",Year:"2021",rate:"tt10872600",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"},
        {Title:"Man of Steel",Year:"2013",rate:"7.4/10",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg"},
        {Title:"Ant-Man",Year:"2015",rate:"6/10",description:"movie",posterURL:"https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg"},
        {Title:"Spider-Man: Homecoming",Year:"2017",rate:"7/10",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"},
        {Title:"Spider-Man 2",Year:"2004",rate:"7/10",description:"movie",
        posterURL:"https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
        {Title:"The Amazing Spider-Man",Year:"2012",rate:"7.6/10",description:"movie",
        posterURL:'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg'},
    ];
 
        return (
    <>
            <Container>
            <Card.Body>
              <Card.Title className="mb-3 align-self-start" ><h2>Results</h2></Card.Title>
              <Row md={4}>
                {movielistes.map((movie,key) => (
                    <MovieCard
                        key={key}
                        Title={movie.Title}
                        Year={movie.race}
                        rate={movie.rate}
                        description={movie.location}
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