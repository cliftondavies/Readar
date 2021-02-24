import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const books = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const { title, category } = action.payload.book;
      return {
        ...state,
        [Date.now()]: { title, category },
      };
    }
    case REMOVE_BOOK: {
      const { id } = action.payload;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};

export default books;
