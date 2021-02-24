import PropTypes from 'prop-types';

const Book = ({ book, iD }) => (
  <tr>
    <td>{iD}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape.isRequired,
  iD: PropTypes.string.isRequired,
};

export default Book;
