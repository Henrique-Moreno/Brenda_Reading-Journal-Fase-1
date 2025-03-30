import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList/BookList";

const mockBooks = [
  {
    id: 1,
    title: "Hábitos Atômicos",
    author: "James Clear",
    genre: "Autoajuda",
    readAt: "2023-05-12",
  },
  {
    id: 2,
    title: "Os Quatro Compromissos",
    author: "Don Miguel Ruiz",
    genre: "Autoajuda",
    readAt: "2023-07-20",
  },
];

// Componente de teste para o BookList
test("renders BookList with books", () => {
  render(<BookList books={mockBooks} onDelete={() => {}} onEdit={() => {}} />);

  // Verifica se os livros estão presentes
  expect(screen.getByText(/hábitos atômicos/i)).toBeInTheDocument();
  expect(screen.getByText(/os quatro compromissos/i)).toBeInTheDocument();
});

