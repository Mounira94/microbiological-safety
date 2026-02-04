import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/microbiological-safety/" className="nav-logo">
          <span className="logo-icon"><img src="https://img.icons8.com/?size=100&id=wZUoRkt8QQcW&format=png&color=000000" alt="Logo de la bactérie pathogène" /></span>
          <span>Guide des bactéries pathogènes</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/microbiological-safety/" className="nav-link">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/microbiological-safety/services" className="nav-link">Types de bactéries</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

