import "./BookList.css";

export default function BookList({ books, onDelete, onEdit }) {
  const formatDate = (dateString) => {
    if (!dateString) return ""; 
    const date = new Date(dateString);
    if (isNaN(date)) return "Data Inválida"; 
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <ul className="list">
      {books.map((book) => (
        <li key={book.id} className="listItem">
          {" "}
          <div>
            <strong>{book.title}</strong> - {book.author}
          </div>
          <div>Gênero: {book.genre}</div>
          <div>Data de Publicação: {formatDate(book.readAt)}</div>
          <div className="actions">
            <button onClick={() => onEdit(book)} className="editButton">
              Editar
            </button>
            <button onClick={() => onDelete(book.id)} className="deleteButton">
              Excluir
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
