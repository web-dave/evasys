import { BookActions, LoadBooks, LOAD_BOOKS } from './book.actions';
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

    default:
      return state;
  }
}
