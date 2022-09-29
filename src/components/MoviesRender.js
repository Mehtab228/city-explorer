import React from "react";

class MoviesRender extends React.Component {
    render() {
        return(
            <div className="weather">
                <h3 className="text-center"> Movies</h3>
                {this.props.movie.map((v,i) => {
                    return (
                        <div key={i}>
                            <h5>{v.title}</h5>
                            <p>Overview: {v.overview}</p>
                            <p>Average Votes: {v.average_votes}</p>
                            <p>Total Votes: {v.total_votes}</p>
                            <p><img src={v.image_url} alt="movie poster"/></p>
                            <p>Popularity: {v.popularity}</p>
                            <p>Date Released: {v.released_on}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MoviesRender;