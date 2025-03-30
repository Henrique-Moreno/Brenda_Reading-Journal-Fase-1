import { render, screen } from "@testing-library/react";
import NavBar from '../components/NavBar/NavBar';

// Componente de teste para o NavBar
test("renders NavBar with Home icon and links", () => {
  render(<NavBar />);

  // Verifica se o ícone de casa está presente
  const homeLink = screen.getByRole("link", {
    name: "", 
  });

  // Verifica se o link do ícone de casa tem a classe "home-link"
  expect(homeLink).toHaveClass("home-link");

  expect(homeLink).toBeInTheDocument();

  // Verifica se os links estão presentes
  expect(screen.getByText(/sobre/i)).toBeInTheDocument();
  expect(screen.getByText(/ver leituras/i)).toBeInTheDocument();
  expect(screen.getByText(/cadastrar/i)).toBeInTheDocument();
});


