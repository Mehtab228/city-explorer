import React from "react";
import './app.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

class Weather extends React.Component {
    render() {
        return (
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>16-Day Weather Forecast</Accordion.Header>
                    <Accordion.Body className="bg-dark">
                        <Container>
                                <Col>
                            <Row>
                    {this.props.weather.map((v,i) => (
                        <Card className="card1 my-auto mb-3 me-4 mt-5 bg-warning" style={{ width: '12rem' }} key={i}>
                            <Card.Body>
                                <div>
                                    <div>
                                        <Card.Title><h5>{v.date}</h5></Card.Title>
                                        <Card.Text>
                                            <p>{v.description}</p>
                                        </Card.Text>
                                    </div>
                                </div>
                            </Card.Body>
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

export default Weather;

