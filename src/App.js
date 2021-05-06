import React, { useState, useEffect } from "react";
import './App.css';
import env from "react-dotenv";

const apiKey = env.API_KEY;

const App = () => {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [nominatedMovies, setNominatedMovies] = useState([])
  const [areNominationsSet, setareNominationsSet ] = useState(false)
  const [resultError, setResultError] = useState(false)
  const [apiErrorMessage, setApiErrorMessage] = useState("")

  
useEffect(() => {
   setareNominationsSet(currentState => nominatedMovies.length === 5)
  }, [nominatedMovies]);


  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}&type=movie`

      try {
        const res = await fetch(url);
        const data = await res.json();
        if(data.Response === "True") {
          setMovies(data.Search);
        }else {
          setResultError(true)
          setApiErrorMessage(data.Error)
        }
      } catch (err) {
        console.error(err);
      }

  };


  const addNomination = (index, e) => {
    setNominatedMovies(nominatedMovies => [...nominatedMovies, movies[index]])
  }
  
  const removeNomination = (i, e) => {
     setNominatedMovies(currentNominations => currentNominations.filter((item, index) => index !== i));

  }

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <form className="form" onSubmit={searchMovies}>
      <input
          type="text"
          disabled = {areNominationsSet}
          name="query"
          placeholder=""
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === "Backspace" ? setMovies(() => []) : null }
        />
        <button type="submit" disabled = {areNominationsSet}>Search</button>
        </form>
      
      { areNominationsSet ? 
        <>
          <div>YAY! You have nominated 5 films. </div> 
              <div>
                  {nominatedMovies.length > 0 ? 
                  <>
                  <h2>Nominations</h2>
                  <ol>
                    {nominatedMovies.map((nominatedMovie, index) => (
                      <div key={index}>
                      <li>{nominatedMovie.Title} {nominatedMovie.Year}</li> 
                      <button 
                        onClick={e => removeNomination(index, e)}
          
                      >Remove</button>
                      </div>
                    ))}
                  </ol> 
                  </>
                  : null}
            </div>
          </>
          :
            <>
            { resultError ?  <div>{apiErrorMessage}</div> :
            <>
            
            <div>
              {movies?.length > 0 ?
              <>
              <h2>Results</h2>
                <ol>
                  {movies.map((movie, index) => (
                    <div key={index}>
                    <li>{movie.Title} {movie.Year}</li> 
                    <button 
                      onClick={e => addNomination(index, e)}
                      disabled = {nominatedMovies.find(result => result.Title === movie.Title)}
                    >Nominate</button>
                    </div>
                  ))}
                </ol></> : null}
                
                </div>
                </>
               }
           
            <div>
                {nominatedMovies.length > 0 ? 
                <>
                 <h2>Nominations</h2>
                <ol>
                  {nominatedMovies.map((nominatedMovie, index) => (
                    <div key={index}>
                    <li>{nominatedMovie.Title} {nominatedMovie.Year}</li> 
                    <button 
                      onClick={e => removeNomination(index, e)}
        
                    >Remove</button>
                    </div>
                  ))}
                </ol> 
                </> 
                : null}
          </div>
            </>
      }
    </div>
  );
}

export default App;
