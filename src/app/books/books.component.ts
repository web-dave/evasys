import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WaitForBooks } from './store/book.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new WaitForBooks());
  }
}
