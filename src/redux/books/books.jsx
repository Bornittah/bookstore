const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';
// Reducer
let books = [];
export default function booksReducer(state = books, action) {
  books = [{
    id: 1,
    title: 'Learn how to code',
    author: 'Bornittah',
  },
  {
    id: 2,
    title: 'React-Redux Course',
    author: 'Bornittah',
  }];
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
}

// actions
export const addBook = (bookTitle, bookAuthor, bookId) => {
  const book = {
    type: ADD_BOOK,
    title: bookTitle,
    author: bookAuthor,
    id: bookId,
  };
  return book;
};

export const removeBook = (bookId) => {
  const removedBook = {
    type: REMOVE_BOOK,
    id: bookId,
  };
  return removedBook;
};
