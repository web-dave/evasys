import {
  BookActions,
  LoadBooks,
  LOAD_BOOKS,
  SAVE_NEW_BOOK,
} from './book.actions';
import { IBookState, initialBookState } from './book.store';

export function bookReducer(
  state: IBookState = initialBookState,
  action: BookActions
): IBookState {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        books: (action as LoadBooks).books,
      };
    //     case SAVE_NEW_BOOK:
    //         return {
    // ...state,
    // books: [...state.books, action.book]
    //         }

    default:
      return state;
  }
}
