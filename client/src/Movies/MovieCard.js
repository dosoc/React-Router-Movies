import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard (props) {
  
  const { title, director, metascore, stars } = props.movie;

  const [movieID, setMovieID] = useState()

  const toggleDetails = () => {
    setMovieID(props.movie.id);
  }

  return(
    <div className="movie-card">
      <Link to={`/movies/${props.movie.id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
    </div>
  );
}
