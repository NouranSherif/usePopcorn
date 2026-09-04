import React from 'react';

function Movie({ isWatched, movie, onClick, onDeleteMovie }) {
  return (
    <li key={movie.imdbID} onClick={() => onClick(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        {isWatched ? (
          <>
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie.UserRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.Runtime} min</span>
            </p>
            <button
              className="btn-delete"
              onClick={() => onDeleteMovie(movie.imdbID)}
            >
              X
            </button>
          </>
        ) : (
          <>
            <p>
              <span>🗓</span>
              <span>{movie.Year}</span>
            </p>
          </>
        )}
      </div>
    </li>
  );
}

export default Movie;
