import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';
import { getBook } from '../store/book.selectors';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  book!: IBook;
  book$!: Observable<IBook>;
  end$ = new EventEmitter<number>();
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    console.log(this.route);
    // this.book$ = this.store
    //   .select(getBook(this.route.snapshot.params.isbn))
    //   .pipe(filter((book) => !!book));
    this.book$ = this.service.getBook(this.route.snapshot.params.isbn);
    // this.route.params.subscribe((params) => {
    // this.service.getBook(params.isbn).subscribe((data) => (this.book = data));
    // });
    // this.service
    //   .getBook(this.route.snapshot.params.isbn)
    //   .pipe(takeUntil(this.end$))
    //   .subscribe((data) => {
    //     console.log(data);

    //     this.book = data;
    //   });
  }

  ngOnDestroy() {
    this.end$.emit(1);
  }
}
