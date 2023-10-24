import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { MOVIES } from "../utils/config";

const Navbar = ({ moviesList }) => {
  const [movies, setMovies, setLoad] = moviesList;
  const [query, setQuery] = useState("");

  const fetchMovies = async () => {
    setLoad(true);
    const data = await axios.get(MOVIES + query);
    setMovies(data?.data?.Search);
    setLoad(false);
  };

  const stableFetchMovies = useCallback(fetchMovies, [
    query,
    setMovies,
    setLoad,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => stableFetchMovies(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [stableFetchMovies]);

  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>Popcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        id="searchInput"
      />

      {movies ? (
        <p className="num-results">
          Found <strong> {movies.length} </strong> results
        </p>
      ) : null}
    </nav>
  );
};

export default Navbar;
