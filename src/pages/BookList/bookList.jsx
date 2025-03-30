import React, { useState, useEffect, useRef } from "react";
import "./bookList.css";
import BookList from "../../components/BookList/BookList";
import BookForm from "../../components/BookForm/BookForm";
import NavBar from "../../components/NavBar/NavBar";
import { api } from "../../api/axios";
import { Toast, ToastContainer } from "react-bootstrap";

export default function BookListPage() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");

  const formRef = useRef(null); 

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data);
    } catch (error) {
      showErrorToast("Erro ao carregar livros: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
      showSuccessToast("Livro removido com sucesso!");
    } catch (error) {
      showErrorToast("Erro ao remover livro: " + error.message);
    }
  };

  const handleEdit = (book) => {
    setBookToEdit(book);
    scrollToForm();
  };

  const handleUpdateBook = async (updatedBook) => {
    try {
      await api.put(`/books/${bookToEdit.id}`, {
        title: updatedBook.title,
        author: updatedBook.author,
        genre: updatedBook.genre,
        readAt: updatedBook.date,
      });
      setBooks(
        books.map((book) => (book.id === bookToEdit.id ? updatedBook : book))
      );
      setBookToEdit(null);
      showSuccessToast("Livro atualizado com sucesso!");
    } catch (error) {
      showErrorToast("Erro ao atualizar livro: " + error.message);
    }
  };

  const handleAddBook = async (newBook) => {
    try {
      await api.post("/books", {
        title: newBook.title,
        author: newBook.author,
        genre: newBook.genre,
        readAt: newBook.date,
      });
      fetchBooks(); 
      showSuccessToast("Livro adicionado com sucesso!");
    } catch (error) {
      showErrorToast("Erro ao adicionar livro: " + error.message);
    }
  };

  const showSuccessToast = (message) => {
    setToastMessage(message);
    setToastVariant("success");
    setShowToast(true);
  };

  const showErrorToast = (message) => {
    setToastMessage(message);
    setToastVariant("danger");
    setShowToast(true);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar />
      <main className="bookListPage">
        <h1>Lista de Livros</h1>
        <BookList books={books} onDelete={handleDelete} onEdit={handleEdit} />
        <div className="editSection" ref={formRef}>
          <h2>{bookToEdit ? "Editar Livro" : "Adicionar Livro"}</h2>
          <BookForm
            onAddBook={handleAddBook}
            onEditBook={handleUpdateBook}
            bookToEdit={bookToEdit}
          />
        </div>

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
