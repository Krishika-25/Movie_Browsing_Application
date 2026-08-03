import { useState, useEffect } from "react";
import MovieCard from "../components/Moviecard";
import "../css/Home.css";

function Home({ fav, setFav }) {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (search === "") return;

        fetch(`https://www.omdbapi.com/?s=${search}&apikey=b8040f4`)
            .then((res) => res.json())
            .then((data) => setMovies(data.Search || []));
    }, [search]);

    return (
        <div className="container">

            <div className="search-box">
                <input
                    className="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search movies..."
                />
            </div>

            <div className="movies">
                {movies.map((m, index) => (
                    <MovieCard
                        key={m.imdbID + index}
                        movie={m}
                        fav={fav}
                        setFav={setFav}
                    />
                ))}
            </div>

        </div>
    );
}

export default Home;