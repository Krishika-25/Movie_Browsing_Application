import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import "./css/App.css";

function App() {
  const [fav, setFav] = useState(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(fav));
  }, [fav]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home fav={fav} setFav={setFav} />} />
        <Route path="/favourites" element={<Favourites fav={fav} setFav={setFav} />} />
      </Routes>
    </>
  );
}

export default App;