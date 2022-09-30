import React from 'react';
import axios from 'axios';
import './app.css'
import CityRender from './CityRender';
import CityCard from './CityCard';
import Weather from "./Weather";
import Alert from 'react-bootstrap/Alert';
import MoviesRender from './MoviesRender';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            location: {},
            error: false,
            errorMessage: '',
            cityMap: {},
            weather: [],
            movie: [],
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
            this.setState({ cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=14` })
            this.setState({errorMessage: false})
        } catch (error) {
            this.setState({ error: true });
            this.setState({ errorMessage: error.message });
            this.setState({location: {}})
        }
        try {
            const API = process.env.REACT_APP_API_URL;
            const url = `${API}/weather?searchQuery=${this.state.searchQuery}`;
            const response = await axios.get(url);
            console.log(response.data)
            this.setState({weather: response.data})
        } catch (error) {
            this.setState({error: true})
            this.setState({ errorMessage: error.message });
            this.setState({weather: []})
        }
        try {
            const API = process.env.REACT_APP_API_URL;
            const url = `${API}/movies?searchQuery=${this.state.searchQuery}`;
            console.log('url', url);
            const response = await axios.get(url);
            console.log('response.data', response.data);
            this.setState({movie: response.data})
        } catch (error) {
            this.setState({error: true})
            this.setState({ errorMessage: error.message });
            this.setState({movie: []})
        }

    }
    render() {
        console.log('this.state.movie', this.state.movie)
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
                {this.state.weather && 
                <>
                <Weather weather={this.state.weather}/>
                </>}
                {this.state.movie &&
                <MoviesRender movie={this.state.movie} />}
            </>
        )
    }
}

export default Main;