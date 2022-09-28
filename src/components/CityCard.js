import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Weather from "./Weather";
import './app.css'


class CityCard extends React.Component {
    render() {
        return (
            <>
                <Card  style={{ width: '22rem' }} className="card2">
                    <Card.Img src={this.props.cityMap_id} variant="top" />
                    <Card.Body>
                        <Card.Title>{this.props.location_id.display_name}</Card.Title>
                        <Card.Text>
                            The latitude is: {this.props.location_id.lat}
                            The longitude is: {this.props.location_id.lat}
                            <Weather weatherData= {this.props.weatherData}/>
                        </Card.Text>
                        <Button variant="dark">Find out More</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default CityCard;