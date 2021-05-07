import React, { useState, useEffect } from "react";
import './App.css';
import env from "react-dotenv";
// import MovieCard from "./components/MovieCard"
import MovieGrid from "./components/MovieGrid"

const apiKey = env.API_KEY;

const App = () => {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [nominatedMovies, setNominatedMovies] = useState([])
  const [areNominationsSet, setareNominationsSet ] = useState(false)
  const [resultError, setResultError] = useState(false)
  const [apiErrorMessage, setApiErrorMessage] = useState("")
  const [apiWarningMessage, setApiWarningMessage] = useState("")
  

useEffect(() => {
  const json = localStorage.getItem("nominatedMovies");
  const savedNominations = JSON.parse(json);
  if (savedNominations) {
    setNominatedMovies(savedNominations);
  }
}, []);
  
useEffect(() => {
   setareNominationsSet(currentState => nominatedMovies.length === 5)
   const json = JSON.stringify(nominatedMovies);
  localStorage.setItem("nominatedMovies", json);
  }, [nominatedMovies]);


  const searchMovies = async (e) => {
    e.preventDefault();
    setApiWarningMessage("")
    setApiErrorMessage("")
  
    setResultError(false)
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}&type=movie`

      try {
        const res = await fetch(url);
        const data = await res.json();
        if(data.Response === "True") {
        const movies = [...new Map(data.Search.slice(0, 5).map(item => [item["imdbID"], item])).values()]
          setMovies( [...movies])
          setQuery("");
        } else {
          setResultError(true)
          if(data.Error === "Too many results.") {
            setApiWarningMessage(data.Error)
          } else if(data.Error  === "Movie not found!"){
            setApiErrorMessage(data.Error)
          }
        }
      } catch (err) {
        console.error(err);
      }

  };

  const addNomination = (index, e) => {
    setNominatedMovies(nominatedMovies => [...nominatedMovies, movies[index]])
    setMovies(() => [])
  }
  
  const removeNomination = (i, e) => {
     setNominatedMovies(currentNominations => currentNominations.filter((item, index) => index !== i));

  }

  return (
    <div className="App wrapper">
      <h1 className="wrapper__title">The Shoppies</h1>
      <p className="wrapper__text">Time to choose your 5 favorite movies for the Shoppies nominations 🍿</p>
      <form className="form wrapper__form" onSubmit={searchMovies}>
      <input
          type="text"
          disabled = {areNominationsSet}
          autocomplete="off"
          className="form wrapper__form__input"
          name="query"
          placeholder=""
          value={query}
          onChange={e => setQuery(e.target.value)}
          // onKeyDown={e => e.key === "Backspace" ? setMovies(() => []) : null }
        />
        <button className="search-button" type="submit" disabled = {areNominationsSet || query === ""}>Search</button>
        </form>
      
      { areNominationsSet ? 
      
      <div className="wrapper__success-message">🎥 You have nominated 5 films. 🏆</div> 
          
          : null }
          
         { resultError && apiWarningMessage ?  
              <div className="wrapper__warning-message">⚠️ {apiWarningMessage} Try to narrow done your search by using more characters.</div>  
              
              : resultError && apiErrorMessage ? 
              <div className="wrapper__error-message">❗ We're sorry. {apiErrorMessage}</div>  :
             
              <div>
                {!areNominationsSet && movies?.length > 0 ?
                
                  <MovieGrid 
                      title="Search results:" 
                      movies={movies} 
                      nominatedMovies={nominatedMovies} 
                      buttonEvent={addNomination} 
                      buttonTitle="Nominate"
                  />             
                : null}
                  
              </div>
             
               }
       
            <div>
                {nominatedMovies.length > 0 ? 
                  <MovieGrid 
                    title="Nominations" 
                    movies={nominatedMovies} 
                    nominatedMovies={nominatedMovies} 
                    buttonEvent={removeNomination} 
                    buttonTitle="Remove"
                  />  
  
                : null}
          </div>

    </div>
  );
}

export default App;
