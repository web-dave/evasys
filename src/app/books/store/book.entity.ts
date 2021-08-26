import { createEntityAdapter } from '@ngrx/entity';
import { IBook } from '../book.interface';

export const bookAdapter = createEntityAdapter<IBook>({
  selectId: (book) => book.isbn,
});
