import "./BookList.css";

export default function BookList({ books, onDelete, onEdit }) {
  return (
    <ul className="list">
      {books.map((book, index) => (
        <li key={index} className="listItem">
          <div>
            <strong>{book.title}</strong> - {book.author}
          </div>
          <div>Gênero: {book.genre}</div>
          <div>Data de Publicação: {book.date}</div>
          <div className="actions">
            <button onClick={() => onEdit(index)} className="editButton">
              Editar
            </button>
            <button onClick={() => onDelete(index)} className="deleteButton">
              Excluir
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
