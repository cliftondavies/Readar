import PropTypes from 'prop-types';
import progress from '../assets/progress.png';

const Book = ({ book, iD, deleteBook }) => (
  <div className="book-info">
    <div className="book-info-one">
      <span>{book.category}</span>

      <h4>{book.title}</h4>

      <span>Suzanne Collins</span>

      <ul>
        <li>Comments</li>
        <li>
          <button type="button" onClick={() => deleteBook(iD)}>
            Remove
          </button>
        </li>
        <li>Edit</li>
      </ul>
    </div>

    <div className="book-info-two">
      <img src={progress} alt="book progress" />

      <div>
        <span>
          {Math.floor((Math.random() * 75))}
          %
        </span>
        <span>Completed</span>
      </div>
    </div>

    <div className="book-info-three">
      <span>CURRENT CHAPTER</span>
      <span>
        {'Chapter '}
        {Math.floor((Math.random() * 17))}
      </span>

      <button type="button">
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  iD: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
