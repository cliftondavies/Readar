import PropTypes from 'prop-types';

const Book = ({ book, iD, deleteBook }) => (
  <tr>
    <td>{iD}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button type="button" onClick={() => deleteBook(iD)}>
        Remove Book
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape.isRequired,
  iD: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
