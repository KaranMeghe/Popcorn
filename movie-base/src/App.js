import { useState } from "react";
import Body from "./Components/layout/Body";
import Navbar from "./Components/layout/Navbar";
import { tempMovieData, tempWatchedData } from "./Components/utils/config";
import Box from "./Components/Movies/Box";
import MoviesList from "./Components/Movies/MoviesList";
import MoviesSummary from "./Components/Movies/MoviesSummary";
import MovieWatched from "./Components/Movies/MovieWatched";
import StarRating from "./Components/StarRating";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      {/* <Navbar moviesList={[movies, setMovies]} />

      <Body>
        <Box>
          <MoviesList moviesList={[movies, setMovies]} />
        </Box>

        <Box>
          <MoviesSummary summary={[watched, setWatched]} />
          <MovieWatched summary={[watched, setWatched]} />
        </Box>
      </Body> */}
      <StarRating />
    </>
  );
}
