import { v4 as uuidv4 } from 'uuid';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  [uuidv4()]: {
    title: 'YDKJS',
    category: 'Learning',
  },
  [uuidv4()]: {
    title: 'Star Wars',
    category: 'Sci-fi',
  },
  [uuidv4()]: {
    title: 'Dunkirk',
    category: 'History',
  },
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const { title, category } = action.payload.book;
      return {
        ...state,
        [uuidv4()]: { title, category },
      };
    }
    case REMOVE_BOOK: {
      const { book } = action.payload;
      const newState = { ...state };
      delete newState[book];
      return newState;
    }
    default:
      return state;
  }
};

export default books;
