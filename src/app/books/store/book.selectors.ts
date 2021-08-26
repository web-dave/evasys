import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { bookAdapter } from './book.entity';
import { bookFeatureName, IBookState } from './book.store';

const routerSelector = createFeatureSelector<RouterReducerState>('router');
export const { selectRouteParam } = getSelectors(routerSelector);

const bookFeatureSelector = createFeatureSelector<IBookState>(bookFeatureName);
const { selectAll, selectEntities } = bookAdapter.getSelectors();

export const getBooks = createSelector(bookFeatureSelector, selectAll);

export const getBook = (isbn: string) =>
  createSelector(
    bookFeatureSelector,
    (state: IBookState) => selectEntities(state)[isbn]
  );

export const bookSelector = createSelector(
  bookFeatureSelector,
  selectRouteParam('isbn'),
  (state, isbn) => state.entities[isbn || '']
);
