import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CityRender extends React.Component {
    render() {
        return (
            <>
             <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter your City:</Form.Label>
                        <Form.Control onChange={this.props.handleInput} type="value" placeholder="Enter City" />
                    </Form.Group>
                    <Button onClick={this.props.handleSearch} variant="primary" type="submit">
                        Submit City
                    </Button>
                </Form>
            </>
        )
    }
}

export default CityRender;