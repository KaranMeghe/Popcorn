import { useState } from "react";
import { tempWatchedData } from "../utils/config";
import MoviesSummary from "./MoviesSummary";
import MovieWatched from "./MovieWatched";

const MoviesWatchedListBox = () => {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <MoviesSummary summary={[watched, setWatched]} />
          <MovieWatched summary={[watched, setWatched]} />
        </>
      )}
    </div>
  );
};

export default MoviesWatchedListBox;
