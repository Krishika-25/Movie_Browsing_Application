import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <h2 className="logo">MovieFlix</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
}

export default Navbar;