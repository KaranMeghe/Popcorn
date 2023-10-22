import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Loading from "../Loading";
import StarRating from "../StarRating";
import { MOVIES_DETAILS } from "../utils/config";

const MoviesDetails = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState(0);
  //   const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = movieId;

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
    const data = await axios.get(MOVIES_DETAILS + selectedId);
    setMovieDetails(data?.data);

    console.log(data.data);
  };

  const stableMovieDetails = useCallback(fetchMovieDetails, [selectedId]);

  useEffect(() => {
    stableMovieDetails();
  }, [stableMovieDetails]);

  return (
    <div className="details">
      {movieDetails ? (
        <>
          <header>
            <button className="btn-back" onClick={() => setSelectedId(null)}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
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
              <StarRating maxRating={10} size={24} />
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
