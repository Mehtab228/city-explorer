import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class CityCard extends React.Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img src={this.props.cityMap_id} variant="top" />
                    <Card.Body>
                        <Card.Title>{this.props.location_id.display_name}</Card.Title>
                        <Card.Text>
                            The latitude is: {this.props.location_id.lat}
                            The longitude is: {this.props.location_id.lat}
                        </Card.Text>
                        <Button variant="primary">Find out More</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default CityCard;