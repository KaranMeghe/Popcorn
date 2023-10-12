import { useState } from "react";
import Body from "./Components/layout/Body";
import Navbar from "./Components/layout/Navbar";
import { tempMovieData } from "./Components/utils/config";
import MoviesListBox from "./Components/Movies/MoviesListBox";
import MoviesList from "./Components/Movies/MoviesList";
import MoviesWatchedListBox from "./Components/Movies/MoviesWatchedListBox";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar moviesList={[movies, setMovies]} />

      <Body>
        <MoviesListBox>
          <MoviesList moviesList={[movies, setMovies]} />
        </MoviesListBox>
        <MoviesWatchedListBox />
      </Body>
    </>
  );
}
