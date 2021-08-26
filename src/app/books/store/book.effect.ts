import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { BookService } from '../book.service';
import { LoadBooks, WAIT_FOR_BOOKS } from './book.actions';

@Injectable()
export class BookEffect {
  @Effect({ dispatch: true })
  load$ = this.actions$.pipe(
    tap((action) => console.log('Effect', action)),
    ofType(WAIT_FOR_BOOKS),
    exhaustMap(() =>
      this.service.getBooks().pipe(
        tap((foo) => console.log('Effect2', foo)),
        map((data) => new LoadBooks(data))
      )
    )
  );

  constructor(private actions$: Actions, private service: BookService) {}
}
