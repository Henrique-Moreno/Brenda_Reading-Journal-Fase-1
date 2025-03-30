import NavBar from "../../components/NavBar/NavBar";
import "./home.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="home-container">
        <h1 className="home-title pacifico-regular">Diário de Leitura</h1>
        <img src="/public/livros-1.svg" alt="Livros" className="home-image" />
      </main>
    </>
  );
}
