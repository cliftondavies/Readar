import { CHANGE_FILTER } from '../actions/index';

const filter = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload.filter !== 'All' ? action.payload.filter : '';
    default:
      return state;
  }
};

export default filter;
