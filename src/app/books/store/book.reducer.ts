import {
  BookActions,
  LoadBooks,
  LOAD_BOOKS,
  SAVE_NEW_BOOK,
} from './book.actions';
import { bookAdapter } from './book.entity';
import { IBookState, initialBookState } from './book.store';

export function bookReducer(
  state: IBookState = initialBookState,
  action: BookActions
): IBookState {
  switch (action.type) {
    case LOAD_BOOKS:
      return bookAdapter.setAll((action as LoadBooks).books, state);
    //     case SAVE_NEW_BOOK:
    //         return bookAdapter.addOne()

    default:
      return state;
  }
}
