import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-li">
            <a href="/about" className="navbar-link">
              Sobre
            </a>
          </li>
          <li className="navbar-li">
            <a href="/booklist" className="navbar-link">
              Lista de livros
            </a>
          </li>
          <li className="navbar-li">
            <a href="/register" className="navbar-link">
              Cadastrar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
