import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Loading from "../Loading";
import StarRating from "../StarRating";
import { MOVIES_DETAILS } from "../utils/config";

const MoviesDetails = ({ movieId, onAddWatched, urating, watched }) => {
  const [movieDetails, setMovieDetails] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = movieId;

  const [rating] = urating;

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

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

  const fetchMovieDetails = async () => {
    setIsLoading(true);
    const data = await axios.get(MOVIES_DETAILS + selectedId);
    setMovieDetails(data?.data);
    setIsLoading(false);
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
              {!isWatched ? (
                <>
                  <StarRating maxRating={10} size={24} urating={urating} />

                  {rating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add To List
                    </button>
                  )}
                </>
              ) : (
                <p>You Already Rate This Movie {rating} ⭐️</p>
              )}
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
