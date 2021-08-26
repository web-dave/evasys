import { EntityState } from '@ngrx/entity';
import { IBook } from '../book.interface';
import { bookAdapter } from './book.entity';

export const bookFeatureName = 'BOOK_FEATURE';

export interface IBookState extends EntityState<IBook> {}

export const initialBookState: IBookState = bookAdapter.getInitialState();
