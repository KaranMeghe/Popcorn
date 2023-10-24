import { useState } from "react";
import Body from "./Components/layout/Body";
import Navbar from "./Components/layout/Navbar";
import Box from "./Components/Movies/Box";
import MoviesList from "./Components/Movies/MoviesList";
import MoviesSummary from "./Components/Movies/MoviesSummary";
import MovieWatched from "./Components/Movies/MovieWatched";
import Loading from "./Components/Loading";
import MoviesDetails from "./Components/Movies/MoviesDetails";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [load, setLoad] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [rating, setRating] = useState(0);

  const handleMovieWatched = (movie) => {
    return setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatch = (id) => {
    return setWatched((watched) =>
      watched.filter((movie) => movie.imdbID !== id)
    );
  };

  return (
    <>
      <Navbar moviesList={[movies, setMovies, setLoad]} />

      <Body>
        <Box>
          {load ? (
            <Loading />
          ) : (
            <MoviesList moviesList={[movies, setSelectedId]} />
          )}
        </Box>

        <Box>
          {selectedId ? (
            <MoviesDetails
              movieId={[selectedId, setSelectedId]}
              onAddWatched={handleMovieWatched}
              urating={[rating, setRating]}
              watched={watched}
            />
          ) : (
            <>
              <MoviesSummary
                summary={[watched, setWatched]}
                urating={[rating, setRating]}
              />

              <MovieWatched
                summary={[watched, setWatched]}
                urating={[rating, setRating]}
                handleDeleteWatch={handleDeleteWatch}
              />
            </>
          )}
        </Box>
      </Body>
    </>
  );
}
