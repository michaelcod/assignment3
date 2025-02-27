import { Container, Row, Col } from "react-bootstrap";

export default function MovieDetails(props) {
  return (
    <Container>
      <Row>
        {props.movie.poster ? (
          <Col md>
            <img src={props.movie.poster} className="w-100" />
          </Col>
        ) : (
          ""
        )}
        <Col md>
          <strong>Directed By: </strong>
          {props.movie.directors ? props.movie.directors.join(", ") : "N/A"}
          <br />
          <br />
          <p>{props.movie.fullplot}</p>
          <strong>Cast: </strong>
          {props.movie.cast ? props.movie.cast.join(", ") : "N/A"}
          <br />
          <br />
          <strong>Awards: </strong>
          {props.movie.awards.text}
          <br />
          <strong>IMDB Rating: </strong> {props.movie.imdb.rating} (
          {props.movie.imdb.votes} votes)
        </Col>
      </Row>
    </Container>
  );
}
