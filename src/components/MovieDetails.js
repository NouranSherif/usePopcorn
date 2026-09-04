import { useEffect, useState } from 'react';
import StarRating from './StarRating';
import Loader from './Loader';
import { useKey } from '../hooks/useKey';

function MovieDetails({ selectedId, onCloseMovie, onAddToWatched, watched }) {
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isWatched = watched.map(mov => mov.imdbID).includes(selectedId);
  const [userRating, setUserRating] = useState(null);
  const watchedUserRating = watched.find(
    mov => mov.imdbID === selectedId,
  )?.userRating;

  const {
    Title,
    Year,
    Poster,
    Runtime,
    imdbRating,
    Plot,
    Released,
    Actors,
    Director,
    Genre,
  } = movie;
  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title,
      Year,
      Poster,
      imdbRating: Number(imdbRating),
      Runtime: Number(Runtime.split(' ').at(0)),
      userRating,
    };

    onAddToWatched(newWatchedMovie);
    onCloseMovie();
  };

  const handleUserRating = val => {
    setUserRating(val);
  };

  useKey('Escape', onCloseMovie);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?i=${selectedId}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
      );

      const data = await res.json();

      setMovie(data);
      setIsLoading(false);
    }

    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!Title) return;
    document.title = `Movie | ${Title}`;
    return () => {
      document.title = 'usePopcorn';
    };
  }, [Title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={movie.Poster} alt={`Poster of ${movie.Title} movie`} />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p>{Genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={handleUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated this movie {watchedUserRating}
                  <span> ⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{Plot}</em>
            </p>
            <p>Starring {Actors}</p>
            <p>Directed by {Director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
