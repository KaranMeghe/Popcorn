import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Loading from "../Loading";
import StarRating from "../StarRating";
import { MOVIES_DETAILS } from "../utils/config";

const MoviesDetails = ({ movieId, onAddWatched, urating }) => {
  const [movieDetails, setMovieDetails] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = movieId;
  const [rating] = urating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movieDetails;
  console.log(title);

  const fetchMovieDetails = async () => {
    setIsLoading(true);
    const data = await axios.get(MOVIES_DETAILS + selectedId);
    setMovieDetails(data?.data);
    setIsLoading(false);
    console.log(data.data);
  };

  const stableMovieDetails = useCallback(fetchMovieDetails, [selectedId]);

  useEffect(() => {
    stableMovieDetails();
  }, [stableMovieDetails]);

  const handleAdd = () => {
    const newWatchdMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating: rating,
    };
    onAddWatched(newWatchdMovie);
    setSelectedId(null);
  };

  console.log("rating", rating);

  return (
    <div className="details">
      {!isLoading ? (
        <>
          <header>
            <button className="btn-back" onClick={() => setSelectedId(null)}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {parseInt(runtime)} min
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating maxRating={10} size={24} urating={urating} />
              <button className="btn-add" onClick={handleAdd}>
                + Add To List
              </button>
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MoviesDetails;
