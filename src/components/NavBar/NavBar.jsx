import "./NavBar.css";
import { FaHome } from "react-icons/fa";

export default function NavBar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <a href="/" className="navbar-link home-link">
              <FaHome />
            </a>
          </li>
          <li className="navbar-li center-links">
            <a href="/about" className="navbar-link">
              Sobre
            </a>
            <a href="/register" className="navbar-link">
              Cadastrar
            </a>
            <a href="/booklist" className="navbar-link">
              Ver Leituras
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
