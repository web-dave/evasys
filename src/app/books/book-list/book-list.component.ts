import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$!: Observable<IBook[]>;
  search = '';
  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  findBook(event: Event) {
    console.log((event.target as HTMLInputElement).value);

    this.search = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks(); //.subscribe((data) => (this.books = data));
  }

  goTopBookDetails(data: IBook) {
    console.table(data);

    this.router.navigate([data.isbn], {
      relativeTo: this.route,
    });
  }
}
