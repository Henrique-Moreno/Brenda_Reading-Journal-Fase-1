import React, { useState, useEffect } from "react";
import './bookList.css';
import BookList from "../../components/BookList/BookList";
import BookForm from "../../components/BookForm/BookForm";
import NavBar from "../../components/NavBar/NavBar";

export default function BookListPage() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  const handleDelete = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
    localStorage.setItem("books", JSON.stringify(newBooks));
  };

  const handleEdit = (index) => {
    setBookToEdit({ ...books[index], index });
  };

  const handleUpdateBook = (updatedBook) => {
    const newBooks = [...books];
    newBooks[bookToEdit.index] = updatedBook; 
    setBooks(newBooks);
    setBookToEdit(null); 

    localStorage.setItem("books", JSON.stringify(newBooks));
  };

  return (
    <>
      <NavBar />
      <main className='bookListPage'>
        <h1>Lista de Livros</h1>
        <BookList books={books} onDelete={handleDelete} onEdit={handleEdit} />
        <div className="editSection">
          <h2>{bookToEdit ? "Editar Livro" : "Adicionar Livro"}</h2>
          <BookForm
            onAddBook={(newBook) => {
              const updatedBooks = [...books, newBook];
              setBooks(updatedBooks);
              localStorage.setItem("books", JSON.stringify(updatedBooks));
            }}
            onEditBook={handleUpdateBook}
            bookToEdit={bookToEdit}
          />
        </div>
      </main>
    </>
  );
}