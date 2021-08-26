import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookFeatureName, IBookState } from './book.store';

export const getBooks = createSelector(
  createFeatureSelector(bookFeatureName),
  (state: IBookState) => state.books
);

export const getBook = (isbn: string) =>
  createSelector(createFeatureSelector(bookFeatureName), (state: IBookState) =>
    state.books.find((b) => b.isbn === isbn)
  );
