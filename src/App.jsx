import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/home";
import About from "./pages/About/about";
import Register from "./pages/Register/register";
import BookListPage from "./pages/BookList/bookList";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/booklist" element={<BookListPage />} />
        </Routes>
      </div>
    </Router>
  );
};


