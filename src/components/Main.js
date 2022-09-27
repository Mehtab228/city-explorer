import React from 'react';
import axios from 'axios';
import './app.css'
import CityRender from './CityRender';
import CityCard from './CityCard';
import Alert from 'react-bootstrap/Alert';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            location: {},
            error: false,
            errorMessage: '',
            cityMap: {},
        }
    }

    handleInput = (event) => {
        event.preventDefault();
        this.setState({ searchQuery: event.target.value });
        console.log(this.state.searchQuery);
    }

    handleSearch = async (event) => {
        event.preventDefault();
        try {
            const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
            const response = await axios.get(API);
            console.log(response.data[0]);
            this.setState({ location: response.data[0] });
            this.setState({ cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=12` })
            this.setState({errorMessage: false})
        } catch (error) {
            this.setState({ error: true });
            this.setState({ errorMessage: error.message });
            this.setState({location: {}})
        }

    }
    render() {
        return (
            <>
                <CityRender 
                handleInput={this.handleInput} 
                handleSearch={this.handleSearch} 
                />
                {this.state.location.lat &&
                <CityCard
                cityMap_id={this.state.cityMap} 
                location_id={this.state.location}
                />
                }
                 {this.state.errorMessage &&
                     <Alert key='danger' variant='danger'>
                     {this.state.errorMessage}
                    </Alert>
                 }
            </>
        )
    }
}

export default Main;