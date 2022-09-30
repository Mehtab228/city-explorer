import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './app.css'


class CityCard extends React.Component {
    render() {
        return (
            <>
                <Card style={{ width: '20rem' }} className="card2 mb-5">
                    <Card.Img src={this.props.cityMap_id} variant="top" />
                    <Card.Body>
                        <Card.Title>{this.props.location_id.display_name}</Card.Title>
                        <Card.Text>
                            The latitude is: {this.props.location_id.lat}
                            The longitude is: {this.props.location_id.lat}
                        </Card.Text>
                        <Button variant="dark">Find out More</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default CityCard;