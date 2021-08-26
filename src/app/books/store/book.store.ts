import { IBook } from '../book.interface';

export const bookFeatureName = 'BOOK_FEATURE';

export interface IBookState {
  books: IBook[];
}

export const initialBookState: IBookState = {
  books: [],
};
