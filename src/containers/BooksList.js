import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index'; // removed changeFilter
// import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, removeBook }) => { // removed changeFilter
  // const defaultBooks = useSelector(state => state.books);
  // const booksOnDisplay = books || defaultBooks;
  let ids;
  if (books) { ids = Object.keys(books); }

  const handleRemoveBook = book => {
    removeBook(book);
  };

  // const handleFilterChange = filter => {
  //   changeFilter(filter);
  // };

  return (
    <div>
      {(ids && ids.length) ? ids.map(id => (
        <Book book={books[id]} iD={id} key={id} deleteBook={handleRemoveBook} />
      )) : null }

      {/* <CategoryFilter filterEvent={handleFilterChange} /> */}

      {/* <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {(ids && ids.length) ? ids.map(id => (
            <Book book={books[id]} iD={id} key={id} deleteBook={handleRemoveBook} />
          )) : null }
        </tbody>
      </table> */}
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
  // changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeBook })(BooksList); // removed changeFilter
