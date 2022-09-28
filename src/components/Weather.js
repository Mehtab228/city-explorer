import React from "react";

class Weather extends React.Component {
    render() {
        return(
            <div>
                <h3 className="text-center"> Weather Forecast</h3>
                {this.props.weatherData.map((v,i) => {
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