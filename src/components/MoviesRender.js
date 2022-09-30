import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

class MoviesRender extends React.Component {
    render() {
        return (
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Assosiated Movies</Accordion.Header>
                    <Accordion.Body className="bg-dark">
                        <Container>
                            <Col>
                                <Row>
                                    {this.props.movie.map((v, i) => (
                                        <Card className="card1  my-auto mb-3 me-4 mt-5 bg-secondary" style={{ width: '20rem' }} key={i}>
                                            <Card.Img variant="top" src={v.image_url} />
                                            <Card.Body>
                                                <div>
                                                    <div>
                                                        <Card.Title><h5>{v.title}</h5></Card.Title>
                                                        <Card.Text>
                                                            <p>{v.overview}</p>
                                                        </Card.Text>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush mb-3 bg-secondary">
                                                <ListGroup.Item>Average Votes: {v.average_votes}</ListGroup.Item>
                                                <ListGroup.Item>Total Votes: {v.total_votes}</ListGroup.Item>
                                                <ListGroup.Item>Popularity: {v.popularity}</ListGroup.Item>
                                                <ListGroup.Item>Date Released: {v.released_on}</ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    ))}
                                </Row>
                            </Col>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    }
}

export default MoviesRender;
