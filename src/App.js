import { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import NumResults from './components/NumResults';

import MoviesList from './components/MoviesList';
import WatchSummary from './components/WatchSummary';
import Box from './components/Box';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import MovieDetails from './components/MovieDetails';
import { useMovies } from './hooks/useMovies';
import { useLocalStorageState } from './hooks/useLocalStorageState';

export default function App() {
  const [query, setQuery] = useState('');

  const [watched, setWatched] = useLocalStorageState([], 'watchedMovies');

  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query);

  const handleSelectMovie = id => {
    setSelectedId(selectedId => (selectedId === id ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatchedMovie = movie => {
    setWatched(watched => [...watched, movie]);
  };
  const handleDeleteMovie = id => {
    setWatched(watched => watched.filter(mov => mov.imdbID !== id));
  };

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults numOfMovies={movies.length} />
      </Navbar>
      <main className="main">
        <Box>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MoviesList
              isWatched={false}
              movies={movies}
              onSelectMovie={handleSelectMovie}
            />
          )}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddToWatched={handleAddWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchSummary watchedMovies={watched} />
              <MoviesList
                movies={watched}
                isWatched={true}
                onDeleteMovie={handleDeleteMovie}
              />
            </>
          )}
        </Box>
      </main>
    </>
  );
}
