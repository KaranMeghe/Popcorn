import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { MOVIES_DETAILS } from "../utils/config";

const MoviesDetails = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [selectedId, setSelectedId] = movieId;

  const fetchMovieDetails = async () => {
    const data = await axios.get(MOVIES_DETAILS + selectedId);
    setMovieDetails(data?.data);
    console.log(data.data);
  };

  const stableMovieDetails = useCallback(fetchMovieDetails, [selectedId]);

  useEffect(() => {
    stableMovieDetails();
  }, [stableMovieDetails]);

  return (
    <div>
      <button className="btn-black" onClick={() => setSelectedId(null)}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
};

export default MoviesDetails;
