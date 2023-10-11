import React from "react";
import { useState } from "react";
import MoviesList from "./MoviesList";

const MoviesListBox = ({ moviesList }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MoviesList moviesList={moviesList} />}
    </div>
  );
};

export default MoviesListBox;
