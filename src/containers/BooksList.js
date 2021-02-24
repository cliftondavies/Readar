import { useSelector, connect } from 'react-redux';
import Book from '../components/Book';

export const BooksList = () => {
  const books = useSelector(state => state.books);

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>

      <tbody>
        {Object.keys(books).map(id => (<Book book={books[id]} iD={id} key={id} />))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
