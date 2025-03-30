import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Register from "../pages/Register/register";
import { MemoryRouter } from 'react-router-dom';
import { api } from "../api/axios";
import { vi } from 'vitest';

// Mock do react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

// Mock do Axios
vi.mock("../api/axios", () => ({
  api: {
    post: vi.fn(),
  },
}));


// Componente de teste para pagina Register
test("renders Register page and submits the form", async () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );

  // Preenche os campos do formulário
  fireEvent.change(screen.getByPlaceholderText(/título do livro/i), {
    target: { value: "Admirável Mundo Novo" },
  });
  fireEvent.change(screen.getByPlaceholderText(/autor/i), {
    target: { value: "João Autor" },
  });
  fireEvent.change(screen.getByPlaceholderText(/gênero/i), {
    target: { value: "Ficção" },
  });
  fireEvent.change(screen.getByPlaceholderText(/data de publicação/i), {
    target: { value: "2023-01-01" },
  });

  fireEvent.click(screen.getByText(/adicionar livro/i));

  await waitFor(() => {
    expect(api.post).toHaveBeenCalledTimes(1);
  });

  // Verifica se a função handleAddBook foi chamada com os valores corretos
  expect(api.post).toHaveBeenCalledWith("/books", {
    title: "Admirável Mundo Novo",
    author: "João Autor",
    genre: "Ficção",
    date: "2023-01-01", 
  });
});
