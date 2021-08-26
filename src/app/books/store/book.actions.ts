import { Action } from '@ngrx/store';
import { IBook } from '../book.interface';
import { bookFeatureName } from './book.store';

export const LOAD_BOOKS = `[${bookFeatureName}] Load books into Store`;
export const WAIT_FOR_BOOKS = `[${bookFeatureName}] Load Books from Service`;

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;
  constructor(public books: IBook[]) {}
}

export class WaitForBooks implements Action {
  readonly type = WAIT_FOR_BOOKS;
}

export type BookActions = LoadBooks | WaitForBooks;
