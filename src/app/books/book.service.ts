import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBook } from './book.interface';
import { LoadBooks } from './store/book.actions';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private restRoot = 'http://localhost:4730/books';
  constructor(private http: HttpClient, private store: Store) {}

  // loadBooks() {
  //   this.getBooks().subscribe((books) =>
  //     this.store.dispatch(new LoadBooks(books))
  //   );
  // }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.restRoot);
  }
  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.restRoot}/${isbn}`);
  }
  createBook(book: IBook) {
    return this.http.post<IBook>(this.restRoot, book);
  }
}
