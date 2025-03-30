import BookForm from "../../components/BookForm/BookForm";
import NavBar from "../../components/NavBar/NavBar";
import { Toast, ToastContainer } from "react-bootstrap"; 
import { useNavigate } from "react-router-dom";
import { api } from "../../api/axios"; 
import { useState } from "react";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false); 
  const [toastMessage, setToastMessage] = useState(""); 
  const [toastVariant, setToastVariant] = useState("success"); 

  const handleAddBook = async (newBook) => {
    try {
      const response = await api.post("/books", newBook);

      console.log("Livro cadastrado com sucesso:", response.data);

      setToastMessage("Livro cadastrado com sucesso!");
      setToastVariant("success");
      setShowToast(true);

      setTimeout(() => {
        navigate("/booklist");
      }, 3000); 
    } catch (error) {
      console.error("Erro ao cadastrar livro:", error);

      setToastMessage("Erro ao cadastrar livro. Por favor, tente novamente.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  return (
    <>
      <NavBar />
      <main className="cadastrar-container">
        <h1 className="cadastrar-title">Cadastrar Livro</h1>
        <BookForm onAddBook={handleAddBook} />

        <ToastContainer position="top-end" className="p-3">
          <Toast
            bg={toastVariant} 
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">
                {toastVariant === "success" ? "Sucesso!" : "Erro!"}
              </strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
      </main>
    </>
  );
}
