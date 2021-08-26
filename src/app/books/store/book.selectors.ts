import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookAdapter } from './book.entity';
import { bookFeatureName, IBookState } from './book.store';

const { selectAll, selectEntities } = bookAdapter.getSelectors();

export const getBooks = createSelector(
  createFeatureSelector(bookFeatureName),
  selectAll
);

export const getBook = (isbn: string) =>
  createSelector(
    createFeatureSelector(bookFeatureName),
    (state: IBookState) => selectEntities(state)[isbn]
  );
