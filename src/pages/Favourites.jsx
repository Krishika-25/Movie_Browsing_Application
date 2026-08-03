import MovieCard from "../components/Moviecard";
import "../css/Favorites.css";
function Favourites({ fav, setFav }) {
  return (
    <div className="container">
      <h2>Favourites</h2>

      {fav.length === 0 ? (
        <p className="empty">No favourites yet ❤️</p>
      ) : (
        <div className="movies">
          {fav.map((m, index) => (
            <MovieCard
              key={m.imdbID + index}
              movie={m}
              fav={fav}
              setFav={setFav}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;