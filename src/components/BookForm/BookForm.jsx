import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function BookForm({ onAddBook, onEditBook, bookToEdit }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title || "");
      setAuthor(bookToEdit.author || "");
      setGenre(bookToEdit.genre || "");
      setDate(bookToEdit.readAt || "");
    } else {
      // Limpar os campos quando não estiver editando
      setTitle("");
      setAuthor("");
      setGenre("");
      setDate("");
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

    // Limpar os campos após a submissão
    setTitle("");
    setAuthor("");
    setGenre("");
    setDate("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label className="form-label">Título do Livro</Form.Label>
        <Form.Control
          type="text"
          placeholder="Título do Livro"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="form-label">Autor</Form.Label>
        <Form.Control
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="form-label">Gênero</Form.Label>
        <Form.Control
          type="text"
          placeholder="Gênero"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="form-label">Data de Publicação</Form.Label>
        <Form.Control
          type="date"
          placeholder="Data de Publicação"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {bookToEdit ? "Atualizar Livro" : "Adicionar Livro"}
      </Button>
    </Form>
  );
}
