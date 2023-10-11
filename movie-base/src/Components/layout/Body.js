import MoviesListBox from "../Movies/MoviesListBox";
import MoviesWatchedListBox from "../Movies/MoviesWatchedListBox";

const Body = ({ moviesList }) => {
  return (
    <main className="main">
      <MoviesListBox moviesList={moviesList} />
      <MoviesWatchedListBox />
    </main>
  );
};

export default Body;
