import React, { useState, useEffect } from "react";
import "./BookForm.css";

export default function BookForm({ onAddBook, onEditBook, bookToEdit }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setGenre(bookToEdit.genre);
      setDate(bookToEdit.date);
    }
  }, [bookToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      genre,
      date,
    };

    if (bookToEdit) {
      onEditBook(newBook);
    } else {
      onAddBook(newBook);
    }

    setTitle("");
    setAuthor("");
    setGenre("");
    setDate("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título do Livro"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Gênero"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Data de Publicação"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">
        {bookToEdit ? "Atualizar Livro" : "Adicionar Livro"}
      </button>
    </form>
  );
}
