import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, removeBook, changeFilter }) => {
  const defaultBooks = useSelector(state => state.books);
  const booksOnDisplay = books || defaultBooks;

  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <div>
      <CategoryFilter filterEvent={handleFilterChange} />

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
            <Book book={booksOnDisplay[id]} iD={id} key={id} deleteBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const filterBooks = (state, filter) => {
  const { books } = state;
  const filteredID = Object.keys(books).filter(id => books[id].category === filter);
  const filteredBooks = filteredID.map(id => [id, books[id]]);
  return Object.fromEntries(filteredBooks);
};

const mapStateToProps = state => {
  const { filter } = state;
  const books = (filter) ? filterBooks(state, filter) : state.books;

  return { books, filter };
};

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);
