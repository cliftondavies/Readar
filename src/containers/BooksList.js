import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => {
  let ids;
  if (books) { ids = Object.keys(books); }

  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div className="book-list">
      {(ids && ids.length) ? ids.map(id => (
        <Book book={books[id]} iD={id} key={id} deleteBook={handleRemoveBook} />
      )) : null }
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
};

export default connect(mapStateToProps, { removeBook })(BooksList);
