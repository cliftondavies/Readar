import PropTypes from 'prop-types';

const CategoryFilter = ({ filterEvent }) => (
  <label htmlFor="filter">
    CATEGORIES
    <select name="filter" id="filter" onChange={e => filterEvent(e.target.value)} required>
      <option value="All">All</option>
      <option value="Action">Action</option>
      <option value="Biography">Biography</option>
      <option value="History">History</option>
      <option value="Horror">Horror</option>
      <option value="Kids">Kids</option>
      <option value="Learning">Learning</option>
      <option value="Sci-fi">Sci-fi</option>
    </select>
  </label>
);

CategoryFilter.propTypes = {
  filterEvent: PropTypes.func.isRequired,
};

export default CategoryFilter;
