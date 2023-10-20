import { useState } from "react";
import Body from "./Components/layout/Body";
import Navbar from "./Components/layout/Navbar";
import { tempWatchedData } from "./Components/utils/config";
import Box from "./Components/Movies/Box";
import MoviesList from "./Components/Movies/MoviesList";
import MoviesSummary from "./Components/Movies/MoviesSummary";
import MovieWatched from "./Components/Movies/MovieWatched";
import Loading from "./Components/Loading";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [load, setLoad] = useState(false);

  return (
    <>
      <Navbar moviesList={[movies, setMovies, setLoad]} />

      <Body>
        <Box>{load ? <Loading /> : <MoviesList moviesList={[movies]} />}</Box>

        <Box>
          <MoviesSummary summary={[watched, setWatched]} />
          <MovieWatched summary={[watched, setWatched]} />
        </Box>
      </Body>
    </>
  );
}
