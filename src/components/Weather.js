import React from "react";
import './app.css'

class Weather extends React.Component {
    render() {
        return(
            <div className="weather">
                <h3 className="text-center"> Weather Forecast</h3>
                {this.props.weather.map((v,i) => {
                    return (
                        <div key={i}>
                            <h5>{v.date}</h5>
                            <p>{v.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Weather;