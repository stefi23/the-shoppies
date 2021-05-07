import React from "react"
import MovieCard from "./MovieCard"

function MovieGrid({title, movies, nominatedMovies, buttonEvent, buttonTitle}) {
    return (
        <>
        <h2 className="movie-grid-title">{buttonTitle === "Nominations" ? `${nominatedMovies.length}/5 ${title}`: `${title}` }</h2>
        <div className="movie-grid">
         {movies.map((movie, index) => (
                    <MovieCard 
                        key={index} 
                        index={index} movie={movie} 
                        nominatedMovies={nominatedMovies} 
                        buttonEvent={buttonEvent} 
                        buttonTitle={buttonTitle}/>                 
                    
                  ))}
        </div>
        </>
    )
}

export default MovieGrid 