import { useState } from "react";
import Body from "./Components/layout/Body";
import Navbar from "./Components/layout/Navbar";
import { tempWatchedData } from "./Components/utils/config";
import Box from "./Components/Movies/Box";
import MoviesList from "./Components/Movies/MoviesList";
import MoviesSummary from "./Components/Movies/MoviesSummary";
import MovieWatched from "./Components/Movies/MovieWatched";
import Loading from "./Components/Loading";
import MoviesDetails from "./Components/Movies/MoviesDetails";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [load, setLoad] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  console.log(movies);
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
            <MoviesDetails movieId={[selectedId, setSelectedId]} />
          ) : (
            <>
              <MoviesSummary summary={[watched, setWatched]} />
              <MovieWatched summary={[watched, setWatched]} />
            </>
          )}
        </Box>
      </Body>
    </>
  );
}
