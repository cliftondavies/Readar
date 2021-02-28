import PropTypes from 'prop-types';
import progress from '../assets/progress.png';

const Book = ({ book, iD, deleteBook }) => (
  <div>
    <div>
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

    <div>
      <img src={progress} alt="book progress" />

      <div>
        <span>64%</span>
        <span>Completed</span>
      </div>
    </div>

    <div>
      <span>CURRENT CHAPTER</span>
      <span>Chapter 17</span>

      <button type="button">
        UPDATE PROGRESS
      </button>
    </div>
  </div>

  // <tr>
  //   <td>{iD}</td>
  //   <td>{book.title}</td>
  //   <td>{book.category}</td>
  //   <td>
  //     <button type="button" onClick={() => deleteBook(iD)}>
  //       Remove Book
  //     </button>
  //   </td>
  // </tr>
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
