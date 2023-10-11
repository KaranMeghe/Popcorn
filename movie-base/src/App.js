import { useState } from "react";
import { Body } from "./Components/layout/Body";
import Navbar from "./Components/layout/Navbar";
import { tempMovieData } from "./Components/utils/config";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar moviesList={[movies, setMovies]} />
      <Body moviesList={[movies, setMovies]} />
    </>
  );
}
