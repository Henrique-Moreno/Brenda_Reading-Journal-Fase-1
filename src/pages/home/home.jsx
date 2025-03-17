import NavBar from "../../components/NavBar/NavBar";
import "./home.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="home-container">
        <h1 className="home-title">Bem-vindo ao Reading Journal!</h1>
        <p className="home-text">
          Aqui você pode gerenciar sua lista de livros, cadastrar novos títulos,
          editar informações e muito mais. Comece agora mesmo a organizar sua
          leitura!
        </p>
      </main>
    </>
  );
}
