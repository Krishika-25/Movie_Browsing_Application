import "../css/MovieCard.css";

function MovieCard({ movie, fav, setFav }) {
  const isFav = fav.some((f) => f.imdbID === movie.imdbID);

  function handleFav() {
    if (isFav) {
      setFav(fav.filter((f) => f.imdbID !== movie.imdbID));
    } else {
      setFav([...fav, movie]);
    }
  }

  return (
    <div className="card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/150"
        }
      />
      <h3>{movie.Title}</h3>

      <button onClick={handleFav}>
        {isFav ? "🤍 Remove" : "🤍 Add"}
      </button>
    </div>
  );
}

export default MovieCard;