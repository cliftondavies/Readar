import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions/index';
import user from '../assets/user.png';

const Navbar = ({ changeFilter }) => {
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <nav>
      <h2>
        Bookstore CMS
      </h2>

      <span>
        BOOKS
      </span>

      <CategoryFilter filterEvent={handleFilterChange} />

      <img src={user} alt="user logo" />
    </nav>
  );
};

Navbar.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default connect(null, { changeFilter })(Navbar);
