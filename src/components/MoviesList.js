import React from 'react';
import Movie from './Movie';
import WatchedMovie from './WatchedMovie';

function MoviesList({ isWatched, movies, onSelectMovie, onDeleteMovie }) {
  return (
    <ul className="list list-movies">
      {movies.map(movie =>
        !isWatched ? (
          <Movie
            movie={movie}
            isWatched={isWatched}
            key={movie.imdbID}
            onClick={onSelectMovie}
            onDeleteMovie={onDeleteMovie}
          />
        ) : (
          <WatchedMovie movie={movie} onDeleteMovie={onDeleteMovie} />
        ),
      )}
    </ul>
  );
}

export default MoviesList;
