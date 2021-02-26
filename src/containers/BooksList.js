import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

export const BooksList = ({ books, removeBook }) => {
  const defaultBooks = useSelector(state => state.books);
  const booksOnDisplay = books || defaultBooks;

  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
      </thead>

      <tbody>
        {Object.keys(booksOnDisplay).map(id => (
          <Book book={books[id]} iD={id} key={id} deleteBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({ books: state.books });

BooksList.propTypes = {
  books: PropTypes.shape.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeBook })(BooksList);
