import React from "react"

function MovieCard({movie, buttonEvent, index, nominatedMovies, buttonTitle}) {
    return (
        <div className="movie-card-container">
            <div className="movie-card-container__info"> 
                {buttonTitle !== "Nominate" ? 
                    <p className="movie-card-container__info-count">{index + 1}.</p>
                    : null }
                <img className="movie-card-container__info__image" src={movie.Poster} alt={`Poster of ${movie.Title}`}/>
            </div>
            <div className="movie-card-container__body">
                <div className="movie-card-container__text">
                    <h3 className="movie-card-container__text__title">{movie.Title}</h3> 
                    <p>- {movie.Year} -</p>
                </div>
                <button className="movie-card-container__text__button"
                        onClick={e => buttonEvent(index, e)}
                        disabled = {buttonTitle === "Nominate" ? nominatedMovies.find(result => result.Title === movie.Title) : false}
                    >
                    {buttonTitle}
                </button>
            </div> 
        </div>
    )
}

export default MovieCard 