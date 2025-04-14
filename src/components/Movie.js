import React from "react";
import { useState } from "react";
import Card from "./Card.js";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [flag, setFlag] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    let val = document.querySelector("input").value;

    fetch(`http://www.omdbapi.com/?apikey=99eb9fd1&s=${val}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
          setFlag(false);
          setMovies([]);
        }
        if (data.Search) {
          setMovies(data.Search);
          setFlag(true);
        }
      });
  }

  return (
    <>
      <h2>Search Movie</h2>
      <form>
        <input type="text" placeholder="Iron Man" />
        <button onClick={handleSubmit}>Search</button>
      </form>
      <div id="display">
        {flag ? (
          movies.map((mov) => <li><Card key={mov.imdbID} mov={mov} /></li>)
        ) : (
          <p className = "error">Invalid movie name. Please try again</p>
        )}
      </div>
    </>
  );
};

export default Movie;
