import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const BooksForm = ({ createBook }) => {
  const [book, setBook] = useState({ title: '', category: '' });
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];

  const handleChange = e => {
    if (e.target.tagName === 'INPUT') {
      setBook({ title: e.target.value, category: book.category });
    } else if (e.target.tagName === 'SELECT') {
      setBook({ title: book.title, category: e.target.value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;

    createBook({ title, category });
    setBook({ title: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input id="title" name="title" onChange={handleChange} value={book.title} required />
      </label>
      <br />

      <label htmlFor="category">
        Category:
        <select name="category" id="category" onChange={handleChange} defaultValue="Choose a category" required>
          <option value="Choose a category" disabled>Choose a category</option>
          <option value={CATEGORIES[0]}>{CATEGORIES[0]}</option>
          <option value={CATEGORIES[1]}>{CATEGORIES[1]}</option>
          <option value={CATEGORIES[2]}>{CATEGORIES[2]}</option>
          <option value={CATEGORIES[3]}>{CATEGORIES[3]}</option>
          <option value={CATEGORIES[4]}>{CATEGORIES[4]}</option>
          <option value={CATEGORIES[5]}>{CATEGORIES[5]}</option>
          <option value={CATEGORIES[6]}>{CATEGORIES[6]}</option>
        </select>
      </label>
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
