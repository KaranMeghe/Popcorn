const MovieWatched = ({ summary }) => {
  const [watched, setWatched] = summary;

  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
              </p>

              <button className="btn-toggle">-</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieWatched;
