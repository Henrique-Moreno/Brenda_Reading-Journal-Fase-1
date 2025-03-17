import "./Register.css";
import BookForm from "../../components/BookForm/BookForm";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleAddBook = (newBook) => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const updatedBooks = [...storedBooks, newBook];

    localStorage.setItem("books", JSON.stringify(updatedBooks));

    navigate("/booklist");
  };

  return (
    <>
      <NavBar />
      <main className="cadastrar-container">
        <h1 className="cadastrar-title">Cadastrar Livro</h1>
        <BookForm onAddBook={handleAddBook} />
      </main>
    </>
  );
}
