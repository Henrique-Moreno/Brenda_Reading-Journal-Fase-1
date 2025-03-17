import "./about.css";
import NavBar from "../../components/NavBar/NavBar";

export default function About() {
  return (
    <>
    <NavBar />
      <main className="sobre-container">
        <h1 className="sobre-title">Sobre o Reading Journal</h1>
        <p className="sobre-text">
          O Reading Journal é uma aplicação desenvolvida para gerenciar sua
          lista de livros. Este projeto foi criado como parte da disciplina de
          Desenvolvimento de Sistemas Front-end do Curso de Graduação Online da
          PUCRS. Aqui, você pode cadastrar, visualizar, editar e excluir livros
          da sua lista pessoal.
        </p>
      </main>
    </>
  );
}
